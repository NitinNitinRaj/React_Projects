import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "./ColorBox.css";

export default function ColorBox({ background: { color, name } }) {
  const [copied, setCopied] = useState(false);

  return (
    <CopyToClipboard
      text={color}
      onCopy={() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
    >
      <div style={{ background: color }} className="ColorBox">
        <div
          className={`copy-overlay ${copied && "show"}`}
          style={{ background: color }}
        />
        <div
          className={`copy-message ${copied && "show"}`}
          style={{ background: color }}
        >
          <h1>Copied!</h1>
          <p>{color}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}
