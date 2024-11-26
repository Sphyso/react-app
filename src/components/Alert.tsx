import { ReactNode } from "react";

interface Prop{
    children: ReactNode;
    onClick: () => void;
}
const Alert = ({children, onClick}: Prop) => {
  return (
    <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" onClick={onClick} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert