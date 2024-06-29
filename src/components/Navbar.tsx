import express24 from "../assets/express24.jpeg";
import { CiSearch } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50  bg-white shadow">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="logo">
          <a href="/">
            <img className="w-44 hidden lg:flex" src={express24} alt="" />
          </a>
        </div>
        <div className="search flex justify-between items-center gap-5 relative">
          <CiSearch className="w-5 hidden lg:flex h-5 ml-3 absolute" />
          <input
            type="search"
            placeholder="Заведение, блюдо, товар или кухня"
            className="input hidden lg:flex pl-10 input-bordered w-[1400px] max-w-xs"
          />
          <button className="btn hidden lg:flex btn-warning rounded-xl mr-5">Найти</button>
          <HiOutlineLocationMarker className="absolute hidden lg:flex w-6 h-6 right-[260px]" />
          <select onClick={()=>{
const modal = document.getElementById('my_modal_4') as HTMLDialogElement
modal.showModal()
}} className="select  lg:select-bordered w-80 lg:w-[300px]  lg:pl-12 max-w-xx">
            <option disabled selected>
              г. Ташкент, Мирабад район, Амира Темура проспект
            </option>
           
          </select>
          <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-full max-w-3xl">
    <form method="dialog">
   
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-2xl">Адрес доставки</h3>
    <input type="search" placeholder="Введите адрес" className="input mt-4 input-bordered w-full mb-10 max-w-3xl" />
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24310.359664638385!2d71.79053052403563!3d40.39123678511627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1719637889407!5m2!1suz!2s" className=" w-80 lg:w-[700px] h-80 lg:h-[450px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
</dialog>


        </div>
        <div className="profile hidden   lg:flex justify-between items-center gap-2">
          <div className="language border-l border-r">
            <div className="dropdown dropdown-bottom dropdown-end">
           
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 btn-ghost rounded-md"
              >
            <div className="text-slate-500">
            <div> <TfiWorld className="w-5 h-5 mx-auto " /></div>
            <div> <p className="mt-1">Русский</p></div>
            
            </div>
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
          <div className="profile">

           <div> 
         
<button className="btn btn-ghost" onClick={()=>{
const modal = document.getElementById('my_modal_3') as HTMLDialogElement
modal.showModal()
}}>         <div className="text-slate-500">
    <div>  <CgProfile className="w-5 h-5 mx-auto" /></div>
    <div><p className="mt-1">Профиль</p></div>
</div>
  </button><dialog id="my_modal_3" className="modal">
  <div className="modal-box w-[450px]">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   <div className="">
   <h3 className="font-bold text-2xl">Введите номер телефона</h3>
    <p className="text-sm mt-2 mb-10">и получите код подтверждения</p>
    <input type="tel" placeholder="Номер телефона" className="input input-bordered w-full mb-10 max-w-xl" />
    <div className="flex flex-col items-center">
    <p className="text-[12px]">Нажимая кнопку получить код вы принимаете условия</p>
    <p className="text-cyan-600 cursor-pointer mb-5 text-[12px]">пользовательского соглашения</p>
    <button className="btn btn-disabled text-[17px] w-full max-w-xl">Получить код</button>
    </div>
    
   </div>
  </div>
</dialog>

           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
