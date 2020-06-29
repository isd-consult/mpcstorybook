export default class ThemeUtils {
    
  /**
   * @param {string} gender, ex: gender
   * @return {string}
   */
  static getTheme(gender) {
    let theme = null
    switch (gender) {
      case 'BLANK':
        theme = 'women'
        break
      case 'BOYS':
        theme = 'men'
        break
      case 'INFANTS':
        theme = 'women'
        break
      case 'KIDS':
        theme = 'women'
        break
      case 'LADIES':
        theme = 'women'
        break
      case 'MENS':
        theme = 'men'
        break
      case 'male':
        theme = 'men'
        break
      case 'female':
        theme = 'women'
        break
      default:
        theme = null
    }
    return theme
  }

  /**
   * @param {string} theme, ex: theme
   * @param {string} secondary, ex: secondary
   * @return {string}
   */
  static themeToColor (theme, secondary) {
    if (theme === 'men') return secondary ? 'ziggurat' : 'cerulean'
    if (theme === 'women') return secondary ? 'coral' : 'chico'
    return null
  }
}