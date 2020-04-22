import { Quote } from '../models/Quote'

export function getRandomArrayElement (array: Array<any>): any {
  const max = array.length - 1
  const min = 0
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min

  return array[randomIndex]
}

export function getRandomHexColor (): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export function getTwitterUrl (quote: Quote): string {
  return `https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${quote.quote} ${quote.author}`
}

export function getTumblrUrl (quote: Quote): string {
  return `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote.author}&content=${quote.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
}
