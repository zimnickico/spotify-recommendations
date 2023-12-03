export function RecommendButton({ selectedTracks }: any) {

  function handleRecommend(selectedTracks: any) {

    const trackIDs = selectedTracks.map((track: any) => ({
      id: track.id,
    }));

    const queryTrackIDs = trackIDs.reduce((result: any, item: any) => {
      return `${result}${item.id},`;
    }, ""); 

    window.location.href = `api/recommend?recommend=${queryTrackIDs}`;

  }

  return (
    <button
      onClick={() => handleRecommend(selectedTracks)}
      className="mt-12 flex gap-4 bg-black text-white px-4 m-auto py-2 rounded-full font-medium"
    >
      <svg
        strokeWidth={0.4}
        stroke="#FFFFFF"
        className="m-auto"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFFFFF"
          d="M20 4v9a4 4 0 0 1-4 4H6.914l2.5 2.5L8 20.914L3.086 16L8 11.086L9.414 12.5l-2.5 2.5H16a2 2 0 0 0 2-2V4h2Z"
        />
      </svg>
      Get Recommendations
    </button>
  );
}
