import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Prod() {
  return (
    <div className="w-[250px] h-[400px] bg-slate-200 p-4">
      <div className="w-full h-64 bg-slate-300"></div>
      <h2 className="p-4 text-xl font-bold">Name</h2>
      <div className="flex w-full justify-between p-4">
        <h2>Price</h2>
        <div className="flex gap-3">
          <FavoriteBorderIcon />
          <AddShoppingCartIcon />
        </div>
      </div>
    </div>
  );
}
