/**
 * @module 'service/index'
 * @desc 分装service层，用以区分开发环境和生产环境
 * @author LieZuoPing
 * @date  2018年7月30日9:52点
 * @example 调用示例
 *  import { api } from './service'
 */
let apiBaseUrl = ''
let imgBaseUrl = ''

if (process.env.NODE_ENV === 'development') { // 开发环境
  apiBaseUrl = ''
  imgBaseUrl = ''
} else if (process.env.NODE_ENV === 'production') { // 生产环境
  apiBaseUrl = ''
  imgBaseUrl = ''
}

let api = {
  testData: `${apiBaseUrl}../../../static/json/test.json` // 测试用例
}

export {
  api,
  imgBaseUrl
}
