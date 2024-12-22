
import Footer from "./components/Footer"
import Nav from "./components/Header/Nav"
import Quotes from "./components/Quotes/Quotes"
import quote from "./quotes"

import './App.css'
function App() {
 
  return (
    <>
      <Nav></Nav>
      
      {quote.map((item, index) => (
        <Quotes key={index} quote={item.quote} author={item.author} />
      ))}
      <Footer></Footer>
    </>
  )
}

export default App
