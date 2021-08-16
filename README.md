# eslint-plugin-kentcdodds

Custom rules for Kent

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-kentcdodds`:

```sh
npm install eslint-plugin-kentcdodds --save-dev
```

## Usage

Add `kentcdodds` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "kentcdodds"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "kentcdodds/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


