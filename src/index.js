/**
 * @fileoverview classnames
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2019-01-08 | sizhao     // initial version
*/

export default function classnames (cssModules, props, ...extra) {
  const eles = []
  if (cssModules && props) {
    Object.keys(props).forEach(key => {
      const cond = props[key]
      if (cond) {
        eles.push(cssModules[key])
      }
    })
  }

  if (extra && extra.length) {
    extra.forEach(item => {
      if (typeof item === 'string') {
        eles.push(item)
      }

      if (Object.prototype.toString.call(item) === '[object Object]') {
        Object.keys(item).forEach(key => {
          const cond = item[key]
          if (cond) {
            eles.push(key)
          }
        })
      }
    })
  }

  return eles.join(' ')
}
