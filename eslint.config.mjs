import js from "@eslint/js"
import globals from "globals"

export default [
    js.configs.recommended,

    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        rules : {
            "no-console": "off",
            "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        },
    },
    {
        ignores: ["node_modules/", "dist/", "trivy-results.sarif"],
    }
];