import chroma from "chroma-js";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";

export default function ColorBox({
  background: { color, name, paletteId, colorId },
  showLink,
}) {
  const [copied, setCopied] = useState(false);
  const isDarkColor = chroma(color).luminance() <= 0.06;
  const isLightColor = chroma(color).luminance() >= 0.7;

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
          className={`copy-overlay ${copied ? "show" : undefined}`}
          style={{ background: color }}
        />
        <div
          className={`copy-message ${copied ? "show" : undefined}`}
          style={{ background: color }}
        >
          <h1>Copied!</h1>
          <p className={isLightColor ? "dark-text" : undefined}>{color}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? "light-text" : undefined}>
              {name}
            </span>
          </div>
          <button
            className={`copy-button ${isLightColor ? "dark-text" : undefined}`}
          >
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={`see-more ${isLightColor ? "dark-text" : undefined}`}
            >
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
