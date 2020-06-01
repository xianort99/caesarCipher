"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_OPTIONS = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz',
    shift: 3,
    casing: 'default',
    whitespace: true
};
function encrypt(text, options) {
    var _a, _b, _c, _d;
    var ALPHABET = ((_a = options === null || options === void 0 ? void 0 : options.alphabet) !== null && _a !== void 0 ? _a : DEFAULT_OPTIONS.alphabet).toLocaleLowerCase(), SHIFT = Math.floor((_b = options === null || options === void 0 ? void 0 : options.shift) !== null && _b !== void 0 ? _b : DEFAULT_OPTIONS.shift), CASING = (_c = options === null || options === void 0 ? void 0 : options.casing) !== null && _c !== void 0 ? _c : DEFAULT_OPTIONS.casing, WHITESPACE = (_d = options === null || options === void 0 ? void 0 : options.whitespace) !== null && _d !== void 0 ? _d : DEFAULT_OPTIONS.whitespace;
    var ALPHABET_LENGTH = ALPHABET.length;
    var encryptedText = '';
    if (SHIFT > ALPHABET_LENGTH || SHIFT < -ALPHABET_LENGTH)
        return;
    for (var i = 0, l = text.length; i < l; i++) {
        var CHARACTER = text[i], CHARACTER_INDEX = ALPHABET.indexOf(CHARACTER.toLocaleLowerCase());
        var shiftedIndex = 0;
        if (CHARACTER_INDEX === -1) {
            if (!/^\s$/.test(CHARACTER) || WHITESPACE) {
                encryptedText += CHARACTER;
            }
            continue;
        }
        shiftedIndex = CHARACTER_INDEX + SHIFT;
        if (shiftedIndex > ALPHABET_LENGTH) {
            shiftedIndex -= ALPHABET_LENGTH;
        }
        else if (shiftedIndex < 0) {
            shiftedIndex += ALPHABET_LENGTH;
        }
        if (CASING === 'uppercase') {
            encryptedText += ALPHABET[shiftedIndex].toLocaleUpperCase();
            continue;
        }
        if (CASING === 'lowercase') {
            encryptedText += ALPHABET[shiftedIndex].toLocaleLowerCase();
            continue;
        }
        if (CHARACTER === CHARACTER.toLocaleUpperCase()) {
            encryptedText += ALPHABET[shiftedIndex].toLocaleUpperCase();
        }
        else {
            encryptedText += ALPHABET[shiftedIndex];
        }
    }
    return encryptedText;
}
exports.default = encrypt;
//# sourceMappingURL=encrypt.js.map