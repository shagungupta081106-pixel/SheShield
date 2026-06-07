import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SheShield</h2>

      <div className="nav-buttons">
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/dashboard">
          <button>Dashboard</button>
       </Link>
       <Link to="/profile">
         <button>Profile</button>
        </Link>
        <Link to="/support">
         <button>Support</button>
        </Link>
        <Link to="/safetytips">
         <button>Safety Tips</button>
        </Link>
      
        <Link to="/aichat">
        <button>AI Chat</button>
        </Link>
        <button onClick={() => {
  localStorage.clear();
  window.location.href = "/login";
}}>
  Logout
</button>
      </div>
    </nav>
  );
}

export default Navbar;