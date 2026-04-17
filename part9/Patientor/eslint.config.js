import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
            }
        },
        rules: {
            'semi': ['error'],  // ← regla nativa en vez de @typescript-eslint/semi
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/restrict-plus-operands': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' }
            ],
            'no-case-declarations': 'off'
        }
    }
);