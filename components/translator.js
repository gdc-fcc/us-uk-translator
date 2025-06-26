const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const pc2 = (str) => {
    return [...str].map((x,i) => i == 0 ? x.toUpperCase(): x).join('')
}
const hl = str => '<span class="highlight">' + str + '</span>'

class Translator {
  toUK(text) {
    for (const [pattern, replacement] of Object.entries(americanOnly)) {
        const regex = new RegExp('\\b' + pattern + '\\b', 'i')
        text = text.replace(regex, hl(replacement))
    }
    for (const [pattern, replacement] of Object.entries(americanToBritishSpelling)) {
        const regex = new RegExp('\\b' + pattern + '\\b', 'i')
        text = text.replace(regex, hl(replacement))
    }
    for (const [pattern, replacement] of Object.entries(americanToBritishTitles)) {
        const regex = new RegExp(pattern.replace('.', '\\.'))
        text = text.replace(regex, hl(replacement))
        const regex2 = new RegExp(pc2(pattern).replace('.', '\\.'))
        text = text.replace(regex2, hl(pc2(replacement)))
    }
    const re = /\d+:\d+/
    text = text.replace(re, match => hl(match.replace(':', '.')))
     return text;
  }
  toUS(text) {
    for (const [pattern, replacement] of Object.entries(britishOnly).reverse()) {
        const regex = new RegExp('\\b' + pattern + '\\b', 'i')
        text = text.replace(regex, hl(replacement))
    }
    for (const [replacement, pattern] of Object.entries(americanToBritishSpelling)) {
        const regex = new RegExp('\\b' + pattern + '\\b', 'i')
        text = text.replace(regex, hl(replacement))
    }
    for (const [replacement, pattern] of Object.entries(americanToBritishTitles)) {
        const regex = new RegExp('\\b' + pattern + '\\b')
        text = text.replace(regex, hl(replacement))
        const regex2 = new RegExp('\\b' + pc2(pattern) + '\\b')
        text = text.replace(regex2, hl(pc2(replacement)))
    }
    const re = /\d+\.\d+/
    text = text.replace(re, match => hl(match.replace('.', ':')))
     return text;
  }
}

module.exports = Translator;