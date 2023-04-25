module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        'import',
        'svelte3',
        '@typescript-eslint'
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    settings: {
        'svelte3/typescript': true,
        'import/resolver': {
            "eslint-import-resolver-custom-alias": {
                "alias": {
                    "$public": "./public"
                }
            }
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/strict',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier'
    ]
}