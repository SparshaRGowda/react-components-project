const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-800">
                Logo
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-800">
                About
              </a>
              <a href="/services" className="text-gray-600 hover:text-gray-800">
                Services
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </div>
            {/* <div className="md:hidden">
      Mobile menu button
      <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div> */}
          </div>
        </div>
      </div>
      <div>
        <p className="text-4xl m-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum
          est cupiditate quasi vel consequatur nemo suscipit animi autem
          molestias. Natus dolorum impedit unde possimus sed saepe alias,
          consequatur repellendus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta dolorum est cupiditate quasi vel consequatur
          nemo suscipit animi autem molestias. Natus dolorum impedit unde
          possimus sed saepe alias, consequatur repellendus. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dicta dolorum est cupiditate
          quasi vel consequatur nemo suscipit animi autem molestias. Natus
          dolorum impedit unde possimus sed saepe alias, consequatur
          repellendus. v Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dicta dolorum est cupiditate quasi vel consequatur nemo suscipit
          animi autem molestias. Natus dolorum impedit unde possimus sed saepe
          alias, consequatur repellendus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta dolorum est cupiditate quasi vel consequatur
          nemo suscipit animi autem molestias. Natus dolorum impedit unde
          possimus sed saepe alias, consequatur repellendus. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dicta dolorum est cupiditate
          quasi vel consequatur nemo suscipit animi autem molestias. Natus
          dolorum impedit unde possimus sed saepe alias, consequatur
          repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta dolorum est cupiditate quasi vel consequatur nemo suscipit animi
          autem molestias. Natus dolorum impedit unde possimus sed saepe alias,
          consequatur repellendus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta dolorum est cupiditate quasi vel consequatur
          nemo suscipit animi autem molestias. Natus dolorum impedit unde
          possimus sed saepe alias, consequatur repellendus. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dicta dolorum est cupiditate
          quasi vel consequatur nemo suscipit animi autem molestias. Natus
          dolorum impedit unde possimus sed saepe alias, consequatur
          repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta dolorum est cupiditate quasi vel consequatur nemo suscipit animi
          autem molestias. Natus dolorum impedit unde possimus sed saepe alias,
          consequatur repellendus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta dolorum est cupiditate quasi vel consequatur
          nemo suscipit animi autem molestias. Natus dolorum impedit unde
          possimus sed saepe alias, consequatur repellendus. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dicta dolorum est cupiditate
          quasi vel consequatur nemo suscipit animi autem molestias. Natus
          dolorum impedit unde possimus sed saepe alias, consequatur
          repellendus. v Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dicta dolorum est cupiditate quasi vel consequatur nemo suscipit
          animi autem molestias. Natus dolorum impedit unde possimus sed saepe
          alias, consequatur repellendus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta dolorum est cupiditate quasi vel consequatur
          nemo suscipit animi autem molestias. Natus dolorum impedit unde
          possimus sed saepe alias, consequatur repellendus. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dicta dolorum est cupiditate
          quasi vel consequatur nemo suscipit animi autem molestias. Natus
          dolorum impedit unde possimus sed saepe alias, consequatur
          repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta dolorum est cupiditate quasi vel consequatur nemo suscipit animi
          autem molestias. Natus dolorum impedit unde possimus sed saepe alias,
          consequatur repellendus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta dolorum est cupiditate quasi vel consequatur
          nemo suscipit animi autem molestias. Natus dolorum impedit unde
          possimus sed saepe alias, consequatur repellendus. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dicta dolorum est cupiditate
          quasi vel consequatur nemo suscipit animi autem molestias. Natus
          dolorum impedit unde possimus sed saepe alias, consequatur
          repellendus.
        </p>
      </div>
    </>
  );
};

export default Navbar;
