import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const Navbar = () => {
  const [item, setItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between">
          {/* Logo  */}
          <div className="mt-2">
            <img className="w-32 sm:w-40" src="/logo.png" alt="Logo" />
          </div>
          {/* Hamburger menu on mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation link  */}
          <div className="hidden sm:flex items-center gap-6 sm:gap-10 text-white h-20 mt-4">
            <p>Bags</p>
            <p>Travel</p>
            <p>Accessories</p>
            <p>Gifting</p>
            <p>Jewelry</p>
          </div>
          <div className="hidden sm:flex gap-4 mt-2">
            <img className="w-4 h-4" src="/search.png" alt="search" />
            <img className="w-4 h-4" src="/user-alt.png" alt="user" />
            <img className="w-4 h-4" src="/Bookmark.png" alt="bookmark" />
            <img className="w-4 h-4" src="shopping-bag.png" alt="shopping" />
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      {isOpen && (
        <div className="sm:hidden bg-black py-2">
          <div className="flex flex-col items-center gap-4">
            <p className="text-white cursor-pointer">Bags</p>
            <p className="text-white cursor-pointer">Travel</p>
            <p className="text-white cursor-pointer">Accessories</p>
            <p className="text-white cursor-pointer">Gifting</p>
            <p className="text-white cursor-pointer">Jewelry</p>
          </div>
        </div>
      )}

      {/* Carousel  */}
      <div className="mx-auto mt-4 mb-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          deviceType={this?.props?.deviceType}
        >
          <div className="flex justify-center items-center">
            <img className="max-h-20" src="/allbag.png" alt="All Bag" />
          </div>
          <div className="flex justify-center items-center">
            <img className="max-h-20" src="/vanity.png" alt="Vanity" />
          </div>
          <div className="flex justify-center items-center">
            <img className="max-h-20" src="/tote.png" alt="Tote" />
          </div>
          <div className="flex justify-center items-center">
            <img className="max-h-20" src="/Duffle bag.png" alt="Duffle" />
          </div>
          <div className="flex justify-center items-center">
            <img className="max-h-20" src="/Laptop Sleeve.png" alt="Laptop" />
          </div>
          <div className="flex justify-center items-center">
            <img className="max-h-20" src="/messenger.png" alt="Messenger" />
          </div>
          <div className="flex justify-center items-center">
            <img className="max-h-20" src="/slings.png" alt="Slings" />
          </div>
          <div className="flex justify-center items-center">
            <img className="max-h-20" src="/Handbag.png" alt="Handbag" />
          </div>
        </Carousel>
      </div>

      <div className="flex justify-between mx-5">
        <div>
          <p>Bags Backpacks</p>
        </div>
        <div className="flex">
          <p className="mx-4">13 products</p>
          <img src="/Vector 4.png" alt="" />
        </div>
      </div>

      {/* Mapping of the products  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
        {item?.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
