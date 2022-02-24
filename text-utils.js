const fixText = async (text) => {
    // console.log(text, 'aquiiiii <<<<<');
    const upperCaseFirstLetter = string =>
        `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;

    const lowerCaseAllWordsExceptFirstLetters = string =>
        string.replaceAll(/\S*/g, word =>
            `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`
        );
    // console.log(upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(text)), 'depois <<<<<');
    return await upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(text));
}

module.exports = { fixText }