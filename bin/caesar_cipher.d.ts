interface encryptionOptions {
    alphabet?: string;
    shift?: number;
    casing?: 'default' | 'uppercase' | 'lowercase';
    whitespace?: boolean;
}
export default function caesarCipher(text: string, options?: encryptionOptions): string | undefined;
export {};
//# sourceMappingURL=caesar_cipher.d.ts.map