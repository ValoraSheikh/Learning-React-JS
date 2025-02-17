import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElem = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google'
)

function Sum() {
  return (
    <div>
    <h1>Chai dabalo</h1>
    </div>
  )
}

const reactElement = {
  type: `a`, 
  props:{
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

createRoot(document.getElementById('root')).render(
  <App/>
)
