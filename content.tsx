import type { PlasmoContentScript, PlasmoGetOverlayAnchorList } from "plasmo"

import { useStorage } from "@plasmohq/storage/hook"

export const config: PlasmoContentScript = {
  matches: [
    // "https://dashboard.twitch.tv/popout/u/*/stream-manager/activity-feed"
    "http://localhost:3000"
  ]
}

export const getOverlayAnchorList: PlasmoGetOverlayAnchorList = async () =>
  document.querySelectorAll("div[class^='Class']")
// "body.logged-in > div#root > div:nth-child(3n) > main > div > div:nth-child(3n) > div > div > div:nth-child(2n) > div:nth-child(2n) > div > div "

function Content(props) {
  const [read, setRead] = useStorage("readAlerts", [])

  const handleChecked = () => {
    setRead([...read, props.anchor.element.className])
  }

  return (
    <div
      style={{
        position: "relative",
        left: "85vw",
        top: -5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      {!read.includes(props.anchor.element.className) ? (
        <button
          style={{
            userSelect: "none",
            color: "#fefefe",
            backgroundColor: "#643cbb",
            fontWeight: "bold",
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
            cursor: "pointer",
            border: 0
          }}
          onClick={() => handleChecked()}>
          Check as read
        </button>
      ) : (
        <div
          style={{
            userSelect: "none",
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            color: "#fefefe",
            backgroundColor: "#643cbb",
            border: 1,
            borderColor: "#fefefe",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: 20,
            lineHeight: 1,
            borderRadius: 5
          }}>
          ✅{" "}
          <span
            style={{
              marginLeft: 10,
              fontSize: 16
            }}>
            You already read
          </span>
        </div>
      )}
    </div>
  )
}

export default Content
