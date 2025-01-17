import { CgInstagram } from "react-icons/cg";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-secondary pt-10 px-16 text-white w-full font-jost xsm:px-4 xsm:p-4 sm:px-4">
      <div className="w-full flex justify-between xsm:flex-col sm:flex-col md:flex-col">
        {/* Logo Section */}
        <div className="w-1/3 flex flex-col gap-2 xsm:w-full sm:w-full md:w-full xsm:pb-8">
          <div>
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-40 h-20 object-contain xsm:w-32 sm:w-28 sm:h-16 md:w-32 md:h-10 lg:w-40 lg:h-20 xsm:mx-auto sm:mx-auto md:mx-auto"
            />
          </div>
          <p className="my-6 text-justify text-xl font-bold lg:text-base md:text-xs md:w-[80%] sm:text-[10px] sm:leading-none xsm:text-[10px] xsm:leading-none xsm:w-[80%]">
            Experience luxury and comfort, where every detail is designed to
            make your stay memorable. From exquisite dining to personalized
            service, we are here to make your visit exceptional. Building the
            best network where you can get all types of information to ensure a
            seamless stay.
          </p>
        </div>

        {/* Links and Contact Section */}
        <div className="w-1/2 flex justify-items-end mt-6 xsm:w-full sm:w-full xsm:mt-4 md:w-full md:mt-12">
          <div className="w-1/2 flex flex-col gap-8 xsm:hidden sm:hidden">
            <h2 className="text-xl font-bold lg:text-xl md:text-sm sm:text-xs xsm:text-[10px] text-left">
              Company
            </h2>
            <div className="flex flex-col gap-4 lg:gap-3 md:gap-2 sm:gap-2 xsm:gap-2">
              <button className="text-lg lg:text-base md:text-xs sm:text-[10px] xsm:text-[9px] text-left">
                Terms & Conditions
              </button>
              <button className="text-lg lg:text-base md:text-xs sm:text-[10px] xsm:text-[9px] text-left">
                Privacy Policy
              </button>
              <button className="text-lg lg:text-base md:text-xs sm:text-[10px] xsm:text-[9px] text-left">
                About Us
              </button>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-10 xsm:w-[90%] sm:w-[90%] xsm:mx-auto sm:mx-auto lg:gap-8 md:gap-6 sm:gap-4 xsm:gap-4">
            <h3 className="text-xl font-bold lg:text-xl md:text-sm sm:text-xs xsm:text-[10px] xsm:text-center sm:text-center md:text-center">
              Contact Us
            </h3>
            <div className="flex flex-col gap-6 lg:gap-3 md:gap-2 sm:gap-2 xsm:gap-2">
              <div className="flex gap-4 items-center lg:gap-3 md:gap-2 sm:gap-1 xsm:gap-1">
                <FaLocationDot size={20} />
                <p className="xsm:text-xxs sm:text-xxs">123 Luxury Lane, Dream City, Country</p>
              </div>
              <div className="flex gap-4 items-center lg:gap-3 md:gap-2 sm:gap-1 xsm:gap-1">
                <IoMdMail size={20} />
                <p className="xsm:text-xxs sm:text-xxs">info@almaris.in</p>
              </div>
              <div className="flex gap-4 items-center lg:gap-3 md:gap-2 sm:gap-1 xsm:gap-1">
                <IoMdCall className="bg-white text-secondary rounded-full p-1" size={20} />
                <p className="xsm:text-xxs sm:text-xxs">7896541230</p>
              </div>
              <h3 className="font-semibold text-xl lg:text-base md:text-sm sm:text-xs xsm:text-[10px] xsm:text-center sm:text-center md:text-center">
                Follow us on social media
              </h3>
              <div className="flex gap-4 xsm:justify-center sm:justify-center md:justify-center">
                <FaFacebook size={25} />
                <CgInstagram size={25} />
                <FaYoutube size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 text-xs text-center lg:text-sm xl:text-sm 2xl:text-base">
        © ALMARIS 2024 ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
