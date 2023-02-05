import Link from "next/link";
import { FaHome, FaListUl, FaPlus } from "react-icons/fa";
function NavBar() {
  return (
    <ul className="flex flex-row m-3 text-white bg-blue-900 px-10 py-3 font-bold border-collapse border-spacing-3">
      <li>
        <Link className="nav-link" href="/">
          <FaHome className="font-extrabold" />
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-csr" className="nav-link">
          <FaListUl /> Client Side Rendering
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-static-props" className="nav-link">
          <FaListUl /> Static Props
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-server-props" className="nav-link">
          <FaListUl /> Server Side Props
        </Link>
      </li>
      <li>
        <Link href="/new-tasks" className="nav-link">
          <FaPlus />
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
