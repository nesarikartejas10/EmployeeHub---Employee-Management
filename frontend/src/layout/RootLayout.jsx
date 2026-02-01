import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import EmployeePopup from "../components/popup/EmployeePopup";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <EmployeePopup />
      <main className="flex-1 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
