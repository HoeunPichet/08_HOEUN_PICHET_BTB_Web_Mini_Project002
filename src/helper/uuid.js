import { v4 as uuidv4 } from 'uuid';

const wordUUIDMap = new Map();

// Convert from word to uuid
export function wordToUUID(word) {
    if (wordUUIDMap.has(word)) {
        return wordUUIDMap.get(word);
    }
    const uuid = uuidv4();
    wordUUIDMap.set(word, uuid);
    return uuid;
}

// Convert from uuid back to work
export function uuidToWord(uuid) {
    for (const [word, mappedUUID] of wordUUIDMap.entries()) {
        if (mappedUUID === uuid) {
            return word;
        }
    }
    return null;
}