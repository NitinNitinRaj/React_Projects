import React, { useEffect, useRef, useState } from "react";
import { getCountriesData } from "./apis/country-api";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import BarChart from "./components/BarChart";

export default function App() {
  const [countries, setCountries] = useState([]);
  const jumpRef = useRef(null);
  const jumpRefTop = useRef(null);

  useEffect(() => {
    getCountriesData()
      .then((response) => {
        setCountries(
          response.data.sort((a, b) => {
            const nameA = a.name.common.toUpperCase();
            const nameB = b.name.common.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
        );
      })
      .catch((err) => setCountries([]));
  }, []);

  const getTop10MostPopulatedCountry = () => {
    let top10MostPopulatedCountry = countries
      .sort((a, b) => b.population - a.population)
      .slice(0, 10);

    const totalPopulation = countries.reduce(
      (prev, curr) => prev + curr.population,
      0
    );

    top10MostPopulatedCountry = top10MostPopulatedCountry.map((country) => {
      return {
        name: country.name.common,
        value: country.population,
      };
    });

    top10MostPopulatedCountry.unshift({
      name: "Total",
      value: totalPopulation,
    });
    return top10MostPopulatedCountry;
  };

  const getTop10MostSpokenLanguage = () => {
    const langFreq = {};
    let top10MostSpokenLanguage = countries.map((country) => {
      if (country.languages) {
        const languages = Object.values(country.languages);
        languages.forEach((language) => {
          langFreq[language] = (langFreq[language] || 0) + 1;
        });
      }
    });
    const languages = Object.entries(langFreq).map(([name, value]) => ({
      name: name,
      value: value,
    }));
    top10MostSpokenLanguage = languages
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
    return top10MostSpokenLanguage;
  };

  return (
    <div>
      <Header noOfCountries={countries.length} jumpRefTop={jumpRefTop} />
      <Body countries={countries} useRef={jumpRef} />

      <Footer
        setRef={jumpRef}
        jumpRefTop={jumpRefTop}
        top10MostPopulatedCountry={getTop10MostPopulatedCountry()}
        top10MostSpokenLanguage={getTop10MostSpokenLanguage()}
      />
    </div>
  );
}
