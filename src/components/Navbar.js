import React from "react";

const Navbar = ({ navHeader, navItems }) => {
  const renderedItems = navItems.map((item, idx) => {
    return (
      <li key={idx} className="hover:bg-navy-blue h-16 p-4">
        <button className="ml-6">{item}</button>
      </li>
    );
  });

  return (
    <aside className="gradient w-64 h-full fixed">
      <nav>
        <div className="p-6">
          <img
            className="object-contain w-full h-full rounded-xl"
            src="test-logo.png"
            alt="company-logo"
          />
          <h4 className="text-center text-gray-100 mt-5 text-lg">
            {navHeader.company}
          </h4>
          <h4 className="text-center text-gray-100 my-2 mb-2 text-lg">
            {navHeader.user}
          </h4>
        </div>
        <ul className="space-y-2 text-lg text-gray-100">{renderedItems}</ul>
      </nav>
    </aside>
  );
};

export default Navbar;
