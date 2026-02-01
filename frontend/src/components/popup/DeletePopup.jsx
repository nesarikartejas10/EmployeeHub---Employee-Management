import { useSelector, useDispatch } from "react-redux";
import { closeDeletePopup } from "../../features/popup/popup.slice";
import { deleteEmployees } from "../../features/employee/employee.thunk";

const DeletePopup = () => {
  const popup = useSelector((state) => state.popup.deletePopup);
  const dispatch = useDispatch();

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployees(popup));
    dispatch(closeDeletePopup());
  };

  if (!popup) return null;
  return (
    <section className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80">
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Delete Employee</h2>
          <p>Are you sure you want to delete this?</p>

          <div className="justify-end card-actions mt-6">
            <button
              onClick={() => dispatch(closeDeletePopup())}
              className="btn btn-primary"
            >
              No
            </button>
            <button onClick={handleDeleteEmployee} className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeletePopup;
