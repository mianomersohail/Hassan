import { Link } from "react-router-dom";
export default function List({ className, text, to }) {
  return (
    <>
      <li className={className}>
        <Link className={className} to={to}>
          {text}
        </Link>
      </li>
    </>
  );
}
