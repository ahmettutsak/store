import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 w-full text-black">
      <Link className="text-2xl font-bold" href={"/"}>
        Store
      </Link>
      <div className="flex gap-4">
        <Link href="/">Men</Link>
        <Link href="/">Women</Link>
        <Link href="/">Children</Link>
        <Link href="/">Accessories</Link>
      </div>
      <div className="flex gap-4">
        <SearchIcon />
        <PersonIcon />
        <FavoriteIcon />
        <ShoppingCartIcon />
      </div>
    </nav>
  );
}
