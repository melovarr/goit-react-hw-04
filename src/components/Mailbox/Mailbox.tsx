import clsx from "clsx";
import css from "./Mailbox.module.css";
import { HiSun } from "react-icons/hi";

// interface AlertProps {
//   type?: "success" | "error";
// }

// interface UserMenuProps {
//   name: string;
// }

interface MailboxProps {
  username: string;
  unreadMessages: string[];
}

export default function Mailbox({ username, unreadMessages }: MailboxProps) {
  return (
    <>
      <h2>
        <HiSun />
        Hello {username}
      </h2>

      {unreadMessages.length > 0 ? (
        <>
          <p className={clsx(css.alert, css.error)}>
            You have {unreadMessages.length} unread messages
          </p>
          <p>Check your inbox to read them!</p>
          <button className={clsx(css.error)}>Open inbox</button>
        </>
      ) : (
        <p className={clsx(css.success)}>No unread messages</p>
      )}
    </>
  );
}
