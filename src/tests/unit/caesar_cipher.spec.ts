import { expect } from 'chai';

import caesarCipher from '../../bin/caesar_cipher';

const STRING = 'Hello',
    STRING_WITH_WHITESPACE = 'hello   world';

const ARABIC_ALPHABET = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';

describe('#caesarCipher', function () {
    it("should use another language's alphabet to shift a string", function () {
        expect(caesarCipher('ريان', { alphabet: ARABIC_ALPHABET })).to.equal(
            'شتثي'
        );
    });

    it('should output shifted string', function () {
        expect(caesarCipher(STRING)).to.equal('Khoor');
    });

    it('should output a string shifted by 1', function () {
        expect(caesarCipher(STRING, { shift: 1 })).to.equal('Ifmmp');
    });

    it('should output same string', function () {
        expect(caesarCipher(STRING, { shift: 26 })).to.equal(STRING);
        expect(caesarCipher(STRING, { shift: -26 })).to.equal(STRING);
        expect(caesarCipher(STRING, { shift: 0 })).to.equal(STRING);
    });

    it('should output a negatively shifted string', function () {
        expect(caesarCipher(STRING, { shift: -1 })).to.equal('Gdkkn');
    });

    it('should output an all uppercase string', function () {
        expect(caesarCipher(STRING, { casing: 'uppercase' })).to.equal('KHOOR');
    });

    it('should output an all lowercase string', function () {
        expect(caesarCipher(STRING, { casing: 'lowercase' })).to.equal('khoor');
    });

    it('should output a string with preserved whitespace', function () {
        expect(
            caesarCipher(STRING_WITH_WHITESPACE, { whitespace: true })
        ).to.equal('khoor   zruog');
    });

    it('should output a whitespace filtered string', function () {
        expect(
            caesarCipher(STRING_WITH_WHITESPACE, { whitespace: false })
        ).to.equal('khoorzruog');
    });

    it("should output 'undefined' when shift if greater or lower then alphabet length", function () {
        expect(caesarCipher(STRING, { shift: 27 })).to.be.undefined;
    });
});
