import React, { useCallback, useEffect, useState } from 'react'
import './QuoteMachine.css'
import { Quote } from '../models/Quote'
import { getQuotes } from '../api/quotes'
import { getRandomArrayElement, getRandomHexColor, getTumblrUrl, getTwitterUrl } from '../utils/helpers'

const QuoteMachine: React.FC = () => {
  const [color, setColor] = useState('#999999')
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)
  const [errorMessage, setErrorMessage] = useState('Loading..')

  const fetchQuotes = useCallback(async () => {
    try {
      const quotesResponse = await getQuotes()
      const quotes = quotesResponse.data.quotes

      setQuotes(quotes)
      setCurrentQuote(getRandomArrayElement(quotes))
      setColor(getRandomHexColor())
    } catch (e) {
      setErrorMessage(e.message)
    }
  }, [])
  const changeQuote = () => {
    setCurrentQuote(getRandomArrayElement(quotes))
    setColor(getRandomHexColor())
  }

  useEffect(() => {
    fetchQuotes()
  }, [fetchQuotes])

  return (
    <div className='quoteMachine' style={{ backgroundColor: color }}>
      {currentQuote ? (
        <div className='quoteMachine__main'
          id='quote-box'
        >
          <div className='quoteMachine__content'>
            <div className='quoteMachine__quote'
              style={{ color: color }}
            >
              <i className='fa fa-quote-left'/>
              <span id='text'> {currentQuote.quote}</span>
            </div>
            <div className='quoteMachine__author'
              style={{ color: color }}
            >
              <span id='author'>- {currentQuote.author}</span>
            </div>
          </div>
          <div className='quoteMachine__controls'>
            <div className='quoteMachine__socials'>
              <a className='btn'
                id='tweet-quote'
                title='Tweet this quote!'
                target='_blank'
                rel='noopener noreferrer'
                href={getTwitterUrl(currentQuote)}
                style={{ backgroundColor: color }}
              >
                <i className='fab fa-twitter' />
              </a>
              <a className='btn'
                id='tumblr-quote'
                title='Post this quote on tumblr!'
                target='_blank'
                rel='noopener noreferrer'
                href={getTumblrUrl(currentQuote)}
                style={{ backgroundColor: color }}
              >
                <i className='fab fa-tumblr' />
              </a>
            </div>
            <button className='btn'
              id='new-quote'
              onClick={changeQuote}
              style={{ backgroundColor: color }}
            >
                New quote
            </button>
          </div>
        </div>
      ) : (
        <h1>{errorMessage}</h1>
      )}
    </div>
  )
}

export default QuoteMachine
