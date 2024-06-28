import express24 from "../assets/express24.jpeg";
import { CiSearch } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="flex justify-between items-center border-b px-4 py-4">
        <div className="logo">
          <a href="/">
            <img className="w-44" src={express24} alt="" />
          </a>
        </div>
        <div className="search flex justify-between items-center gap-5 relative">
          <CiSearch className="w-5 h-5 ml-3 absolute" />
          <input
            type="search"
            placeholder="Заведение, блюдо, товар или кухня"
            className="input pl-10 input-bordered w-[1400px] max-w-xs"
          />
          <button className="btn btn-warning rounded-xl mr-5">Найти</button>
          <HiOutlineLocationMarker className="absolute w-6 h-6 right-[260px]" />
          <select className="select select-bordered w-[300px] pl-12 max-w-xs">
            <option disabled selected>
              г. Ташкент, Мирабад район, Амира Темура проспект
            </option>
          </select>
        </div>
        <div className="profile flex justify-between items-center gap-2">
          <div className="language border-l border-r">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 btn-ghost rounded-md"
              >
                <TfiWorld className="w-5 h-5" />
                <p>Русский</p>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Русский</a>
                </li>
                <li>
                  <a>English</a>
                </li>
                <li>
                  <a>O'zbekcha</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile btn btn-ghost flex justify-between items-center gap-2">
            <CgProfile className="w-5 h-5" />
            <p>Профиль</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
