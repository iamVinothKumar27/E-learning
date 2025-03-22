import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../../firebase"; // Import signOut from Firebase

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Connect",
    link: "/connect",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  const [user, setUser] = useState(null); // State to track user authentication
  const navigate = useNavigate(); // Initialize navigate
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update state based on authentication status
    });

    return () => unsubscribe();
  }, []);

  const handleSignInClick = () => {
    navigate("/signup"); // Navigate to the sign-up page
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign the user out
      navigate("/"); // Redirect after logging out
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        <div>
          <h1 className="font-bold text-2xl">Zenith</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-2 px-3 hover:text-secondary relative group font-bold"
                  style={{cursor: "pointer"}}
                >
                  {menu.title}
                </a>
              </li>
            ))}
            {!user ? (
              <button className="primary-btn" onClick={handleSignInClick}>
                Sign In
              </button>
            ) : (
              <button className="primary-btn" onClick={handleLogout}>
                Log Out
              </button>
            )}
          </ul>
        </div>
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
