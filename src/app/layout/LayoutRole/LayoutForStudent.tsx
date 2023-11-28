import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

interface IProps {
  children: ReactNode;
}
const LayoutForStudent: React.FC<IProps> = ({ children }) => {
  const role = useSelector((state: any) => state.role.userRole);
  if (role === "teacher") {
    window.location.replace('/');
  }
  return <div>{children}</div>;
};

export default LayoutForStudent;
