import { parse } from 'query-string'

export default class UrlUtils {
  /**
   * @param {object} location - router object
   * @return {boolean}
   */
  static isSimpleSearch(location = {}) {
    const routesWithSimpleSearch = [] // Routes where should be simple search
    return routesWithSimpleSearch.some(path => location.pathname === path)
  }

  /**
   * @param {object} location - router object
   * @return {boolean}
   */
  static isAuthPage(location = {}) {
    const authRoutes = ['/login', '/register', '/forgotpassword']
    return authRoutes.some(path => location.pathname === path)
  }

  static getSearchParams() {
    return parse(window.location.search)
  }
}
