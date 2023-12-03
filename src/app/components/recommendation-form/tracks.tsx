import React from "react";

export default function SelectedTracks({
  selectedTracks,
  setSelectedTracks,
}: any) {
  function handleRemove(track: any) {
    const id = track.id;

    const indexToRemove = selectedTracks.findIndex(
      (item: any) => item.id === id
    );

    if (indexToRemove !== -1) {
      const updatedCurrentTrack = [
        ...selectedTracks.slice(0, indexToRemove),
        ...selectedTracks.slice(indexToRemove + 1),
      ];

      setSelectedTracks(updatedCurrentTrack);
    }
  }

  return (
    <div className="z-10 relative flex gap-2 flex-wrap max-w-[60vw] mb-4 mt-2">
      {selectedTracks
        ? selectedTracks?.map((track: any) => (
            <div
              key={track.id}
              className="rounded-xl border-[1px] w-fit p-1 text-sm flex items-center bg-gray-100"
            >
              <img className="w-8 h-8 rounded-lg mr-2" src={track.cover}></img>
              <p className="pl-1">{track.name}</p>
              <button
                className="ml-4 w-8 h-8 bg-gray-50 border-[1px] rounded-lg flex items-center"
                onClick={(e) => handleRemove(track)}
              >
                <svg
                  className=" m-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          ))
        : null}
    </div>
  );
}
