import { useState } from "react";
import SelectedTracks from "./tracks";
import { RecommendButton } from "./button";

export function Search() {
  const [searchResults, setSearchResults] = useState(new Array());
  const [selectedTracks, setSelectedTracks] = useState(new Array());
  const [searchOpen, setSearchOpen] = useState(false);


  async function fetchSearch(searchQuery: string) {
    try {
      const response = await fetch(`/api/search?searchQuery=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Dummy Error");
      }

      const searchResponse = await response.json();
      setSearchOpen(true)

      setSearchResults(
        searchResponse.tracks.items.map((item: any) => ({
          artist: item.artists.at(0)?.name,
          name: item.name,
          cover: item.album.images.at(1)?.url,
          id: item.id,
        }))
      );
    } catch (error) {
      setSearchOpen(false)
      setSearchResults([]);
    }
  }

  async function setTracks(track: any) {
    const tracksArray = [
      { id: track.id, name: track.name, cover: track.cover },
    ];

    setSelectedTracks([...selectedTracks, ...tracksArray]);
    setSearchOpen(false)

    console.log(selectedTracks);
  }

  return (
    <div className="m-auto w-[80vw]">
      <input
        className="w-full border-[1px] px-2 py-2 rounded-lg placeholder:font-[300] text-sm"
        onChange={(event) => fetchSearch(event.target.value)}
        onFocus={() => setSearchOpen(true)}
        placeholder="Search for songs..."
      ></input>
      {searchOpen ? (
        <ul className="max-w-xl flex flex-col gap-2 border-[1px] rounded-lg mt-3">
          {searchResults?.map((item: any) => (
            <button
              key={item.id}
              onClick={(event) => setTracks(item)}
              className="max-w-xl hover:bg-gray-100 rounded-2xl flex flex-row items-center p-2"
            >
              <img className="w-12 h-12 rounded-lg" src={item.cover}></img>
              <div className="flex flex-col items-start pl-4 overflow-hidden grow">
                <ul className="overflow-hidden text-left truncate">
                  {item.name}
                </ul>
                <ul className="text-gray-500">{item.artist}</ul>
              </div>
              <a className="grow flex justify-end pr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
                  />
                </svg>
              </a>
            </button>
          ))}
        </ul>
      ) : null }
      <SelectedTracks
        selectedTracks={selectedTracks}
        setSelectedTracks={setSelectedTracks}
      />
      {selectedTracks.length > 0 ? <RecommendButton selectedTracks={selectedTracks}/> : null}
    </div>
  );
}
