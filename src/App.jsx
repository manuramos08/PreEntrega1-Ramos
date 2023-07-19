import React from "react"
import ItemListContainer from "./Components/ItemListContainer"
import NavBar from "./Components/NavBar"
import CartWidget from "./Components/CartWidget"



const App = () => {
  const greetings = "Bienvenidos a El Sol Piletas"
  return (
    <>
    {/* <CartWidget/> */}
    <NavBar/>
    <ItemListContainer greetings={greetings}/>
    </>
  )
}

export default App