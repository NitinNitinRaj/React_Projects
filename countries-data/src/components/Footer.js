import { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import BarChart from "./BarChart";

export default function Footer({
  setRef,
  jumpRefTop,
  top10MostPopulatedCountry,
  top10MostSpokenLanguage,
}) {
  const [chart, setChart] = useState("population");

  const divRef = useRef(null);

  useEffect(() => {
    setRef.current = divRef.current;
  }, [setRef, chart]);

  const handleButtonClick = (type) => {
    setChart(type);
  };

  let buttonStyle = "px-6 py-2 bg-[#ffa500] rounded";

  return (
    <div ref={divRef} className="my-8">
      <div className="main-container-chart p-4 shadow-xl mb-8">
        <div className="flex justify-center items-center">
          <button
            className={`${buttonStyle} mr-6`}
            onClick={() => handleButtonClick("population")}
          >
            POPULATION
          </button>
          <button
            className={buttonStyle}
            onClick={() => handleButtonClick("language")}
          >
            LANGUAGES
          </button>
        </div>
        <p className="text-center mt-4 text-lg">
          {chart === "population"
            ? "10 Most populated countries in the world"
            : "10 Most spoken languages in the world"}
        </p>
        <BarChart
          data={
            chart === "population"
              ? top10MostPopulatedCountry
              : top10MostSpokenLanguage
          }
        />
      </div>
      <div className="bg-[#f0f0f0] py-8 text-center">
        <p className="text-[#585555] text-xl font-semibold pb-4">
          {" "}
          Copyright ©2024
        </p>
        <p className="text-[#585555] text-sm ">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/r-nitin/"
            className="text-purple-500"
          >
            Nitin Raj
          </a>{" "}
          as part of 30 Days of React challenge by{" "}
          <a
            href="https://www.linkedin.com/in/asabeneh/"
            className="text-purple-500"
          >
            Asabeneh Yetayeh.
          </a>
        </p>
        <div className="flex justify-end items-end m-3">
          <FaArrowAltCircleUp
            className="text-4xl text-purple-500 hover:scale-110"
            onClick={() =>
              jumpRefTop.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
