import React from "react";

const Card = ({ data }) => {
  return (
    <div className="relative">
      <div className="bg-gray-800 pb-4 rounded-lg shadow-md">
        <div className="h-64 w-full overflow-hidden rounded-t-lg">
          <img
            className="h-full w-full object-cover"
            src={data?.image}
            alt="No Image"
          />
        </div>
        <h2 className="text-white mt-2 mx-2">{(data?.title).slice(0, 25)}...</h2>
        <div className="flex justify-between mx-2">
          <div className="flex">
            <p className="text-white">₹{data?.price}</p>
            <p className="text-gray-500 line-through text-xs mt-1.5 ml-2">
              ₹{data?.price}
            </p>
            <span className="text-green-600 text-xs mt-1.5 ml-2">
              (50% off)
            </span>
          </div>
          <div className="relative mx-2">
            <img
              src="/shopping-bag.png"
              alt="shopping bag"
              className="w-6 h-8 text-black"
            />
            <div className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full bg-black w-4 h-4">
              <img src="/plus.png" alt="plus icon" className="w-2 h-2" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/Bookmark.png"
        alt="Bookmark"
        className="absolute top-2 right-2 w-6 h-8"
      />
    </div>
  );
};

export default Card;
