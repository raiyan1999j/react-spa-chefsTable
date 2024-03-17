import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <section className="w-[1320px] mx-auto small:w-[475.2px] medium:w-[633.6px]">
        <div className="navbar bg-base-100">
          <div className="navbar-start medium:items-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                <a>Home</a>
              </li>
              <li>
                <a>recipes</a>
              </li>
              <li>
                <a>about</a>
              </li>
              <li>
                <a>search</a>
              </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-[32px] text-[#150B2B] font-bold capitalize medium:text-[26px] medium:translate-x-[-18px]">
              Nutrition & Burns
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#150b2bb3] capitalize text-base font-normal">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>recipes</a>
              </li>
              <li>
                <a>about</a>
              </li>
              <li>
                <a>search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div>
              <div className="relative mt-2 rounded-xl shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-full border-0 py-1.5 pl-10 text-[#150b2bb3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="h-12 w-12 rounded-full bg-[#0BE58A] flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faUser} className="text-[#150B2B]" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[1320px] mx-auto mt-[50px] bg-bannerImg rounded-3xl small:w-[475.2px] small:rounded-[38px] medium:w-[633.6px] medium:rounded-[38px]">
        <div className="w-[897px] mx-auto text-center text-[#FFFFFF] py-[129px] small:w-[400px] medium:w-[550px]">
            <h1 className="text-[52px] font-bold capitalize small:text-[26px] medium:text-[32px]">
            Explore customized cooking classes today!
            </h1>
            <p className="font-normal text-lg capitalize mt-6 mb-10 small:text-xs medium:text-base">
            Master programming fundamentals, data structures, algorithms, OOP, databases, and solve 500+ coding problems to excel as a world-class programmer.
            </p>
            <div className="small:flex small:flex-row small:justify-center">
                <button className="capitalize text-[#150B2B] text-xl font-semibold py-5 px-[30px] bg-[#0BE58A] rounded-full
                mr-[30px] hover:bg-transparent hover:transition-all hover:ease-out hover:duration-500 hover:border hover:border-[#0BE58A] hover:text-white small:py-[5px] small:text-xs">
                    explore now
                </button>
                <button className="capitalize text-white text-xl font-semibold py-5 px-[30px] border border-white rounded-full hover:bg-[#0BE58A] hover:transition-all hover:ease-out hover:duration-500 hover:border hover:border-[#0BE58A] hover:text-white">
                    our feedback
                </button>
            </div>
        </div>
      </section>
    </>
  );
}
