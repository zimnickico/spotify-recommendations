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

  useEffect(() => {
    const updateScrollY = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    window.addEventListener('scroll', updateScrollY);
    return () => {
      window.removeEventListener('scroll', updateScrollY);
    };
  }, []);

  return (
    <motion.div
      initial={inputFocused ? "hidden" : "show"}
      animate={inputFocused ? "show" : "hidden"}
      exit="exit"
      variants={isMobile ? varsMobile : varsDesktop}
      className="z-30 relative lg:mx-32 mt-4 mx-4 h-[100vh] overflow-hidden fixed"
    >
      <form className="z-30 relative px-4 py-3 items-end rounded-full border-[1px] flex h-12">
        <input
          className="z-30 relative rounded grow focus:ring-0 focus:outline-0"
          placeholder="Start searching..."
          onChange={(e) => handleSearching(e.target.value)}
          onFocus={() => {
            setInputFocused(true);
            const scrollY = window.scrollY;
            const body = document.body;
            body.style.position = "fixed";
            body.style.top = `-${scrollY}px`;
            body.style.width = "100%";
            body.style.overflow = "hidden";
          }}
          onBlur={() => {
            const body = document.body;
            body.style.position = "";
            body.style.top = "";
            body.style.width = "";
            body.style.overflow = "";
            window.scrollTo(0, parseInt(body.style.top || "0") * -1);
          }}
        ></input>
        <SearchButton />
      </form>
      <SearchResults searchResults={searchResults} />
    </motion.div>
  );
}
