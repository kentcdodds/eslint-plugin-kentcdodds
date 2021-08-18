<div align="center">
<h1>eslint-plugin-kentcdodds</h1>

<p>Custom rules for Kent</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]](#contributors-)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev eslint-plugin-kentcdodds
```

This library has a required `peerDependencies` listing for [`eslint`][eslint].

## Usage

Add `kentcdodds` to the plugins section of your `.eslintrc` configuration file.
You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["kentcdodds"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "kentcdodds/spell-kents-name-correctly": "error"
  }
}
```

## Supported Rules

- [`kentcdodds/spell-kents-name-correctly`](docs/rules/spell-kents-name-correctly.md)

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-plugin-kentcdodds/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/eslint-plugin-kentcdodds/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/eslint-plugin-kentcdodds/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-plugin-kentcdodds/commits?author=MichaelDeBoey" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/eslint-plugin-kentcdodds/commits?author=MichaelDeBoey" title="Code">💻</a> <a href="https://github.com/kentcdodds/eslint-plugin-kentcdodds/commits?author=MichaelDeBoey" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/bennettdams"><img src="https://avatars.githubusercontent.com/u/29319414?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bennett</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-plugin-kentcdodds/commits?author=bennettdams" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/kentcdodds/eslint-plugin-kentcdodds/validate?logo=github&style=flat-square
[build]: https://github.com/kentcdodds/eslint-plugin-kentcdodds/actions?query=workflow%3Avalidate
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/eslint-plugin-kentcdodds.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/eslint-plugin-kentcdodds
[version-badge]: https://img.shields.io/npm/v/eslint-plugin-kentcdodds.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-plugin-kentcdodds
[downloads-badge]: https://img.shields.io/npm/dm/eslint-plugin-kentcdodds.svg?style=flat-square
[npmtrends]: https://www.npmtrends.com/eslint-plugin-kentcdodds
[license-badge]: https://img.shields.io/npm/l/eslint-plugin-kentcdodds.svg?style=flat-square
[license]: https://github.com/kentcdodds/eslint-plugin-kentcdodds/blob/main/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: https://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/eslint-plugin-kentcdodds/blob/main/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/kentcdodds/eslint-plugin-kentcdodds?color=orange&style=flat-square
[bugs]: https://github.com/kentcdodds/eslint-plugin-kentcdodds/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/kentcdodds/eslint-plugin-kentcdodds/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/kentcdodds/eslint-plugin-kentcdodds/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22

[eslint]: https://eslint.org
<!-- prettier-ignore-end -->
