import Prod from "./Prod";

export default function BesttSell() {
  return (
    <div className="p-24 mt-4">
      <h2 className="text-3xl font-bold ">Best Sellers</h2>
      <div className="border-b border-black w-full mb-4"></div>
      <div className="flex gap-6 justify-between flex-wrap">
        <Prod />
        <Prod />
        <Prod />
        <Prod />
        <Prod />
        <Prod />
      </div>
    </div>
  );
}
