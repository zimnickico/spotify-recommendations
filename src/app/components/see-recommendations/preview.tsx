import React from "react";

export default function SeeRecommendationsPreview({ item, audioRef }: any) {
  const [playingStates, setPlayingStates] = React.useState<{
    [key: string]: boolean;
  }>({});

  function handlePlaying(item: any) {
    const audioElement = audioRef.current;

    if (audioElement.src !== item.preview) {
      audioElement.src = item.preview;
    }

    if (audioElement.paused) {
      audioElement.play();
      setPlayingStates((prevState) => ({ ...prevState, [item.id]: true }));
    } else {
      audioElement.pause();
      setPlayingStates((prevState) => ({ ...prevState, [item.id]: false }));
    }
  }

  return item?.preview ? (
    <div>
      <button className="mt-1.5" onClick={() => handlePlaying(item)}>
        {playingStates[item.id] ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2c1.886 0 2.828 0 3.414.586C10 3.172 10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18V6Zm12 0c0-1.886 0-2.828.586-3.414C15.172 2 16.114 2 18 2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22c-1.886 0-2.828 0-3.414-.586C14 20.828 14 19.886 14 18V6Z"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.736 4 21.276 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
            />
          </svg>
        )}
      </button>
    </div>
  ) : (
    <div>
    <button className="mt-1.5">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#e5e7eb"
          d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.736 4 21.276 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
        />
      </svg>
    </button>
    </div>
  );
}
