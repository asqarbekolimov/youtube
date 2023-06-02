import { AiFillYoutube, AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SearchBar } from "../";
const Navbar = () => {
  return (
    <div className="bg-primary shadow">
      <div className="container flex items-center p-4 flex-row  sticky top-0 z-[999]">
        <Link to={"/"}>
          <div className="flex items-center text-3xl">
            <AiFillYoutube className="text-4xl text-red-600" />{" "}
            <span className="flex items-center font-bold">
              You
              <AiOutlineThunderbolt className="text-yellow-400" />
            </span>
          </div>
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
