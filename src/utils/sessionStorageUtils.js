/* eslint import/prefer-default-export: "off" */

export default class sessionStorageUtils {
    /**
     * loadState queries the session storage to retrieve and preload
     * the state with customer data before the header is rendered.
     * 
     * @param {string} key String; String; The key for session storage object.
     * @return {object}
     */
    static loadState(key) {
        try {
            const serializedState = window.sessionStorage.getItem(key)
            if (serializedState === null) {
              return undefined
            }
            return JSON.parse(serializedState)
          } catch (err) {
            return undefined
          }
    }

    /**
     * saveState saves or updates an object in the session storage
     * with relevant customer date after any modification is detected
     * in the header state.
     *
     * @param {string} key - String; The key for session storage object.
     * @param {object} state - Object; Customer data from the state.
     *
     */
    static saveState(key, state) {
        try {
            const serializedState = JSON.stringify(state)
            window.sessionStorage.setItem(key, serializedState)
          } catch (err) {
            // Ignore write errors
          }
    }
}
