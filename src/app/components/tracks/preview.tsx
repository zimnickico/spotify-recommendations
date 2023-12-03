import React from "react";

export default function SeeRecommendationsPreview({ item, audioRef }: any) {
  const [playingStates, setPlayingStates] = React.useState<{
    [key: string]: boolean;
  }>({});

  function handlePlaying(item: any) {
    const audioElement = audioRef.current;

    if (audioElement.src !== item.preview_url) {
      audioElement.src = item.preview_url;
    }

    if (audioElement.paused) {
      audioElement.play();
      setPlayingStates((prevState) => ({ ...prevState, [item.id]: true }));
    } else {
      audioElement.pause();
      setPlayingStates((prevState) => ({ ...prevState, [item.id]: false }));
    }
  }

  return item?.preview_url ? (
    <div>
      <button className="mt-1.5" onClick={() => handlePlaying(item)}>
        {playingStates[item.id] ? (
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="currentColor" d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  ) : (
    <div>
      <button className="mt-1.5">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#e5e7eb" d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
}
