import { HiUser } from "react-icons/hi";
import css from "./UserMenu.module.css";

interface UserManuProps {
  name: string;
}

export default function UserMenu({ name }: UserManuProps) {
  return (
    <div>
      <HiUser className={css.icon} size={24} /> {name}
    </div>
  );
}
