"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_OPTIONS = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz',
    shift: 3,
    casing: 'default',
    whitespace: true
};
function caesarCipher(text, options) {
    var e_1, _a;
    var _b, _c, _d, _e;
    var ALPHABET = ((_b = options === null || options === void 0 ? void 0 : options.alphabet) !== null && _b !== void 0 ? _b : DEFAULT_OPTIONS.alphabet).toLocaleLowerCase(), SHIFT = Math.floor((_c = options === null || options === void 0 ? void 0 : options.shift) !== null && _c !== void 0 ? _c : DEFAULT_OPTIONS.shift), CASING = (_d = options === null || options === void 0 ? void 0 : options.casing) !== null && _d !== void 0 ? _d : DEFAULT_OPTIONS.casing, WHITESPACE = (_e = options === null || options === void 0 ? void 0 : options.whitespace) !== null && _e !== void 0 ? _e : DEFAULT_OPTIONS.whitespace;
    var ALPHABET_LENGTH = ALPHABET.length;
    var encryptedText = '';
    if (SHIFT > ALPHABET_LENGTH || SHIFT < -ALPHABET_LENGTH)
        return;
    try {
        for (var text_1 = __values(text), text_1_1 = text_1.next(); !text_1_1.done; text_1_1 = text_1.next()) {
            var CHARACTER = text_1_1.value;
            var CHARACTER_INDEX = ALPHABET.indexOf(CHARACTER.toLocaleLowerCase());
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
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (text_1_1 && !text_1_1.done && (_a = text_1.return)) _a.call(text_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return encryptedText;
}
exports.default = caesarCipher;
//# sourceMappingURL=caesar_cipher.js.map