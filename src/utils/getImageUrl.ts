// import { apiUrl } from './constants'

export function getImageUrl(url: string | undefined) {
  if (import.meta.env.VITE_IMAGE_URL && url) {
    return `${import.meta.env.VITE_IMAGE_URL}/${url}`
  }
  if (url) {
    return url
  }
  // return 'img/placeholder.svg'
}
