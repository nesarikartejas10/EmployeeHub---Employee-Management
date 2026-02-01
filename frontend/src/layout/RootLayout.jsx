import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import EmployeePopup from "../components/popup/EmployeePopup";
import DeletePopup from "../components/popup/DeletePopup";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <EmployeePopup />
      <DeletePopup />
      <main className="flex-1 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
