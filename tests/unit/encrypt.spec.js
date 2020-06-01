"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const encrypt_1 = __importDefault(require("../../bin/encrypt"));
const STRING = 'Hello', STRING_WITH_WHITESPACE = 'hello   world', ARABIC_ALPHABET = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
describe('#encrypt', function () {
    it('should use the arabic alphabet to shift an arabic string', function () {
        chai_1.expect(encrypt_1.default('ريان', { alphabet: ARABIC_ALPHABET })).to.equal('شتثي');
    });
    it('should output shifted string', function () {
        chai_1.expect(encrypt_1.default(STRING)).to.equal('Khoor');
    });
    it('should output a string shifted by 1', function () {
        chai_1.expect(encrypt_1.default(STRING, { shift: 1 })).to.equal('Ifmmp');
    });
    it('should output same string', function () {
        chai_1.expect(encrypt_1.default(STRING, { shift: 26 })).to.equal(STRING);
        chai_1.expect(encrypt_1.default(STRING, { shift: 0 })).to.equal(STRING);
    });
    it('should output a negatively shifted string', function () {
        chai_1.expect(encrypt_1.default(STRING, { shift: -1 })).to.equal('Gdkkn');
    });
    it('should output an all uppercase string', function () {
        chai_1.expect(encrypt_1.default(STRING, { casing: 'uppercase' })).to.equal('KHOOR');
    });
    it('should output an all lowercase string', function () {
        chai_1.expect(encrypt_1.default(STRING, { casing: 'lowercase' })).to.equal('khoor');
    });
    it('should output a string with preserved whitespace', function () {
        chai_1.expect(encrypt_1.default(STRING_WITH_WHITESPACE, { whitespace: true })).to.equal('khoor   zruog');
    });
    it('should output a whitespace filtered string', function () {
        chai_1.expect(encrypt_1.default(STRING_WITH_WHITESPACE, { whitespace: false })).to.equal('khoorzruog');
    });
});
//# sourceMappingURL=encrypt.spec.js.map