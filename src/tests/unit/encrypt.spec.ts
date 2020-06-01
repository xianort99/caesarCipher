import { expect } from 'chai';

import encrypt from '../../bin/encrypt';

const STRING = 'Hello',
    STRING_WITH_WHITESPACE = 'hello   world';

const ARABIC_ALPHABET = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';

describe('#encrypt', function () {
    it('should use the arabic alphabet to shift an arabic string', function () {
        expect(encrypt('ريان', { alphabet: ARABIC_ALPHABET })).to.equal('شتثي');
    });

    it('should output shifted string', function () {
        expect(encrypt(STRING)).to.equal('Khoor');
    });

    it('should output a string shifted by 1', function () {
        expect(encrypt(STRING, { shift: 1 })).to.equal('Ifmmp');
    });

    it('should output same string', function () {
        expect(encrypt(STRING, { shift: 26 })).to.equal(STRING);
        expect(encrypt(STRING, { shift: 0 })).to.equal(STRING);
    });

    it('should output a negatively shifted string', function () {
        expect(encrypt(STRING, { shift: -1 })).to.equal('Gdkkn');
    });

    it('should output an all uppercase string', function () {
        expect(encrypt(STRING, { casing: 'uppercase' })).to.equal('KHOOR');
    });

    it('should output an all lowercase string', function () {
        expect(encrypt(STRING, { casing: 'lowercase' })).to.equal('khoor');
    });

    it('should output a string with preserved whitespace', function () {
        expect(encrypt(STRING_WITH_WHITESPACE, { whitespace: true })).to.equal(
            'khoor   zruog'
        );
    });

    it('should output a whitespace filtered string', function () {
        expect(encrypt(STRING_WITH_WHITESPACE, { whitespace: false })).to.equal(
            'khoorzruog'
        );
    });
});
