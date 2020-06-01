interface encryptionOptions {
    alphabet?: string;
    shift?: number;
    casing?: 'default' | 'uppercase' | 'lowercase';
    whitespace?: boolean;
}
export default function encrypt(text: string, options?: encryptionOptions): string | undefined;
export {};
//# sourceMappingURL=encrypt.d.ts.map