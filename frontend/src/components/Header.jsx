import { CloudCheck, BellRing, SquareMenu } from "lucide-react";
import { useState } from "react";
const Header = () => {
    const[isOpen,setIsOpen]=useState(false)
  return (
    <>
      <div className="p-2 left-0 z-90 bg-white border border-gray-300 shadow-sm">
        <div className="flex justify-around  ">
          <div className="flex ">
            <CloudCheck
              className="bg-[#1E40AF] px-3 w-13 rounded-xl shadow-xl/10"
              strokeWidth={3}
              size={38}
              color="white"
            />
            <div>
              <span className="text-xl plus-jakarta-sans-plus-Jsans text-bold mx-1 text-[#1E40AF]  font-bold">
                RestroSaaS{" "}
                <span className="text-[#C45600] text-sm bg-[#FFDBCA] p-1 rounded-lg">
                  IN
                </span>
              </span>
              <div className="flex">
                <BellRing
                  className="m-1"
                  size={14}
                  strokeWidth={2}
                  color="#C45600"
                />

                <span className="xsmm text-sm  font-semibold">
                  Resturant Cloud POS
                </span>
              </div>
            </div>
           
          </div>
  
          <div className="mx-5" >
            <ul className="hidden sm: lg:flex gap-3 my-3 font-bold ">
              <li className=" p-2 rounded-md text-sm hover:bg-[#DDE1FF] transition delay-150 duration-200 ease-in-out">
                Features
              </li>
              <li className=" p-2 rounded-md text-sm hover:bg-[#DDE1FF] transition delay-150 duration-200 ease-in-out">
                Live Demo
              </li>
              <li className=" p-2 rounded-md text-sm hover:bg-[#DDE1FF] transition delay-150 duration-200 ease-in-out">
                Pricing
              </li>
              <li className=" p-2 rounded-md text-sm hover:bg-[#DDE1FF] transition delay-150 duration-200 ease-in-out">
                Contact
              </li>
            </ul>
          </div>
          <div className="hidden lg:block my-2">
            <button className="bg-[#DDE1FF] p-2 rounded-lg mx-2 font-bold hover:bg-[#B8C4FF] transition delay-150 duration-100 ease-in-out">
              Restaurant Login
            </button>
            <button className="bg-[#002584] p-2 rounded-lg mx-2 text-white font-bold  hover:bg-[#173BAB] transition delay-150 duration-100 ease-in-out">
              Signup
            </button>
             
          </div>
          <div className=" my-auto  lg:hidden">
              <SquareMenu size={32} color="black" strokeWidth={2} onClick={()=>setIsOpen(!isOpen)}/>
            </div>
        </div>
      </div>
      {/* mobile */}

{isOpen && (
    <>
     <div className="mx-5 bg-white  lg:hidden  transform transition-all duration-300 ease-in-out " >
      
            <ul className=" absolute  bg-white w-54 top-16 right-10 z-10 flex flex-col  gap-3 my-3 font-bold ">
              <li className=" p-2 rounded-md mx-auto text-sm hover:bg-[#DDE1FF] transition delay-150 duration-200 ease-in-out">
                Features
              </li>
              <li className=" p-2 rounded-md mx-auto text-sm hover:bg-[#DDE1FF] transition delay-150 duration-200 ease-in-out">
                Live Demo
              </li>
              <li className=" p-2 rounded-md mx-auto text-sm hover:bg-[#DDE1FF] transition delay-150 duration-200 ease-in-out">
                Pricing
              </li>
              <li className=" p-2 rounded-md mx-auto text-sm hover:bg-[#DDE1FF] transition delay-150 duration-200 ease-in-out">
                Contact
              </li>
            </ul>
          </div> 
        <div className="my-2 absolute p-2 z-10 top-60 bg-white right-10 flex flex-col lg:hidden border-b border-green-50 shadow rounded-b-2xl">
            <button className="bg-[#DDE1FF] m-2 w-50 mx-auto  p-2 rounded-lg  font-bold hover:bg-[#B8C4FF] transition delay-150 duration-100 ease-in-out">
              Restaurant Login
            </button>
            <button className="bg-[#002584] m-2 w-50 p-2 mx-auto rounded-lg  text-white font-bold  hover:bg-[#173BAB] transition delay-150 duration-100 ease-in-out">
              Signup
            </button>
          </div>
          </>
    
)}
    </>
  );
};
export default Header;
