import {
  MdOutlineFavoriteBorder,
  MdOutlineModeEdit,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../../features/popup/popup.slice";

const EmployeeCard = ({ employee }) => {
  const { name, email, profileURL, bio } = employee;
  const dispatch = useDispatch();
  return (
    <li className="list-row">
      <div>
        <img className="size-10 rounded-box" src={profileURL} />
      </div>
      <div>
        <div>{name}</div>
        <div className="text-xs font-semibold opacity-60">{email}</div>
      </div>
      <p className="list-col-wrap text-xs">{bio}</p>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => dispatch(openEmployeePopup())}
      >
        <MdOutlineModeEdit size={20} />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => dispatch(openDeletePopup())}
      >
        <MdOutlineDeleteOutline size={20} />
      </button>
      <button className="btn btn-square btn-ghost">
        <MdOutlineFavoriteBorder size={20} />
      </button>
    </li>
  );
};

export default EmployeeCard;
