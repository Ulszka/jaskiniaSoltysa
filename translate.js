import fs from 'fs';
import path from 'path';

const plPath = path.resolve('src/locales/pl.json');
const enPath = path.resolve('src/locales/en.json');

// Convert nested JSON into a single flat key-value list
function flattenObject(obj, prefix = '') {
  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

// Convert flat key-value list back into nested JSON
function unflattenObject(flatObj) {
  const result = {};
  for (const [key, value] of Object.entries(flatObj)) {
    const keys = key.split('.');
    let current = result;
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (i === keys.length - 1) {
        current[k] = value;
      } else {
        current[k] = current[k] || {};
        current = current[k];
      }
    }
  }
  return result;
}

// Translate a single string using MyMemory API
async function translateText(text) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pl|en`;
  const response = await fetch(url);
  const data = await response.json();
  
  if (data && data.responseData) {
    return data.responseData.translatedText;
  }
  return text; // Fallback to original text if request fails
}

async function run() {
  try {
    console.log('🔄 Translating src/locales/pl.json into English...');
    const plData = JSON.parse(fs.readFileSync(plPath, 'utf8'));
    const flatPl = flattenObject(plData);
    const translatedFlat = {};

    const entries = Object.entries(flatPl);
    for (let i = 0; i < entries.length; i++) {
      const [key, text] = entries[i];
      const translatedText = await translateText(text);
      translatedFlat[key] = translatedText;
      console.log(`[${i + 1}/${entries.length}] [PL] "${text}" ➔ [EN] "${translatedText}"`);

      // Small delay between requests to be polite to the API
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    const enData = unflattenObject(translatedFlat);
    fs.writeFileSync(enPath, JSON.stringify(enData, null, 2), 'utf8');
    console.log('✅ Translation complete! Generated src/locales/en.json');
  } catch (err) {
    console.error('❌ Translation failed:', err);
  }
}

run();