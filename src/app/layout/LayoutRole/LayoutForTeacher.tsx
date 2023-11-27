import { useSelector } from "react-redux";

interface IProps {
  children?: React.ReactNode;
}


const LayoutForTeacher: React.FC<IProps> = ({ children }) => {
    const role = useSelector((state: any) => state.role.userRole);
    if (role === "student") {
      window.location.replace('/');
    }
  return <div>{children}</div>;
};

export default LayoutForTeacher;
