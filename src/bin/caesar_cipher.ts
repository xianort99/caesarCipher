interface encryptionOptions {
    alphabet?: string;
    shift?: number;
    casing?: 'default' | 'uppercase' | 'lowercase';
    whitespace?: boolean;
}

interface defaultEncryptionOptions {
    alphabet: string;
    shift: number;
    casing: 'default' | 'uppercase' | 'lowercase';
    whitespace: boolean;
}

const DEFAULT_OPTIONS: defaultEncryptionOptions = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz',
    shift: 3,
    casing: 'default',
    whitespace: true
};

export default function caesarCipher(
    text: string,
    options?: encryptionOptions
) {
    const ALPHABET = (
            options?.alphabet ?? DEFAULT_OPTIONS.alphabet
        ).toLocaleLowerCase(),
        SHIFT = Math.floor(options?.shift ?? DEFAULT_OPTIONS.shift),
        CASING = options?.casing ?? DEFAULT_OPTIONS.casing,
        WHITESPACE = options?.whitespace ?? DEFAULT_OPTIONS.whitespace;

    const ALPHABET_LENGTH = ALPHABET.length;

    let encryptedText = '';

    if (SHIFT > ALPHABET_LENGTH || SHIFT < -ALPHABET_LENGTH) return;

    for (const CHARACTER of text) {
        const CHARACTER_INDEX = ALPHABET.indexOf(CHARACTER.toLocaleLowerCase());

        let shiftedIndex = 0;

        if (CHARACTER_INDEX === -1) {
            if (!/^\s$/.test(CHARACTER) || WHITESPACE) {
                encryptedText += CHARACTER;
            }
            continue;
        }

        shiftedIndex = CHARACTER_INDEX + SHIFT;

        if (shiftedIndex > ALPHABET_LENGTH) {
            shiftedIndex -= ALPHABET_LENGTH;
        } else if (shiftedIndex < 0) {
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
        } else {
            encryptedText += ALPHABET[shiftedIndex];
        }
    }

    return encryptedText;
}
