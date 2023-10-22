import React from "react";
import { Spotify } from "../consts";

export default function SearchInput({
    setSearchOpen,
    setSearchResults,
}: any) {

    async function handleChange(searchparams: string) {
        if (!searchparams) {
          setSearchOpen(false);
        } else {
          setSearchOpen(true);
    
          const items = await Spotify.search(searchparams, ["track"], undefined, 5);
    
          setSearchResults(
            items.tracks.items.map((item) => ({
              artist: item.artists.at(0)?.name,
              name: item.name,
              cover: item.album.images.at(1)?.url,
              id: item.id,
            }))
          );
        }
      }

  return (
    <input
      placeholder="Searach for songs"
      className="rounded-xl placeholder:text-gray-300 text-sm pl-2 grow focus:ring-0 focus:outline-0"
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  );
}
