"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const caesar_cipher_1 = __importDefault(require("../../bin/caesar_cipher"));
const STRING = 'Hello', STRING_WITH_WHITESPACE = 'hello   world';
const ARABIC_ALPHABET = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
describe('#caesarCipher', function () {
    it("should use another language's alphabet to shift a string", function () {
        chai_1.expect(caesar_cipher_1.default('ريان', { alphabet: ARABIC_ALPHABET })).to.equal('شتثي');
    });
    it('should output shifted string', function () {
        chai_1.expect(caesar_cipher_1.default(STRING)).to.equal('Khoor');
    });
    it('should output a string shifted by 1', function () {
        chai_1.expect(caesar_cipher_1.default(STRING, { shift: 1 })).to.equal('Ifmmp');
    });
    it('should output same string', function () {
        chai_1.expect(caesar_cipher_1.default(STRING, { shift: 26 })).to.equal(STRING);
        chai_1.expect(caesar_cipher_1.default(STRING, { shift: -26 })).to.equal(STRING);
        chai_1.expect(caesar_cipher_1.default(STRING, { shift: 0 })).to.equal(STRING);
    });
    it('should output a negatively shifted string', function () {
        chai_1.expect(caesar_cipher_1.default(STRING, { shift: -1 })).to.equal('Gdkkn');
    });
    it('should output an all uppercase string', function () {
        chai_1.expect(caesar_cipher_1.default(STRING, { casing: 'uppercase' })).to.equal('KHOOR');
    });
    it('should output an all lowercase string', function () {
        chai_1.expect(caesar_cipher_1.default(STRING, { casing: 'lowercase' })).to.equal('khoor');
    });
    it('should output a string with preserved whitespace', function () {
        chai_1.expect(caesar_cipher_1.default(STRING_WITH_WHITESPACE, { whitespace: true })).to.equal('khoor   zruog');
    });
    it('should output a whitespace filtered string', function () {
        chai_1.expect(caesar_cipher_1.default(STRING_WITH_WHITESPACE, { whitespace: false })).to.equal('khoorzruog');
    });
});
//# sourceMappingURL=caesar_cipher.spec.js.map