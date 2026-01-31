import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl w-full m-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">EmployeeHub</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <AiOutlineUserAdd size={21} />
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <MdOutlineFavoriteBorder size={21} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
