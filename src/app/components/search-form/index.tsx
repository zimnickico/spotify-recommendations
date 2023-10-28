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
      className="focus-within:h-full focus-within:bg-white/20 backdrop-blur z-30 lg:mx-32 pt-4 px-4 overflow-hidden"
    >
      {inputFocused ? (
        <button className="text-lg flex gap-2 items-center mb-4"
        onClick={(e) => setInputFocused(false)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="#000000"
                d="M3.636 11.293a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414-1.414L6.757 13H20a1 1 0 1 0 0-2H6.757l3.95-3.95a1 1 0 0 0-1.414-1.414l-5.657 5.657Z"
              />
            </g>
          </svg>
          Back
        </button>
      ) : null}
      <form className="z-30 relative px-4 py-3 items-end rounded-full border-[1px] flex h-12">
        <input
          className="z-30 relative rounded grow focus:ring-0 focus:outline-0"
          placeholder="Start searching..."
          onChange={(e) => handleSearching(e.target.value)}
          autoFocus={false}
          onFocus={(e) => {
            setInputFocused(true);
          }}
        ></input>
        <SearchButton />
      </form>
      {inputFocused ? <SearchResults searchResults={searchResults} /> : null}
    </motion.div>
  );
}
