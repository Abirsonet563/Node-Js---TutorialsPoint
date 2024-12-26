const reverseString = (str) => {
    return str.split('').reverse('').join('');
}

console.log(reverseString('Hi'));

module.exports = {reverseString};