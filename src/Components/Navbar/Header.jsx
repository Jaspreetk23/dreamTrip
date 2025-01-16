import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => setIsModalOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Show header only on the homepage
    setIsHeaderVisible(location.pathname === "/");
  }, [location.pathname]);

  return (
    <header
      className={`absolute top-0 w-full z-50 ${
        isHeaderVisible ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto p-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={30}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Navbar */}
        <nav
          className={`xsm:hidden sm:hidden flex gap-6 ${
            isHeaderVisible ? "text-white" : "text-black"
          }`}
        >
          <div
            className="cursor-pointer hover:text-gray-400"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div className="cursor-pointer hover:text-gray-400">Hotels</div>
          <div className="cursor-pointer hover:text-gray-400">Resorts</div>
        </nav>

        {/* Login Button */}
        <div className="xsm:hidden sm:hidden block">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="hidden xsm:flex sm:flex">
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
        <div className="md:hidden bg-black bg-opacity-75 text-white p-4">
          <div
            className="py-2 cursor-pointer"
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
          >
            Home
          </div>
          <div className="py-2 cursor-pointer">Hotels</div>
          <div className="py-2 cursor-pointer">Resorts</div>
          <div
            className="py-2 bg-primary text-white px-4 rounded cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} width="60%" height="60%">
          <Login />
        </Modal>
      )}
    </header>
  );
};

export default Header;
