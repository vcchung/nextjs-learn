import Link from "next/link";

function NavBar() {
  return (
    <ul className="flex flex-row m-3 text-white bg-blue-900 px-10 py-3 font-bold border-collapse border-spacing-3">
      <li>
        <Link className="m-3" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-csr" className="m-3">
          List Tasks Client Side Rendering
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-static-props" className="m-3">
          List Tasks Static Props
        </Link>
      </li>
      <li>
        <Link href="/list-tasks-server-props" className="m-3">
          List Tasks Server Side Props
        </Link>
      </li>
      <li>
        <Link href="/new-tasks">New</Link>
      </li>
    </ul>
  );
}

export default NavBar;
