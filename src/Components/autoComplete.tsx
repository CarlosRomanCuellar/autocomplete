import React, { useEffect, useState, useRef } from "react";
import contries from "../dummyDatabase/contries.json";
import HiglightSpan from "./higlightspan";
const AutoComplete = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const wrapperRef = useRef<any>(null);

  //this is to mock a fetch call once the component is mounted
  useEffect(() => {
    setOptions(contries);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (ev: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(ev.target)) {
      setDisplay(false);
    }
  };

  const setContryHandler = (contry: string) => {
    setSearch(contry);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container">
      <input
        id="auto"
        onClick={() => {
          setDisplay(!display);
        }}
        placeholder="search a contry"
        value={search}
        onChange={(ev) => {
          if (!display) setDisplay(true);
          return setSearch(ev.target.value);
        }}
      ></input>
      {display && (
        <div className="autoContainer">
          {options
            .filter((value) =>
              value.toLowerCase().includes(search.toLowerCase())
            )
            .map((value, index) => {
              return (
                <div
                  onClick={() => setContryHandler(value)}
                  className="option"
                  key={index}
                  tabIndex={0}
                >
                  <HiglightSpan value={value} higlight={search} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
