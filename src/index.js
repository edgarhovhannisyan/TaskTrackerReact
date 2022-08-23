import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const container = document.getElementById("root")

// Create a root.
const root = ReactDOM.createRoot(container)
// Initial render
root.render(
    <React.StrictMode>
        <App name="My task tracker" />
    </React.StrictMode>
)

reportWebVitals()
