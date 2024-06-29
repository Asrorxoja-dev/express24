import { FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
function Footer() {
  return (
    <div className="mt-14 bg-slate-100 p-10">
        <div className="px-2 lg:px-20"> 
            <div className="flex justify-between  items-center">
           <div>
           <div className="flex text-center items-center mb-10 gap-10">
                <p className="cursor-pointer text-sm lg:text-[14px] text-slate-400">О нас</p>
                <p className="cursor-pointer text-sm lg:text-[14px] text-slate-400" >Контакты</p>
                <p className="cursor-pointer text-sm lg:text-[14px] text-slate-400">Пользовательское соглашение</p>
            </div>
            <div>
              <h3 className="mb-7 text-sm lg:text-[14px] text-slate-400">
            Служба поддержки: <a className="cursor-pointer">+998 71 200 40 01</a>
                </h3>
           </div>
           </div>
            <div className="hidden lg:flex justify-center text-sm lg:text-[14px] pr-5 pt-5 flex-wrap-reverse gap-5 mt-10" >
                <FaInstagram className="w-5 h-5 cursor-pointer  text-slate-400"/>
                <FaFacebookF className="w-5 h-5 cursor-pointer  text-slate-400"/>
                <BiLogoTelegram className="w-5 h-5 cursor-pointer  text-slate-400"/>
                <h3 className=" hidden lg:flex  text-slate-400"><p className="w-5">Ⓒ</p> 2024 Express24</h3>
            </div>
            </div>
          

        </div>
    </div>
  )
}

export default Footer