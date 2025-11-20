function splitWords(text) {
    if (typeof text !== 'string') {
        return [];
    }
    return text.trim().split(/\s+/).filter(word => word.length > 0);
}

module.exports = splitWords;