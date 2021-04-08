const capitalize = (text) => {
    if(text === '') {
        return ''
    }
    const [firstSymbol, ...restSubstring] = text;
    return `${firstSymbol.toUpperCase()}${restSubstring.join('')}`;
};

export { capitalize }