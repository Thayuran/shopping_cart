
import React, { useState } from "react";

function ShoppingCard() {
  const [fruits, setFruits] = useState([
    { name: "Mango", price: "200", src: "mango", offer: "5" },
    { name: "Orange", price: "120", src: "orange", offer: "3" },
    { name: "Grape", price: "300", src: "grape", offer: "7" },
    { name: "Banana", price: "100", src: "banana", offer: "16" },
    { name: "Apple", price: "250", src: "apple", offer: "10" },
    { name: "Strawberries", price: "400", src: "strawberries", offer: "15" },
    { name: "Pineapple", price: "150", src: "pineapple", offer: "3" },
    { name: "Pomegranate", price: "550", src: "pomegranate", offer: "8" },
    { name: "Papaya", price: "130", src: "papaya", offer: "11" },
    { name: "Dragonfruit", price: "650", src: "dragonfruit", offer: "20" },
  ]);

  return (
    <>
      <div className="flex bg-gray-800 h-20 items-center fixed w-full z-20">
        <div className="flex w-4/6 mx-auto justify-between">
          <h1 className="font-bold text-3xl text-white">
            <span className=" text-green-600 uppercase">Techie</span>Shop
          </h1>
          <ul className="flex items-center text-xl text-white font-semibold gap-8">
            <li className=" text-green-600 hover:text-green-600 cursor-pointer">
              Home
            </li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Location</li>
            <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="  h-full py-12">
        <div className=" w-4/6 mx-auto">
          <div className="flex flex-col justify-center py-12 h-1/2 items-center ">
            <p className="text-gray-500 font-medium text-2xl">
              Welcome Tech Lovers
            </p>
            <h1 className="font-bold text-7xl">
              <span className=" text-green-600 uppercase">Techie</span>Shop
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {fruits.map((fruit, index) => (
              <div key={index}>
                <div className=" relative p-2 border-2 border-gray-300 rounded-lg shadow-lg">
                  <img
                    className=" relative object-cover w-full h-40 border-2 rounded-md shadow-sm"
                    // src={require("./img/watch.jpg")}
                    alt={fruit.name}
                  />
                  <div className=" pt-1 text-2xl text-center font-semibold text-gray-700">
                    {fruit.name}
                  </div>
                  <div className="flex justify-between px-10 pt-1 text-lg font-medium text-gray-500">
                    <span className=" text-gray-400 border rounded-lg px-1">
                      1kg
                    </span>{" "}
                    <span>LKR {fruit.price}.00</span>
                  </div>
                  <div className=" absolute top-1 right-1 text-center rounded-md text-white text-xs bg-red-500 w-8">
                    {fruit.offer}%
                  </div>
                  <div className="flex mt-2 bg-gray-500 rounded-md h-8 items-center justify-center cursor-pointer">
                    <button className=" text-gray-200 text-lg font-medium ">
                      Add to card
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ShoppingCard;