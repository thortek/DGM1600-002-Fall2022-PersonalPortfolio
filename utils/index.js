export function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

export function getLastNumber(url) {
  // return the second to last character from the url property of the film object
  let end = url.lastIndexOf('/')
  let start = end - 2
  if (url.charAt(start) === '/') {
      start++
  }
  return url.slice(start, end)
}