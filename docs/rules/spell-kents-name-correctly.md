# This helps you spell Kent&#39;s name correctly (spell-kents-name-correctly)

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
const missingTheC = `Kent Dodds`
const missingTheS = `Kent Dodd`
const notBs = `Kent Dobbs`
const notBs = `Kent C. Dobbs`
const missingTheDot = `Kent C Dodds`
const iAmNotADog = `Kent Dogs`
```

Examples of **correct** code for this rule:

```js
const firstOnly = `Kent`
const firstAndMiddle = `Kent C.`
const fullName = `Kent C. Dodds`
const lastOnly = `Dodds`
```

## When Not To Use It

When you do not plan on writing Kent's name in a string.

## Further Reading

- https://kcd.im/info
