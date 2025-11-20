const splitWords = require('./wordSplitter');

describe('Word Splitter Functionality', () => {
    test('should correctly split a normal sentence', () => {
        expect(splitWords("CI/CD technology is crucial")).toEqual(["CI/CD", "technology", "is", "crucial"]);
    });

    test('should handle multiple spaces and leading/trailing spaces', () => {
        expect(splitWords("  many   spaces   here ")).toEqual(["many", "spaces", "here"]);
    });

    test('should return an empty array for an empty string or only spaces', () => {
        expect(splitWords("")).toEqual([]);
        expect(splitWords("   ")).toEqual([]);
    });
});