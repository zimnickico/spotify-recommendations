import { useState, useEffect } from "react";
import { Spotify, varsMobile, varsDesktop } from "../consts";
import { SearchResults } from "./results";
import { SearchButton } from "./button";
import { AnimatePresence, motion, transform } from "framer-motion";

export function SearchForm() {
  const [searching, setSearching] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const [searchResults, setSearchResults] = useState(new Array());
  const [noResults, setNoResults] = useState(false);

  const [isMobile, setMobile] = useState(false);

  async function handleSearching(searchparams: string) {
    try {
      if (!searchparams) {
        setSearching(false);
      } else {
        setSearching(true);

        const items = await Spotify.search(
          searchparams,
          ["track"],
          undefined,
          5
        );

        setSearchResults(
          items.tracks.items.map((item) => ({
            artist: item.artists.at(0)?.name,
            name: item.name,
            cover: item.album.images.at(1)?.url,
            id: item.id,
          }))
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    if (searchResults.length < 1) {
      setNoResults(true);
    }
  }

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    }
  }, []);

  return (
    <motion.div
      initial={inputFocused ? "hidden" : "show"}
      animate={inputFocused ? "show" : "hidden"}
      exit="exit"
      variants={isMobile ? varsMobile : varsDesktop}
      className="z-30 relative lg:mx-32 mt-4 mx-4 overflow-hidden"
    >
      <form className="z-30 relative px-4 py-3 items-end rounded-full border-[1px] flex h-12">
        <input
          className="z-30 relative rounded grow focus:ring-0 focus:outline-0"
          placeholder="Start searching..."
          onChange={(e) => handleSearching(e.target.value)}
          autoFocus={false}
          onTouchStart={(e) => {
            setInputFocused(true);
            window.scrollTo(0, 0);
          }}
          onFocus={(e) => {
            setInputFocused(true);
            window.scrollTo(0, 0);
          }}
        ></input>
        <SearchButton />
      </form>
      {inputFocused ? <SearchResults searchResults={searchResults} /> : null}
    </motion.div>
  );
}
