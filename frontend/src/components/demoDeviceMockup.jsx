import {
  SquareDot,
  Plus,
  IndianRupee,
  ArrowRight,
  Triangle,
  Calculator,
  Dot,
  RotateCcw,
  AlarmClock,
  X,
  Printer,
  Volume2
} from "lucide-react";
import { useState } from "react";

const DemoDeviceMockups = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [items, setItems] = useState([]);

  const catList = ["All items", "Starters", "Main Course", "Breads & Drinks"];
  const itemsLists = [
    {
      id: 1,
      icon: (
        <SquareDot
          size={20}
          color="#25A475"
          strokeWidth={2}
          className="my-auto"
        />
      ),
      title: "Panner Tikka (Tandoori)",
      desc: "clay-oven cottage cheese marinated in spiced curd",
      price: 280,
    },
    {
      id: 2,
      icon: (
        <Triangle
          size={18}
          color="red"
          strokeWidth={1}
          fill="red"
          className="my-auto border-2 border-red-600"
        />
      ),
      title: "Murgh Dum Biryani",
      desc: "Slow cooked Awadhi basmati with tender spiced chicken",
      price: 340,
    },
    {
      id: 3,
      icon: (
        <SquareDot
          size={20}
          color="#25A475"
          strokeWidth={2}
          className="my-auto"
        />
      ),
      title: "Butter Garlic Naan",
      desc: "Char-grilled tandoor flatbread with churned butter",
      price: 45,
    },
    {
      id: 4,
      icon: (
        <SquareDot
          size={20}
          color="#25A475"
          strokeWidth={2}
          className="my-auto"
        />
      ),
      title: "Chilled Mango Lassi",
      desc: "Thick Alphonso yogurt churn with green cardamom",
      price: 80,
    },
  ];

  const HandleAdd = (product) => {
    setItems((prev) => [...prev, product]);
    setTotalItems(totalItems + 1);
    setTotalAmount((prev) => prev  + product.price);
  };
