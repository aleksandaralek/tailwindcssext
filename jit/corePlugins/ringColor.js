const flattenColorPalette = require('../../lib/util/flattenColorPalette').default
const withAlphaVariable = require('../../lib/util/withAlphaVariable').default
const toColorValue = require('../../lib/util/toColorValue').default
const { asColor, nameClass } = require('../pluginUtils')

module.exports = function ({ matchUtilities, jit: { theme } }) {
  let colorPalette = flattenColorPalette(theme.ringColor)

  matchUtilities({
    ring: (modifier, { theme }) => {
      if (modifier === 'DEFAULT') {
        return []
      }

      let value = asColor(modifier, colorPalette)

      if (value === undefined) {
        return []
      }

      return {
        [nameClass('ring', modifier)]: withAlphaVariable({
          color: value,
          property: '--tw-ring-color',
          variable: '--tw-ring-opacity',
        }),
      }
    },
  })
}
