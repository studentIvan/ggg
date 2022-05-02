export interface DictionaryAPIResponse {
  word:      string;
  phonetic:  string;
  phonetics: Phonetic[];
  origin:    string;
  meanings:  Meaning[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions:  Definition[];
}

export interface Definition {
  definition: string;
  example:    string;
  synonyms:   string[];
  antonyms:   string[];
}

export interface Phonetic {
  text:   string;
  audio?: string;
}


export const fetchDictionaryApi = (word: string): Promise<DictionaryAPIResponse> => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${ word }`)
    .then(response => response.json());
}
