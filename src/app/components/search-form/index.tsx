import { useState, useEffect, useRef } from "react";
import { Spotify, varsMobile, varsDesktop } from "../consts";
import { SearchResults } from "./results";
import { BackButton, SearchButton } from "./buttons";
import { motion } from "framer-motion";

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
    <div className="fixed w-[100%] h-[100%] z-30 bottom-0 p-[10px]">
      {inputFocused ? (
        <motion.div
          id="form"
          className="h-[100%] z-30 bg-white translate-y-[36vh] transition-all focus-within:h-full backdrop-blur z-30 lg:mx-32 pt-4 px-4 overflow-hidden"
        >
          {inputFocused ? (
            <BackButton
              setInputFocused={setInputFocused}
              inputFocused={inputFocused}
            />
          ) : null}
          <form className="z-30 bg-white relative px-4 py-3 items-end rounded-full border-[1px] flex h-12">
            <input
              className="z-30 relative rounded grow focus:ring-0 focus:outline-0"
              placeholder="Start searching..."
              onChange={(e) => {
                handleSearching(e.target.value);
              }}
              onFocus={(e) => {
                setInputFocused(true);
              }}
              onBlur={(e) => {
                isMobile
                  ? (document
                      .getElementById("form")
                      ?.classList.add("translate-y-[0vh]"),
                    document
                      .getElementById("form")
                      ?.classList.remove("translate-y-[36vh]"))
                  : null;
              }}
            ></input>
            <SearchButton />
          </form>
          {inputFocused ? (
            <SearchResults searchResults={searchResults} />
          ) : null}
        </motion.div>
      ) : (
        <motion.div className="relative h-[100%] z-30 bg-white translate-y-[60vh] transition-all z-30 lg:mx-32 px-4 overflow-hidden">
          {inputFocused ? (
            <BackButton
              setInputFocused={setInputFocused}
              inputFocused={inputFocused}
            />
          ) : null}
          <form className="bg-white z-30 relative px-4 py-3 items-end rounded-full border-[1px] flex h-12">
            <input
              className="z-30 relative rounded grow focus:ring-0 focus:outline-0"
              placeholder="Start searching..."
              onChange={(e) => handleSearching(e.target.value)}
              onFocus={(e) => {
                setInputFocused(true);
              }}
            ></input>
            <SearchButton />
          </form>
          {inputFocused ? (
            <SearchResults searchResults={searchResults} />
          ) : null}
        </motion.div>
      )}{" "}
    </div>
  );
}
