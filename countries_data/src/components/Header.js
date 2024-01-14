import { useEffect, useRef } from "react";

export default function Header({ noOfCountries, jumpRefTop }) {
  const ref = useRef(null);
  useEffect(() => {
    jumpRefTop.current = ref.current;
  }, [jumpRefTop]);

  return (
    <div ref={ref} className="bg-[#f0f0f0] h-40 my-10 py-8 text-center">
      <h1 className="text-5xl font-extrabold mb-4 text-[#ffa500]">
        World Countries Data
      </h1>
      <p className="text-[#585555] text-xl font-semibold">
        Currently, we have {noOfCountries} countries
      </p>
    </div>
  );
}
