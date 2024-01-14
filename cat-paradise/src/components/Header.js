export default function Header({ noOfBreads, avgCatWeight, avgLifeSpan }) {
  return (
    <header className="p-4 text-center">
      <h1 className="font-bold text-4xl pb-2">Cat Paradise</h1>
      <p className="text-lg font-semibold">{`On average a cat can weight about ${avgCatWeight} Kg and lives ${avgLifeSpan} years.`}</p>
    </header>
  );
}
