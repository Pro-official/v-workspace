import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../image/logo.png";
import useAuth from "../../hooks/useAuth";

export default function Navigation({ handleClick }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Popover className="bg-[#163A24]">
        <div className=" md:max-w-7xl w-full mx-auto p-4 flex items-center justify-between">
          <NavLink to="/home">
            <div className="flex ml-4 md:ml-1 items-center cursor-pointer text-black">
              <img src={logo} alt="logo" className="w-20" />
            </div>
          </NavLink>

          <Popover.Group
            as="nav"
            className="text-white hidden md:flex space-x-10"
          >
            <Link
              to="/home"
              className="text-base font-links font-bold mt-2 mr-1 hover:text-[#E1FF00]"
            >
              HOME
            </Link>

            {user.displayName ? (
              <button
                onClick={handleLogout}
                to="/signup"
                className="text-base hover:text-[#E1FF00] font-links font-bold mt-2 mr-1 "
              >
                LOGOUT{" "}
                <span className="border-2 border-white py-1 px-2 rounded-lg">
                  {user.displayName.split(" ")[0]}
                </span>
              </button>
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
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <h1 className="text-4xl font-black font-title ">
                          GoodDeal
                        </h1>
                      </div>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <AiOutlineCloseCircle
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <nav className="grid gap-y-12">
                      <Link
                        to="/home"
                        className="font-title text-xl font-bold mr-4 hover:text-blue-500"
                      >
                        Home
                      </Link>
                      <Link
                        to="/deposit"
                        className="font-title text-xl font-bold mr-4 hover:text-blue-500"
                      >
                        Deposit
                      </Link>
                      <Link
                        to="/withdraw"
                        className="font-title text-xl font-bold mr-4 hover:text-blue-500"
                      >
                        Withdraw
                      </Link>
                      <Link
                        to="/account"
                        className="font-title text-xl font-bold mr-4 hover:text-blue-500"
                      >
                        Account
                      </Link>
                      {user.displayName ? (
                        <button
                          onClick={handleLogout}
                          to="/signup"
                          className="text-base hover:text-blue-500 font-links font-bold mt-2 mr-1  focus:text-black"
                        >
                          LOGOUT{" "}
                          <span className="border-2 border-black py-1 px-2 rounded-lg">
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
