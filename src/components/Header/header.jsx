import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { useAuthState } from 'react-firebase-hooks/auth';
import './header.css';
import PATHS from "../../constants/pathConstants";
import { Appcontex } from "../../App";
import { authantication } from '../../config/firebase'; 

import { signOut } from 'firebase/auth'; 

function Header() {
  // Using Firebase authentication hook
  const [user, isLoading] = useAuthState(authantication);

  // Accessing name from the App context
  const { name } = useContext(Appcontex);

  // Logout function
  const handleLogout = async () => {
    await signOut(authantication);
  };

  return (
    <header className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img 
          src="https://cdn.dribbble.com/users/1161944/screenshots/14326616/media/c760e50e4fd7ecd429d8e641136f8efd.png?resize=400x0" 
          alt="Logo" 
        />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <ul>
          <li className="pagelist"><Link to={PATHS.TODO}>Todo</Link></li>
          <li className="pagelist"><Link to={PATHS.API}>API</Link></li>
          <li className="pagelist"><Link to={PATHS.STATE}>State</Link></li>
          <li className="pagelist"><Link to={PATHS.STATEManagement}>State Management</Link></li>
          <li className="pagelist"><Link to={PATHS.REACTQUERY}>React Query</Link></li>
          <li className="pagelist"><Link to={PATHS.TYPESAFETY}>Type Safety</Link></li>
          <li className="pagelist"><Link to={PATHS.CREATEPOST}>Create Post</Link></li>
          <li className="pagelist"><Link to={PATHS.FORM}>From</Link></li>
        </ul>
      </nav>

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {/* Conditional Login/Logout Button */}
          <div className="auth-buttons">
            {!user ? (
              <button className="pagelist">
                <Link to={PATHS.FORM}>Login</Link>
              </button>
            ) : (
              <button onClick={handleLogout}>Log Out</button>
            )}
          </div>

          {/* User Info Section */}
          {user && (
            <div className="user-info">
              <img 
                src={user?.photoURL || "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"} 
                alt="User Profile" 
              />
              <p>Hello, {user?.displayName || name}</p>
            </div>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
