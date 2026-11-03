import { Calculator, ScanQrCode,IndianRupee,Zap,Utensils,ChefHat,Soup,Coffee} from "lucide-react";
import Tab_Phone from "./heroDeviceMockup";
import HeroDeviceMockup from "./heroDeviceMockup";
const Hero = () => {
  const sectionCards=[
    {
      id:1,
      title:"0.8s",
      headline:"Instant Table QR Load"
    },
      {
      id:2,
      title:"5% GST",
      headline:"Auto CGST/SGST Split"
    },
      {
      id:3,
      title:"0 Hardware",
      headline:"works on existing Tabs and Mobiles",
      icon:<IndianRupee size={18} color="#1E40AF" strokeWidth={3}  />
    },
  ]
  const places=[
      {
      id:1,
      Pname:"Punjab GrillWorks",
      icon:<Utensils size={10} color="#783200" strokeWidth={2.5} />
    },
      {
      id:2,
      Pname:"Third Wave Roastery",
      icon:<Coffee size={10} color="#783200" strokeWidth={2.5} />
    },
     {
      id:3,
      Pname:"Bao & Biryani Co.",
      icon:<Soup size={10} color="#783200" strokeWidth={2.5} />
    },
     {
      id:4,
      Pname:"Dilli Chai Bar",
      icon:<ChefHat size={10} color="#783200" strokeWidth={2.5} />
    },
    
  ]
  return (
    <>
      <div className=" hero-bg-gradient backdrop-blur-lg ">
      <div className="container w-full   lg:mx-auto lg:grid grid-cols-2 py-6">
        <div className="right   border-pink-800 lg:col-span-1">
          <div className="Label mx-3  my-5  flex bg-linear-to-r from-[#EAF1FF] to-[#D3E4FE] rounded-2xl w-fit shadow-3xl p-2">
          <Zap size={20} color="#C45600" strokeWidth={2.5} className="mx-1" />
            <span className=" mx-1 text-[#173BAB] text-[10px]  inter-global font-bold">
              Built-for Indian dine-In Resturants,Cafes &QSRs
            </span>
          </div>
          <div className="mx-3">
            <h1 className="  plus-jakarta-sans-plus-Jsans text-3xl sm:text-4xl ">
              Transform table Dining into{" "}
              <span className="text-[#173BAB] underline-local">
                Instant QR Mobile Ordering
              </span>{" "}
              & Zero Friction Cash POS
            </h1>
            <p className="inter-global text-sm mt-5 mx-1 text-grey-400 sm:text-md">
              Eliminate order delays,increase table turnover by 30% and manage
              yiur entire resturant on laptops and mobiles-- no expensive POS
              hardware or proprietart touch terminal's required.
            </p>
          </div>
          <div className=" btn sm:flex gap-2 my-5 mx-3 ">
            <div className="bg-[#002584] my-2 flex rounded-xl justify-center px-8 py-2 shadow-xl hover:shadow-sm hover:bg-[#001453]">
              <Calculator size={26} color="white" strokeWidth={2} />
              <button className="text-white text-sm mx-2 font-bold sm:text-md">Book Live demo</button>
            </div>
            <div className="bg-[#DDE1FF] m-2 flex rounded-xl justify-center px-8 py-2  shadow-lg hover:bg-[#EFEFFF] hover:shadow-sm">
              <ScanQrCode size={26} color="black" strokeWidth={2} />
              <button className="mx-2 font-semibold text-sm sm:text-md">Try Interactive QR Scan</button>
            </div>
          </div>
          <div className="sectionCards  sm:flex   lg:flex-nowrap  gap-2 my-5 mx-3 ">
             {sectionCards.map((card)=>(
               <div key={card.id} className="bg-[#EAF1FF] m-1 rounded-xl p-3 shadow-sm inter-global ">
               <div className="flex justify-center">
               <div className="m-1  my-auto">
               {card.icon}
               </div>
                <h3 className="text-md font-bold text-[#1E40AF]">{card.title}</h3>
                </div>
                <p className="text-[10px] text-gray-600 inter-global text-center">{card.headline}</p>
               </div>
             ))}
          </div>
          <div className="places   gap-1 my-5 mx-3 ">
          <h4 className="font-bold   inter-global uppercase text-sm sm:text-md">Trusted by 250+ Restaurants across Delhi, Mumbai, Bangalore & Chandigarh</h4>
          <div className=" flex flex-wrap  lg:flex lg:flex-row lg:flex-nowrap">
          {places.map((place)=>(
            <div key={place.id} className="flex    font-bold inter-global text-[10px]  p-2 my-1 rounded-lg shadow">
            <div className="">{place.icon}</div>
              <h5 className="mx-2 text-[8px]">{place.Pname}</h5>
            </div>
          ))}
          </div>
          </div>
        </div>
        <div className="  left lg:col-span-1 flex justify-center">
         <HeroDeviceMockup/>
        </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
