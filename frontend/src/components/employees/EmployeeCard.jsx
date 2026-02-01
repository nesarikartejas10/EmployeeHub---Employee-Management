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

const EmployeeCard = () => {
  const dispatch = useDispatch();
  return (
    <li className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src="https://img.daisyui.com/images/profile/demo/1@94.webp"
        />
      </div>
      <div>
        <div>Dio Lupa</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          Remaining Reason
        </div>
      </div>
      <p className="list-col-wrap text-xs">
        "Remaining Reason" became an instant hit, praised for its haunting sound
        and emotional depth. A viral performance brought it widespread
        recognition, making it one of Dio Lupa’s most iconic tracks.
      </p>
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
