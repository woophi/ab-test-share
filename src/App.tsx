import "./App.css";

declare global {
  interface Window {
    Android: {
      shareData: (
        title: string,
        description: string,
        imgUrl: string,
        shareUrl: string
      ) => void;
    };
  }
}

function App() {
  return (
    <>
      <h1>Share test 1.0.2</h1>
      <div className="card">
        <button
          onClick={() =>
            window.Android.shareData(
              "test",
              "test desc",
              "https://sun9-42.userapi.com/impg/G65QFMX3rtf71ffHkazr8MwGO3RtXPdvP83CXg/cxXCY-dMSe0.jpg?size=762x509&quality=96&sign=9650f92a968de904a177b9f75acfde25&type=album",
              "https://vk.com/share.php?url=https://alfabank.ru/make-money/investments/brokerskij-schyot/#Form-Open-Acc"
            )
          }
        >
          share to vk
        </button>
      </div>
    </>
  );
}

export default App;
