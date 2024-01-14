import { getAllCats } from "./api/CatApi";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import {
  catsPerOrigin,
  getAvgLifeSpan,
  getCatAvgWeight,
} from "./utils/catDetails";
import Cats from "./components/Cats";
import NavBar from "./components/NavBar";
export default function App() {
  const [cats, setCats] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState(null);

  useEffect(() => {
    getAllCats().then((response) => setCats(response.data));
  }, []);

  const handleOriginClick = (origin) => {
    setSelectedOrigin(origin);
  };

  return (
    <div className="h-full w-full">
      <div className="h-24">
        <Header
          noOfBreads={cats.length}
          avgCatWeight={getCatAvgWeight(cats)}
          avgLifeSpan={getAvgLifeSpan(cats)}
        />
      </div>
      <div className="main-container flex p-2">
        <NavBar
          origins={Object.keys(catsPerOrigin(cats))}
          handleOriginClick={handleOriginClick}
          selectedOrigin={selectedOrigin}
        />
        <Cats
          selectedOrigin={selectedOrigin}
          cats={selectedOrigin ? catsPerOrigin(cats)[selectedOrigin] : cats}
        />
      </div>
    </div>
  );
}
