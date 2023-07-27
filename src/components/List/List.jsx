import React, { useState } from "react";
import PlaceDeatils from "../PlaceDeatils/PlaceDeatils";

const List = () => {
  const { type, setType } = useState("restaurants");
  const { rating, setRating } = useState("");

  const places = [
    { name: "1st place" },
    { name: "2nd place" },
    { name: "3rd place" },
    { name: "1st place" },
    { name: "2nd place" },
    { name: "3rd place" },
  ];

  return (
    <div>
      <h1 className="font-bold text-xl p-2">
        Restaurents, Hotels and Attractions Around You!
      </h1>
      <div className="flex space-x-5 p-2">
        <div>
          <label for="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            id="underline_select"
            className=" py-2.5 px-0  w-full text-sm  bg-transparent border-0 border-b-[1.5px] border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option
              selected
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              Type
            </option>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>
        <div>
          <label for="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-[1.5px] border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option
              selected
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              Ratings
            </option>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>
      <div>
        {
            places?.map((place,i)=>(
                <>
                    <div key={i} className="bg-blue-200">

                        <PlaceDeatils place={place}/>
                    </div>
                </>
                   
                )
            )
        }
      </div>
    </div>
  );
};

export default List;
