const postcss = require('postcss')
const { equal } = require('uvu/assert')
const { test } = require('uvu')

const plugin = require('./')

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  equal(result.css, output)
  equal(result.warnings().length, 0)
}

test('Translates color property from Malayalam to English', async () => {
  await run('a{ നിറം: ചുവപ്പ് }', 'a{ color: red }', { })
})

test('Translates width property from Malayalam to English', async () => {
  await run('img{ വീതി: 100% }', 'img{ width: 100% }', { })
})


test.run()
