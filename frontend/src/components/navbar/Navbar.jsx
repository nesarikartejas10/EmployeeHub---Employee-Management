import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openEmployeePopup } from "../../features/popup/popup.slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl w-full m-auto">
        <div className="navbar ">
          <div className="navbar-start" onClick={() => navigate("/")}>
            <a className="btn btn-ghost text-xl">EmployeeHub</a>
          </div>
          <div className="navbar-end">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => dispatch(openEmployeePopup())}
            >
              <AiOutlineUserAdd size={21} />
            </button>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => navigate("/favorites")}
            >
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
