import React from "react";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface Customlink{
  name:string;
  href:string;
  className:string
}
const Navbar: React.FC = () => {
//   const [toggle, setToggole] = useState(false);
const location = useLocation()
const Customlink = ({ name, href, className }: Customlink) => {
  const path = location.pathname;
  return (
    <Link
      to={href}
      className={`${className} opensans text-[16px] leading-[24px] ${
        path === href ? "font-semibold text-[#d4a762]" : ""
      }`}
    >
      {name}
    </Link>
  );
};
  return (
    <div className="bg-[#FFFCF8] shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="text-3xl font-bold">
            <h1 className="playball text-[40px] leading-[48px]">
              <span className="text-[#d4a762]">Shal</span>
              <span className="text-gray-900">brikkho</span>
            </h1>
          </a>
          <div className="flex gap-3 items-center">
            <Customlink name="Home" href="/" className="" />
            <div className="dropdownmenu">
              <ul>
                <li>
                  <div className="flex  items-center">
                    <Customlink
                      name="Product & Services"
                      href="/product-services"
                      className=""
                    />
                    <FaCaretDown />
                  </div>
                  <div id="submenu" className="submenu">
                    <li className="hover:bg-[#d4a762] ">
                      <Customlink
                        name="Bonkagoj"
                        href="bonkagoj"
                        className="hover:text-white duration-0"
                      />
                    </li>
                    <li className="hover:bg-[#d4a762] ">
                      <Customlink
                        name="Polka"
                        href="polka"
                        className="hover:text-white"
                      />
                    </li>
                    <li className="hover:bg-[#d4a762] ">
                      <Customlink
                        name="Ecopac"
                        href="ecopac"
                        className="hover:text-white"
                      />
                    </li>
                    <li className="hover:bg-[#d4a762] ">
                      <Customlink
                        name="Alo Project"
                        href="alo-project"
                        className="hover:text-white"
                      />
                    </li>
                    <li className="hover:bg-[#d4a762] ">
                      <Customlink
                        name="Bambuk"
                        href="bambuk"
                        className="hover:text-white"
                      />
                    </li>
                  </div>
                </li>
              </ul>
            </div>
            <Customlink name="Achievements" href="/achievements" className="" />
            <Customlink name="Gallery" href="/gallery" className="" />
            <Customlink name="Blog" href="/blog" className="" />
            <Customlink name="Contact" href="/contact" className="" />
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-600 w-[50px] h-[32px] flex items-center justify-center p-1 rounded-[50%] bg-[#d4a762] focus:outline-none">
              <FaSearch className="text-[20px]" />
            </button>
            <a
              href="#"
              className="bg-[#d4a762] text-white py-2 px-6 rounded-full hover:bg-[#d4a762] transition-all duration-300 font-[500]"
            >
              Let's Start
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
