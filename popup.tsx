function IndexPopup() {
  return (
    <div
      style={{
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        padding: 16,
        userSelect: "none",
        textAlign: "center"
      }}>
      <h2
        style={{
          fontSize: 20,
          padding: 0,
          margin: 0
        }}>
        Twitch Activity Feed Checker ✅
      </h2>
      <div>
        <p
          style={{
            fontSize: 18
          }}>
          Tired of not knowing which sub/follower you already thanked?
          <br /> Now can you keep it <strong>checked</strong>!
        </p>
      </div>

      <div
        style={{
          textAlign: "center"
        }}>
        <a
          href="https://github.com/lucascnunes"
          target="_blank"
          style={{ fontSize: 16, textDecoration: "none", color: "#643cbb" }}>
          Created with ♥️ by Lucas from 🇧🇷 Brazil
        </a>
      </div>
    </div>
  )
}

export default IndexPopup
