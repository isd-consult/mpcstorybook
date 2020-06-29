export default class ValidationUtils {

  /**
   * @param {string} string, ex: theme
   * @return {bool}
   */
  static IsEmpty(string) {
    if (string === null || string === '')
      return true
    return false
  }

  /**
   * @param {string} email, ex: theme
   * @return {bool}
   */
  static emailIsValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  /**
   * @param {string} password
   * @return {bool} 
   */
  static checkPassword(password)
  {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    return re.test(password)
  }

  static idNumberIsValid(idNumber) {
    if (idNumber.length >= 10 && idNumber.length <= 19) {
      return true
    } 
    return false
    
  }
}