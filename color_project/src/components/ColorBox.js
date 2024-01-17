import CopyToClipboard from "react-copy-to-clipboard";
import "./ColorBox.css";

export default function ColorBox({ background: { color, name } }) {
  return (
    <CopyToClipboard text={color}>
      <div style={{ background: color }} className="ColorBox">
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
