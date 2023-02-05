import Link from "next/link";
import { FaHome, FaListUl, FaPlus } from "react-icons/fa";
function NavBar() {
  return (
    <ul className="flex flex-row m-3 text-white bg-blue-900 px-10 py-3 font-bold border-collapse border-spacing-3">
      <li>
        <Link className="m-3 px-10" href="/">
          <FaHome className="font-extrabold" />
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-csr" className="m-3 px-10">
          <FaListUl /> Client Side Rendering
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-static-props" className="m-3 px-10">
          <FaListUl /> Static Props
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-server-props" className="m-3 px-10">
          <FaListUl /> Server Side Props
        </Link>
      </li>
      <li>
        <Link href="/new-tasks" className="px-10 m-3">
          <FaPlus />
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
