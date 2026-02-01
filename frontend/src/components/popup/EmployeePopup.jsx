import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../features/popup/popup.slice";
import { useEffect, useState } from "react";
import {
  postEmployees,
  updateEmployee,
} from "../../features/employee/employee.thunk";

const EmployeePopup = () => {
  const [formDetails, setFormDetails] = useState({
    profileURL: "",
    name: "",
    email: "",
    bio: "",
    isHighlight: false,
  });

  const popup = useSelector((state) => state.popup.employeePopup);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    if (!popup) {
      setFormDetails({
        profileURL: "",
        name: "",
        email: "",
        bio: "",
        isHighlight: false,
      });
    } else if (popup?.id) {
      setFormDetails({
        profileURL: popup.profileURL,
        name: popup.name,
        email: popup.email,
        bio: popup.bio,
        isHighlight: false,
      });
    }
  }, [popup]);

  const handleSubmit = () => {
    if (popup.id) {
      dispatch(updateEmployee({ id: popup.id, details: formDetails }));
    } else {
      dispatch(postEmployees(formDetails));
    }

    dispatch(closeEmployeePopup());
  };

  if (!popup) return null;
  return (
    <section
      onClick={() => dispatch(closeEmployeePopup())}
      className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80"
    >
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Employee Details</legend>

        <label className="label">Profile URL</label>
        <input
          name="profileURL"
          type="text"
          className="input"
          placeholder="Profile Url"
          value={formDetails.profileURL}
          onChange={handleInputChange}
        />

        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          name="name"
          placeholder="Name"
          value={formDetails.name}
          onChange={handleInputChange}
        />

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          name="email"
          value={formDetails.email}
          onChange={handleInputChange}
        />

        <label className="label">Bio</label>
        <textarea
          className="textarea h-24"
          placeholder="Bio"
          name="bio"
          value={formDetails.bio}
          onChange={handleInputChange}
        ></textarea>

        <button onClick={handleSubmit} className="btn btn-neutral mt-4">
          {popup.id ? "Update Employee" : "Add Employee"}
        </button>
      </fieldset>
    </section>
  );
};

export default EmployeePopup;
