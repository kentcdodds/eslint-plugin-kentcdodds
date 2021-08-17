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
    `Kent`,
    `Kent C.`,
    // `Kent C. Dodds`,
    `Dodds`,
  ].map(name=>({code: `var x = "yo ${name} dawg"`,})),

  invalid: [
    `Kent Dodds`,
    `kent dodds`,
    `kent dodd`,
    `kent c. dodd`,
    `kent c dodd`,
    `kent dobbs`,
    `kent c. dobbs`,
    `kent c dobbs`,
    `ken dodd`,
    `ken c. dodd`,
    `ken c dodd`,
    `kent c dodds`,
    `kent dogs`,
    `kent c. dogs`,
    `kent c dogs`,
    `kent c. dodd's`,
  ].map((name) => ({
    code: `var x = "yo ${name} dawg"`,
    errors: [{message: `Spell Kent's name correctly: https://kcd.im/info`}],
  })),
})
