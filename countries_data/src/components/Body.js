import React, { useEffect, useState } from "react";
import { VscGraph } from "react-icons/vsc";
import Country from "./Country";

export default function Body({ countries, useRef }) {
  useEffect(() => {}, [useRef, countries]);

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGraphClick = () => {
    useRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const searchedCountries = countries.map((country) => {
    const name = country.name.common;
    let languages = country.languages && Object.values(country.languages);
    languages = String(languages && languages.join("-").toLowerCase());
    let capitals = country.capital;
    capitals = String(capitals && capitals.join("-").toLowerCase());
    const nameMatch = name.toLowerCase().includes(search.toLowerCase());
    const languageMatch = languages.includes(search.toLocaleLowerCase());
    const capitalMatch = capitals.includes(search.toLocaleLowerCase());
    if (capitalMatch || nameMatch || languageMatch) {
      return <Country key={name} country={country} />;
    } else return null;
  });

  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <input
          className="w-6/12 px-2 py-4 text-center font-thin rounded-full hover:border-[#f7dcdc] focus:outline-none border-4 bg-[#f3ecec] border-[#f8e7e7]"
          type="text"
          placeholder="Search countries by name, capital or languages"
          onChange={handleSearchChange}
          value={search}
        />
        <VscGraph
          className="text-5xl text-[#ffa500] my-8 hover:scale-110"
          onClick={handleGraphClick}
        />
      </div>
      <div className="flex flex-wrap p-4 bg-[#f0f0f0]">{searchedCountries}</div>
    </div>
  );
}
