module.exports = {
    "env": {
        "es6": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
      "sourceType": "module",
    },
    "rules": {
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "camelcase": [
            "error"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "only-multiline",
                "objects": "only-multiline",
            }
        ],
        "comma-spacing": [
            "error"
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "curly": [
            "error",
            "all"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            2
        ],
        "key-spacing": [
            "error"
        ],
        "keyword-spacing": [
            "error"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [
            "error",
            {
                "code": 80
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "no-var": [
            "error"
        ],
        "prefer-const": [
            "error",
        ],
        "template-curly-spacing": [
            "error",
            "never"
        ]
    }
};
