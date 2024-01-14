import axios from "axios";
import { useEffect, useState } from "react";
import cat404 from "../image/cat-404.jpg";

export default function CatCard({ cat }) {
  const [catImage, setCatImage] = useState(null);

  const getCatImage = async (id) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`)
      .then((response) => setCatImage(response.data[0].url))
      .catch((err) => setCatImage("NotFound"));
  };

  useEffect(() => {
    getCatImage(cat.id);
  }, []);

  return (
    <div className="flex w-fit p-4 mb-4 border-2">
      <div className="pr-4">
        <div className="w-96 h-56">
          <img
            className="w-full h-full rounded-lg"
            src={catImage === "NotFound" ? cat404 : catImage}
            alt={cat.name}
          />
        </div>
        <p className="py-2 text-center font-semibold">{cat.name}</p>
      </div>
      <div>
        <p className="pb-2">{cat.description}</p>
        <p className="pb-2">
          <strong>Lifespan</strong>: {cat.life_span}
        </p>
        <p className="pb-2">
          <strong>Temperament</strong>: {cat.temperament}
        </p>
        <p>
          <strong>Weight</strong>: {cat.weight.metric} Kg
        </p>
      </div>
    </div>
  );
}
