import { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import logo from "../../image/logo.png";
import useAuth from "../../hooks/useAuth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ClassNav({ handleClick }) {
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "10px",
  };

  const { user, logout, signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { code } = useParams();

  const handleGoogleLogin = () => {
    signInWithGoogle(location, navigate);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Popover className="bg-[#163A24]">
        <div className=" md:max-w-7xl w-full mx-auto p-4 flex items-center justify-between">
          <NavLink to="/home">
            <div className="flex ml-4 md:ml-1 items-center cursor-pointer text-black">
              <img src={logo} alt="logo" className="w-20 h-18" />
            </div>
          </NavLink>

          <div className="space-x-10 text-white hidden md:flex">
            <NavLink
              to={`/myclasses/classroom/${code}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-base font-links font-bold mt-2 mr-1 hover:text-[#E1FF00]"
            >
              STREAM
            </NavLink>
            <NavLink
              to={`/myclasses/classroom/announcement/${code}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-base font-links font-bold mt-2 mr-1 hover:text-[#E1FF00]"
            >
              ANNOUNCE
            </NavLink>
            {/* <NavLink
              to="/people"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-base font-links font-bold mt-2 mr-1 hover:text-[#E1FF00]"
            >
              PEOPLE
            </NavLink> */}
            <NavLink
              to={`/myclasses/classroom/${code}/assigedposts`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-base font-links font-bold mt-2 mr-1 hover:text-[#E1FF00]"
            >
              ASSIGNED
            </NavLink>
            <NavLink
              to={`/myclasses/classroom/${code}/talk`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-base font-links font-bold mt-2 mr-1 hover:text-[#E1FF00]"
            >
              TALK
            </NavLink>
          </div>
          <Popover.Group
            as="nav"
            className="text-white hidden md:flex items-center space-x-10"
          >
            {user.displayName ? (
              <Menu>
                <Menu.Button
                  // onClick={handleLogout}
                  className="text-base hover:text-[#E1FF00] flex font-links font-bold mt-1 mr-2 border-2 border-white py-1 px-2 rounded-lg"
                >
                  {user.displayName.split(" ")[0]}
                  <span className="ml-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 mt-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-8 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/settings"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleGoogleLogin}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Another Account
                          </button>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogout}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full text-left px-4 py-2 text-sm"
                              )}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link
                to="/register"
                className="text-base hover:text-[#E1FF00] font-links font-bold mt-2 mr-1"
              >
                SIGN UP
              </Link>
            )}
          </Popover.Group>
          <div className="mr-4 my-2 md:hidden">
            <Popover.Button>
              <span className="sr-only">Open menu</span>
              <CgMenuGridR
                className="h-6 w-6 ml-auto text-black"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 w-screen inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    {/* <div>
                      <div className="flex items-center">
                        <h1 className="text-4xl font-black font-title ">
                          GoodDeal
                        </h1>
                      </div>
                    </div> */}
                    <NavLink to="/home">
                      <div className="flex ml-4 md:ml-1 items-center cursor-pointer text-black">
                        <img src={logo} alt="logo" className="w-20" />
                      </div>
                    </NavLink>
                    <div className="-mr-2">
                      <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <AiOutlineCloseCircle
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-10 text-white text-center">
                    <nav className="grid gap-y-8">
                      <Link
                        to="/home"
                        className="font-title text-xl font-bold mr-4 hover:text-blue-500"
                      >
                        Home
                      </Link>
                      <Link
                        to="/home"
                        className="font-title text-xl font-bold mr-4 hover:text-blue-500"
                      >
                        My Class
                      </Link>

                      {user.displayName ? (
                        <button
                          onClick={handleLogout}
                          to="/signup"
                          className="text-base hover:text-blue-500 font-links font-bold mt-2 mr-1  focus:text-black"
                        >
                          LOGOUT{" "}
                          <span className="border-2 border-white py-1 px-2 rounded-lg">
                            {user.displayName.split(" ")[0]}
                          </span>
                        </button>
                      ) : (
                        <Link
                          to="/signup"
                          className="text-base hover:text-blue-500 font-links font-bold mt-2 mr-1  focus:text-black "
                        >
                          SIGN UP
                        </Link>
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </>
  );
}
