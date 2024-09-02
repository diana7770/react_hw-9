import "./App.css";
import StickersList from "./components/StickerList/StickerList";
import stickers from "./stickers.json";

function App() {
  return (
    <>
      <StickersList stickers={stickers} />
    </>
  );
}

export default App;
