import React, { useState } from 'react'
import './App.css'
import { Chatbot } from 'react-chatbot-kit'
import config from './bot/config'
import ActionProvider from './bot/ActionProvider'
import MessageParser from './bot/MessageParser'
import 'react-chatbot-kit/build/main.css';

function App() {
  const [userInput, setUserInput] = useState('')

  return (
    <>
      <div class="chatbot">
        <h1>Philosopher's Chatbot</h1>
        <Chatbot 
          config={config} 
          messageParser={MessageParser}
          actionProvider={ActionProvider} />
      </div>
    </>
  )
}

export default App


// commit 1 - chatbot renders and responds - 01-06-25
//
// import React, { useState } from 'react'
// import './App.css'
// import { Chatbot } from 'react-chatbot-kit'
// import config from './config'
// import ActionProvider from './ActionProvider'
// import MessageParser from './MessageParser'
// import 'react-chatbot-kit/build/main.css';

// function App() {
//   const [count, setCount] = useState(0)
//   const [userInput, setUserInput] = useState('')

//   return (
//     <>
//       <div>
//         <a href="https://en.wikipedia.org/wiki/Philosophy" target="_blank">
//           <img src="https://theancienthome.com/cdn/shop/products/square-SCGR4401159-plato-bust-sculpture-greek-philosopher-white-marble-statue-home-interior-decoration_d90bfd0c-0512-4bf5-9a33-3db0b0dbf9b5.jpg?v=1689319479" className="logo" alt="Statue of Plato" />
//         </a>
//       </div>
      
//       <h1>Philosopher's Chatbot</h1>
//       <div className="card">
//         <input
//           type="text"
//           placeholder="Ask a question..."
//           onChange={e => setUserInput(e.target.value)}
//         />
//         <button 
//           className="reset-btn"
//           onClick={() => setUserInput('')}
//         >
//           reset
//         </button>
//         <p>User input: {userInput}</p>
//       </div>
      
//       <div>
//         <p>
//         Please rate PlatoBot's responses to improve the models performance.
//         </p>
//         <Chatbot 
//           config={config} 
//           messageParser={MessageParser}
//           actionProvider={ActionProvider} />
//       </div>
//     </>
//   )
// }

// export default App
