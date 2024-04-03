import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function MyApp () {
  return (
    <div>
      <h1>
        Custom App !
      </h1>
    </div>
  )
}
/*
const reactElement = {
  type : 'a' ,
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Click me to visit Google'
}
*/

const anotherElement = (
  <a href="https://google.com" target= '_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com' , target:'_blank'
  },
  'Click me to Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
