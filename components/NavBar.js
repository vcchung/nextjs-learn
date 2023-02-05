import Link from "next/link";

function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/list-tasks-csr">List Tasks Client Side Rendering</Link>
      </li>
      <li>
        <Link href="/list-tasks-static-props">List Tasks Static Props</Link>
      </li>
      <li>
        <Link href="/new-tasks">New</Link>
      </li>
    </ul>
  );
}

export default NavBar;
