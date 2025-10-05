import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">3d With Oce</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Social</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Linkedin</a>
                  </li>
                  <li>
                    <a>Github</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
