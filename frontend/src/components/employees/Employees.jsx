import { useSelector } from "react-redux";
import EmployeeCard from "./EmployeeCard";

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);
  return (
    <section className="max-w-6xl w-full m-auto">
      <ul className="list">
        {employees.map((employee) => {
          return <EmployeeCard key={employee.id} employee={employee} />;
        })}
      </ul>
    </section>
  );
};

export default Employees;
