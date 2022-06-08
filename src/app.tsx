import React from "react"
import ReactDOM from "react-dom"
import Attr from "./components/attr"
import Rating from "./components/Card"

const App = () => {
  return (
    <div className="w-screen min-h-screen px-3 grid place-items-center bg-veryDarkBlue">
      <Rating />
      <Attr />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))