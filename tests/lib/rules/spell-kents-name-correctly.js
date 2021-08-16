/**
 * @fileoverview This helps you spell Kent&#39;s name correctly
 * @author Kent
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/spell-kents-name-correctly'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('spell-kents-name-correctly', rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: 'var x = "yo Kent Dodds dawg"',
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent dodds dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent dodd dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent c. dodd dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent c dodd dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo ken dodd dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo ken c. dodd dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo ken c dodd dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent dobbs dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent c. dobbs dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent c dobbs dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent c dodds dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent dogs dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent c. dogs dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent c dogs dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
    {
      code: `var x = "yo kent c. dodd's dawg"`,
      errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
    },
  ],
})
