export default function BarChart({ data }) {
  let totalPop = data?.find(({ name, value }) => name === "Total");

  totalPop = totalPop ? totalPop.value : data[0].value;

  const renderedRow = data?.map(({ name, value }) => {
    return (
      <div key={name} className="bar-row ">
        <div className="bar-country">{name}</div>
        <div className="bar-chart">
          <div
            style={{
              borderRadius: "3px",
              background: "orange",
              width: `${(value / totalPop) * 100}%`,
            }}
          ></div>
        </div>
        <div className="bar-population">{value.toLocaleString()}</div>
      </div>
    );
  });
  return <div className=" my-8 py-4 bg-[#f0f0f0] border-2">{renderedRow}</div>;
}
