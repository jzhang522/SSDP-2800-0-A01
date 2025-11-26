import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import AddItem from './components/AddItem'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  const [items, setItems] = useState([])

  return (
    <>
      <Header />
      <div className="main-container">
        <AddItem items={items} setItems={setItems} />
        <Cart items={items} setItems={setItems} />
      </div>
      <Footer />
    </>
  )
}

export default App
