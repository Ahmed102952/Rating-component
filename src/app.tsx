import React from "react"
import ReactDOM from "react-dom"
import Rating from "./components/Card"

const App = () => {
  return (
    <div className="w-screen min-h-screen px-3 grid place-items-center bg-veryDarkBlue">
      <Rating />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))