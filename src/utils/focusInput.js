export default function focusAndOpenKeyboard(
  el,
  // eslint-disable-next-line no-unused-vars
  scrollToTopMobile = false,
  timeout = 100,
) {
  if (el) {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    // Align temp input element approximately where the input element is
    // so the cursor doesn't jump around
    const tempElement = document.createElement('input')

    if (isMobile) {
      tempElement.style.position = 'absolute'
      tempElement.style.top = `${el.offsetTop}px`
      tempElement.style.left = `${el.offsetLeft}px`
      tempElement.style.height = 0
      tempElement.style.opacity = 0
      // Put this temp element as a child of the page <body> and focus on it
      document.body.appendChild(tempElement)
      tempElement.focus()
    }

    // The keyboard is open. Now do a delayed focus on the target element
    setTimeout(() => {
      el.focus()
      el.click()

      // if (isMobile && scrollToTopMobile) {
      window.scrollTo({
        top: 0,
        left: 0,
      })
      // }

      if (isMobile) {
        // Remove the temp element
        document.body.removeChild(tempElement)
      }
    }, timeout)
  }
}
