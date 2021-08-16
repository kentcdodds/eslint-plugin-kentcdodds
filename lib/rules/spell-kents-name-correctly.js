/**
 * @fileoverview This helps you spell Kent's name correctly
 * @author Kent
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "This helps you spell Kent's name correctly",
      category: 'Fill me in',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here
    const incorrect = [
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
    ]

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const isIncorrect = string => incorrect.some(i => string.includes(i))

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Literal(node) {
        if (isIncorrect(node.value.toLowerCase())) {
          context.report({
            node,
            message: "Spell Kent's name correctly: https://kcd.im/info",
          })
        }
      },
      TemplateElement(node) {
        if (isIncorrect(node.value.raw.toLowerCase())) {
          context.report({
            node,
            message: "Spell Kent's name correctly: https://kcd.im/info",
          })
        }
      },
    }
  },
}
