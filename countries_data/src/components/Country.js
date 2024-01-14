export default function Country({ country }) {
  return (
    <div className="w-80 h-[540px] p-6 m-auto mt-2 bg-white shadow-sm rounded mb-3 hover:shadow-xl ease-in duration-300 hover:scale-105">
      <div className="w-56 h-32 ml-6 shadow-md shadow-red-200">
        <img
          className="rounded h-full w-full"
          src={country.flags.png}
          alt={country.name}
        />
      </div>
      <p className="text-center mt-8 mb-4 text-[#ffa500] text-xl">
        {country.name.common.toUpperCase()}
      </p>
      <p className="mb-4 text-[#585555] text-lg">
        <strong>Capital: </strong> {country.capital}
      </p>
      <p className="mb-4 text-wrap text-[#585555] text-lg">
        <strong>Languages: </strong>
        {(country.languages && Object.values(country.languages).join(", ")) ||
          "N/A"}
      </p>
      <p className="mb-4 text-[#585555] text-lg">
        <strong>Population: </strong>
        {country.population}
      </p>
      <p className="mb-4 text-[#585555] text-lg">
        <strong>Currency: </strong>
        {country.currencies && Object.keys(country.currencies)}
      </p>
    </div>
  );
}