const HandleRemove = (itemToRemove) => {
setItems((prev)=>prev.filter((item)=>item.id !==itemToRemove.id))
setTotalItems((prev)=>Math.max(0,prev-itemToRemove.count))
setTotalAmount((prev)=>Math.max(0,prev-(itemToRemove.price*itemToRemove.count)))
  };
  const getGroupItems=(itemsLists)=>{
    return Object.values(
       itemsLists.reduce((acc,item)=>{
        if(acc[item.id]){
          acc[item.id].count+=1
        }
        else{
          acc[item.id]={...item,count:1}
        }
        return acc
       },{})
    )
  }
  const groupedItems=getGroupItems(items)

  const CGST=(totalAmount*2.5)/100
    const SGST=(totalAmount*2.5)/100
  const grandTotal=totalAmount+CGST+SGST

  return (
    <div className=" container mx-auto md:grid grid-cols-2 gap-2 inter-global ">
      <div className="col-span-1 border-10 rounded-[2.2rem] bg-white  m-2">
        <div className=" frame flex justify-between bg-[#D3E4FE] p-2 rounded-t-3xl ">
          <div className="flex">
            <div className="p-2 h-10 border rounded-xl bg-[#173BAB] text-white plus-jakarta-sans-plus-Jsans">
              RN
            </div>
            <div >
              <h5 className=" inter-global font-semibold mx-1 text-start">
                Restro Nirvana
              </h5>
              <ul className="flex list-disc inter-global font-mono text-[10px] md:text-sm">
                <li className="mx-2">Table #04</li>
                <li className="mx-2"> QR Scanned</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">English/Hindi</p>
        </div>
        <div className="categrory bg-[#EAF1FF] my-2 p-1 flex justify-around">
          {catList.map((list, index) => (
            <span
              className="rounded-2xl p-2 text-[12px] inter-global font-semibold"
              key={index}
            >
              {list}
            </span>
          ))}
        </div>
        <div className="list">
          {itemsLists.map((item) => (
            <div
              key={item.id}
              className="flex justify-between  p-4 hover:bg-[#EAF1FF]"
            >
              <div>
                <div className="flex">
                  <div className="p-1 ">{item.icon}</div>

                  <h3 className="text-bold text-start text-sm plus-jakarta-sans-plus-Jsans">
                    {item.title}
                  </h3>
                </div>
                <p className=" text-[10px] w-30 text-gray-500 text-start mx-3  px-2 md:text-sm md:w-50">
                  {item.desc}
                </p>
                <div className="flex mx-4">
                  <IndianRupee
                    size={18}
                    strokeWidth={3}
                    color="#002584"
                    className="my-auto"
                  />
                  <h6 className="text-start text-sm font-bold text-[#002584] md">
                    {item.price}
                  </h6>
                </div>
              </div>
              <div
                className="flex  gap-2 h-10 mx-4 bg-[#EAF1FF]  rounded-xl my-auto  inter-global px-2"
                onClick={() => HandleAdd(item)}
              >
                <Plus
                  size={20}
                  color="black"
                  strokeWidth={2.5}
                  className="my-auto "
                />
                <button className="h-10 font-bold">Add</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#173BAB]  text-white text-start flex inter-global justify-between m-3 rounded-xl">
          <div className="m-2">
            <p className="text-[10px] font-bold ">
              {totalItems} selected Items
            </p>
            <div className="flex">
              <IndianRupee size={16} strokeWidth={3} className="my-auto" />
              <h6 className="font-bold">{totalAmount}</h6>
            </div>
          </div>
          <div className="flex bg-white text-black inter-global font-bold m-2 py-1 px-1 rounded-xl text-sm hover:bg-[#EAF1FF]">
            <button className="text-[#173BAB] text-[10px] md:text-lg">Send order to kitchen</button>
            <ArrowRight size={20} className="my-auto mx-2" strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="m-2 rounded-lg shadow-lg bg-white p-2">
          <div className="p-3 sm:flex justify-between ">
            <Calculator
              size={30}
              color="#002584"
              strokeWidth={2.5}
              className="my-auto m-1"
            />
            <div className="heading">
              <h4 className=" text-[10px] text-start md:text-lg font-bold">
                Kitchen Order Ticket (KOT) Monitor
              </h4>
              <p className="text-[8px] text-start md:text-sm w-50">
                Sync Frequency: Real-Time WebSockets (200ms)
              </p>
            </div>
            <div className="rounded-xl w-20 m- bg-[#85F8C4] flex px-2 items-center sm:m-2">
              <Dot size={10} color="green" strokeWidth={10} className="" />
              <span className="text-[5px]  font-semibold md:text-[10px]">Live Connected</span>
            </div>
            <RotateCcw
              size={20}
              color=""
              strokeWidth={3}
              className="my-auto bg-[#D3E4FE] p-1 m-1  rounded-lg md:p-2"
            />
          </div>
          <div className="bg-[#EAF1FF] text-[10px] rounded-2xl flex justify-around p-3 mx-2 md:text-md">
            <div className="text-start inter-global">
              <span className="text-[12px] text-start">Table ID</span>
              <h4 className="text-[#173BAB] font-bold">Table -04(Main Hall)</h4>
            </div>
            <div className="text-start inter-global ">
              <span className="text-[10px] text-start md:text-md">Captain/Waiter</span>
              <h4 className=" text-[10px] font-bold text-sm">Rajesh Kumar</h4>
            </div>
            <div className="text-start inter-global">
              <span className="text-[10px] text-start md:text-sm">KOT Ref #</span>
              <h4 className=" text-[10px] font-bold md:text-sm">#KOT-9482</h4>
            </div>
            <div className="text-start inter-global">
              <span className="text-[10px] text-start md:text-sm">Elapsed Time</span>
              <div className="flex">
                <AlarmClock size={20} color="#9D4300" strokeWidth={2.5} />
                <h4 className=" font-bold text-[#9D4300] text-[10px] md:text-sm">02m 14s</h4>
              </div>
            </div>
          </div>
          <div className="">
            <p className="uppercase text-start  p-2 mx-2 font-semibold text-[12px] text-gray-600 ">
              Live order Ticket Stream
            </p>
            <div>
              {groupedItems.map((item) => (
                <div
                  className="m-2  p-2 flex gap-2 bg-[#EAF1FF] justify-between  rounded-2xl"
                  key={item.id}
                >
                <div className="flex">
                  <div className="my-auto ">{item.icon}</div>
                  <span className="">
                    {item.title} {item.count > 1 && `x${item.count}`}
                  </span>
                  </div>
                  <div className="flex  font-bold " onClick={()=>HandleRemove(item)}>
                  <IndianRupee size={16} strokeWidth={3} color="#173BAB" className="m-auto"/>
                  <span className="text-[#173BAB] my-auto mr-2">{item.price}</span>
                    <X size={20} color="" className="my-auto" strokeWidth={2.5} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gst bg-[#EAF1FF] m-5 rounded-xl shadow">
            <div className="flex justify-between m-2 p-1 jetbrains-mono-jet">
              <span className="text-sm md:text-md">Items Subtotal (Gross):</span>
              <div className="flex">
              <IndianRupee size={14} strokeWidth={3} color="" className="m-auto"/>
              <span className="text-bold jetbrains-mono-jet my-auto">{totalAmount}</span>
              </div>
            </div>
            <div className="flex justify-between m-2 p-1 jetbrains-mono-jet">
              <span className="text-sm md:text-md">Central GST (CGST @2.5%):</span>
              <div className="flex">
              <IndianRupee size={14} strokeWidth={3} color="" className="m-auto"/>
              <span className="text-bold jetbrains-mono-jet my-auto">{CGST}</span>
              </div>
            </div>
            <div className="flex justify-between m-2 p-1 jetbrains-mono-jet">
              <span className="text-sm md:text-md">State GST (SGST @2.5%):</span>
              <div className="flex">
              <IndianRupee size={14} strokeWidth={3} color="" className="m-auto"/>
              <span className="text-bold jetbrains-mono-jet my-auto">{SGST}</span>
              </div>
            </div>
            <div className="grandtotal flex  justify-between m-1">
            <div className="inter-global">
            <h3 className="text-sm mx-2 font-bold sm:text-xl">Payable Amount:</h3>
            <p className="mb-2 text-sm sm:text-md">Indian Tax Complaint</p>
            </div>
            <div className="flex">
            <IndianRupee size={20} strokeWidth={3} color="#173BAB" className="m-auto"/>
            <span className="my-auto mr-2 text-md  text-[#173BAB] font-extrabold md:text-2xl">{grandTotal}</span>
            </div>
            </div>
          </div>
           <div className="flex inter-global m-5  justify-around">
           <div className="flex bg-[#D3E4FE] py-3  rounded-xl hover:bg-[#B7C8E1] px-1 m-1">
           <Volume2 size={20} color="#9D4300" className="my-auto" strokeWidth={2.5} />
              <button className=" text-[10px]  font-bold px-2 sm:text-lg md:text-sm">Test Kitchen Sound</button>
              </div>
              <div className="flex bg-[#173BAB] py-3  rounded-xl hover:bg-[#526FDE] px-1 m-1">
              <Printer size={30} color="white" strokeWidth={2.5} className="my-auto" />
              <button className="text-white  text-[10px]  font-bold px-2 sm:text-lg md:text-sm">Print Thermal Receipt</button>
            </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};
export default DemoDeviceMockups;
