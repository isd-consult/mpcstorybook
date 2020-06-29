/**
 * Is in viewport
 * @param {any} el Element node
 * @param {number} percent Visibility percent
 */
const isInViewport = (el, percent = 100) => {
  const rect = el.getBoundingClientRect()

  const isBannerHidden =
    el.parentNode.parentNode.getAttribute('aria-hidden') === 'true'

  if (isBannerHidden) return false

  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  const vertInView =
    rect.top + rect.height * (percent / 100) <= windowHeight &&
    rect.top + rect.height >= 0
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0

  return vertInView && horInView
}

export default isInViewport
