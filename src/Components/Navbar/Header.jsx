import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Check if the pathname exactly matches "/partner-overview"
    if (location.pathname === '/') {
      setIsHeaderVisible(true)
    } else {
      setIsHeaderVisible(false)
    }
  }, [location.pathname])

  return (
    <div className={`text-white absolute top-0 w-full z-50`}>
      <div className="max-w-screen-xl mx-auto p-2 px-14 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={30}
            // className="w-auto h-10"
          />
        </div>

        {/* Desktop Navbar */}
        <nav className={`hidden md:flex lg:flex xl:flex 2xl:flex space-x-6 ${isHeaderVisible?'text-white':'text-black'}`}>
          <div
            className="hover:text-gray-400"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <Link href="/hotels" className="hover:text-gray-400">
            Hotels
          </Link>
          <Link href="#rooms" className="hover:text-gray-400">
            Resorts
          </Link>
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block lg:block xl:block 2xl:block ">
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white px-4 py-2 rounded cursor-pointer"
          >
            Login
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden bg-black bg-opacity-50 text-white p-4">
          <Link href="#home" className="block py-2">
            Home
          </Link>
          <Link href="#hotels" className="block py-2">
            Hotels
          </Link>
          <Link href="#rooms" className="block py-2">
            Rooms
          </Link>
          <Link
            href="#contact"
            className="block py-2 bg-primary text-white px-4 rounded"
          >
            Contact Us
          </Link>
        </div>
      )}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          width="60%"
          height="60%"
        >
          <Login />
        </Modal>
      )}
    </div>
  );
};

export default Header;
