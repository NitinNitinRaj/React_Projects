const getCatAvgWeight = (cats) => {
  let totalWeight = 0;

  cats.map((cat) => {
    const average =
      (Number(cat.weight.metric.split("-")[0]) +
        Number(cat.weight.metric.split("-")[1])) /
      2;
    totalWeight += average;
  });
  return Math.round(totalWeight / cats.length);
};
const getAvgLifeSpan = (cats) => {
  let totalLifeSpan = 0;

  cats.map((cat) => {
    const average =
      (Number(cat.life_span.split("-")[0]) +
        Number(cat.life_span.split("-")[1])) /
      2;
    totalLifeSpan += average;
  });
  return Math.round(totalLifeSpan / cats.length);
};

const catsPerOrigin = (cats) => {
  let catsPerOrigins = {};
  const origins = cats.map((cat) => cat.origin);
  origins.map((origin) => {
    const catsFromOrigin = cats.filter((cat) => cat.origin === origin);
    catsPerOrigins[origin] = catsFromOrigin;
  });
  return catsPerOrigins;
};

export { getAvgLifeSpan, getCatAvgWeight, catsPerOrigin };
