export default function PaletteFooter({ paletteName, emoji }) {
  return (
    <footer>
      <footer className="palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </footer>
  );
}
