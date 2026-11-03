import {
  Dot,
  SquareDot,
  IndianRupee,
  Triangle,
  MoveRight,
  BellRing,
  ScrollText
} from "lucide-react";
const HeroDeviceMockup = () => {
  return (
    <div className="relative w-full p-2 flex flex-col  m-auto    max-w-[540px]   mx-auto py-8">
      {/* Floating Section */}
      <div className=" absolute animate-bounce top-5 z-40 bg-white m-auto sm:flex  inter-global text-[12px] px-2 py-1 shadow-xl rounded-2xl p-1.5">
        <BellRing
          size={30}
          color="white"
          strokeWidth={2.5}
          className="my-auto mx-1 bg-[#FF8D4B] rounded-4xl p-2"
        />
        <div className="flex flex-col">
          <h6 className="font-semibold text-[10px] sm:text-sm">
            New Order Alert! Table #4
          </h6>

          <div className="flex text-gray-600 text-[10px] sm:text-sm">
            <p>2x Panner Tikka</p>
            <Dot size={20} strokeWidth={4} className="m-auto" />
            <IndianRupee size={10} className="m-auto" strokeWidth={3} />

            <span>560(KOT Generated)</span>
          </div>
        </div>
      </div>
      {/* TAb section */}
      <div className="">
        
        <div className="tab w-[82%]  sm:flex  sm:flex-col sm:justify-between sm:h-[25rem]  sm:w-[84%] border-10 rounded-[2.2rem] shadow-2xl">
          <div className="Header flex bg-[#D3E4FE] justify-between items-center rounded-t-3xl ">
            <div className="flex items-center">
              <Dot size={40} color="#006C4A" strokeWidth={6} className="" />
              <h3 className="inter-global text-sm font-semibold ">
                RestroSaaS Live Cashier POS
              </h3>
            </div>
            <span className="inter-global text-sm mx-2 jetbrains-mono-jet">
              Counter#1
            </span>
          </div>
          <div className="Active-orders">
            <div className=" flex flex-col">
              <div className="order-1 shadow-lg rounded-lg m-2 p-4">
                <div className="flex">
                  <h2 className="plus-jakarta-sans-plus-Jsans text-[#173BAB] mx-2 text-lg text-center ">
                    T-04
                  </h2>
                  <span className="text-[13px] bg-[#FFDBCA] font-semibold inter-global text-[#C45600] rounded-xl p-1">
                    Dine-In
                  </span>
                </div>
                <div className="flex mx-2">
                  <ul className=" flex text-sm gap-4 text-[#8292AA] list-disc">
                    <span>3 items</span>
                    <li>Server:Mohit</li>
                  </ul>
                </div>
              </div>
              <div className="order-2 shadow-lg rounded-lg m-2 p-4">
                <div className="flex ">
                  <h2 className="plus-jakarta-sans-plus-Jsans  text-lg text-center mx-2">
                    T-08
                  </h2>
                  <span className="text-[13px] bg-[#EAF1FF] font-semibold text-[#3755C3] inter-global rounded-xl p-1">
                    Pending-Bill
                  </span>
                </div>
                <div className="flex mx-2">
                  <ul className=" flex text-sm gap-4 text-[#8292AA] list-disc">
                    <span>2 items</span>
                    <li>Server:Pooja</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="btns m-2  flex  justify-between inter-global text-sm ">
              <button className="bg-[#173BAB] px-5 text-white sm:px-14 py-1 rounded-md shadow-sm">
                Print KOT
              </button>
              <button className="bg-[#D3E4FE] px-5  sm:px-16 py-1 rounded-md">
                Settle
              </button>
            </div>
            <div className="p-10"></div>
            <div className="footer bg-[#D3E4FE] rounded-b-3xl flex justify-between ">
              <h4 className="text-sm inter-global mx-2 font-semibold">
                Today: <span className="font-bold">48 Tables</span>
              </h4>
              <span className="text-[#173BAB] text-sm inter-global mx-3">
                34,8768 Gross
              </span>
            </div>
          </div>
          {/* MObile Section */}
          <div className="mobile min-w-[200px] shadow w-[45%]   m-2 sm:w-[35%] absolute top-13 h-[22rem] right-0 border-10 bg-white rounded-[2.2rem]">
            <div className="bg-[#D3E4FE] rounded-t-3xl  p-1 flex justify-center items-center ">
              <div className=" m-auto ">
                <Dot size={15} color="#173BAB" strokeWidth={15} className="" />
              </div>
              <h5 className="inter-global text-[12px] font-bold">
                Cafe Nirvana(T-04)
              </h5>
              <span className="text-[12px] font-bold m-auto bg-[#85F8C4] rounded-xl p-1">
                Dine-In
              </span>
            </div>
            <div className="flex flex-col justify-between h-65">
              <div>
                <div className=" item-list flex justify-between m-1 bg-[#EAF1FF] p-2  rounded-2xl ">
                  <div className="flex gap-1">
                    <SquareDot
                      size={20}
                      color="#25A475"
                      strokeWidth={2}
                      className="my-auto"
                    />
                    <h6 className=" text-[10px] my-auto sm:text-[12px] font-semibold">
                      Paneer Tikka
                    </h6>
                  </div>
                  <div className="flex justify-center items-center">
                    <IndianRupee
                      size={12}
                      color="#173BAB"
                      strokeWidth={3}
                      className=""
                    />
                    <span className="text-[10px]  sm:text-sm text-[#173BAB] font-bold">
                      280
                    </span>
                  </div>
                </div>
                <div className=" item-list flex justify-between m-1 bg-[#EAF1FF] p-2  rounded-2xl ">
                  <div className="flex gap-1">
                    <div className="border-2 border-red-600 m-auto p-1">
                      <Triangle
                        size={6}
                        color="red"
                        fill="red"
                        strokeWidth={2}
                      />
                    </div>
                    <h6 className=" text-[10px] my-auto sm:text-[12px] font-semibold">
                      Paneer Tikka
                    </h6>
                  </div>
                  <div className="flex justify-center items-center">
                    <IndianRupee
                      size={12}
                      color="#173BAB"
                      strokeWidth={3}
                      className=""
                    />
                    <span className="text-[10px]  sm:text-sm text-[#173BAB] font-bold">
                      340
                    </span>
                  </div>
                </div>
              </div>
              <div className="cart">
                <div className="  flex justify-between m-1 bg-[#3755C3] p-2  rounded-2xl ">
                  <div className="flex gap-1">
                    <h6 className=" text-[10px] my-auto sm:text-[12px] text-white font-bold">
                      Cart (2Items)
                    </h6>
                  </div>
                  <div className="flex justify-center items-center">
                    <IndianRupee
                      size={12}
                      color="white"
                      strokeWidth={3}
                      className=""
                    />
                    <span className="text-[10px]  sm:text-sm text-white font-bold">
                      620
                    </span>
                    <MoveRight
                      size={20}
                      color="white"
                      strokeWidth={2}
                      className="mx-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End-Section */}
      <div className=" flex justify-end">
      <div className="   w-60 bg-[#38485D]  flex inter-global text-[12px] px-3 py-2 shadow-xl lg:w-70 rounded-xl p-1.5">
        <ScrollText size={20} color="#68DBA9" strokeWidth={2}   className="my-auto mx-2" />
        <div className="flex flex-col">
          <h6 className="font-semibold inter-global text-[10px] sm:text-sm text-white">
           Instant 80mm ESC?POS Bill
          </h6>
           <h6 className="font-semibold inter-global text-[10px] sm:text-sm text-[#B7C8E1]">
           GSTIN:0077AAAA0987A1Z5
          </h6>

            
            
          </div>
        </div>
      </div>

    </div>
  );
};
export default HeroDeviceMockup;
