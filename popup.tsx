import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2
        style={{
          fontSize: 20,
          padding: 0,
          margin: 0
        }}>
        Twitch Activity Feed Checker ☑
      </h2>
      <p
        style={{
          fontSize: 18
        }}>
        Tired of not knowing which sub/follower you already thanked? Now you
        keep it checked
      </p>
      <a
        href="https://github.com/lucascnunes"
        target="_blank"
        style={{ fontSize: 16, textDecoration: "none", color: "#643cbb" }}>
        Created with ♥️ by Lucas from 🇧🇷 Brazil
      </a>
    </div>
  )
}

export default IndexPopup
