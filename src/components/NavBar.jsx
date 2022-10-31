import { Link } from "react-router-dom";

const NavBar = () => {
  return <nav id="navbar">
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li>Sign-in</li>
        <li>Users</li>
      </ul>
    </nav>
}

export default NavBar;