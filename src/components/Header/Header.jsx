import React from "react";
import { Autocomplete } from "@react-google-maps/api";

const Header = () => {
  return (
    <div>
      <div className="flex items-center p-3 bg-blue-900 text-white justify-between">
        <div>
          <h1 className="font-bold text-xl font-serif">Travel Advisor</h1>
        </div>
        <div className="flex space-x-4 px-2 items-center">
          <div>Explore new Places!</div>
          <div>
            <div
              class="flex items-center max-w-md mx-auto bg-white rounded-sm "
              x-data="{ Search: '' }"
            >
              <div class="w-full">
                <input
                  type="search"
                  className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                  placeholder="Search"
                  x-model="search"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex items-center border bg-green-600 justify-center w-8 h-8 text-white rounded-r-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
