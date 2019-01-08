import classnames from '../src/index'

const cssModules = {
  class1: 'class1-xx',
  class2: 'class2-yy',
  class3: 'class3-zz'
}

describe('classnames(cssModules, props)', () => {
  test(`return 'class1 class2'`, () => {
    expect(classnames(cssModules, {
      class1: true,
      class2: true,
      class3: false
    })).toBe('class1-xx class2-yy')
  })
})

describe('classnames()', () => {
  test(`return ''`, () => {
    expect(classnames()).toBe('')
  })
})

describe(`classnames(null, null, 'global1 global2')`, () => {
  test(`return 'global1 global2'`, () => {
    expect(classnames(null, null, 'global1 global2')).toBe('global1 global2')
  })
})

describe(`classnames(null, null, { global1: true, global2: false })`, () => {
  test(`return 'global1'`, () => {
    expect(classnames(null, null, {
      global1: true,
      global2: false
    })).toBe('global1')
  })
})

describe(`classnames(null, null, 'global1 global2', { global3: true, global4: false })`, () => {
  test(`return 'global1 global2 global3'`, () => {
    expect(classnames(null, null, 'global1 global2', {
      global3: true,
       global4: false
    })).toBe('global1 global2 global3')
  })
})

describe(`classnames(cssModules, props, globalstring)`, () => {
  test(`return 'class1-xx global1'`, () => {
    expect(classnames(cssModules, {
      class1: true,
      class2: false
    }, 'global1')).toBe('class1-xx global1')
  })
})
