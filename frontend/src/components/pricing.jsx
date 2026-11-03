import { useState } from "react";
import { IndianRupee, CircleCheck, Flashlight } from "lucide-react";
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const priceList = [
    {
      id: 1,
      Title: "Growth Plan",
      subTitle: "Starter & Single Outlets",
      desc: "Essential touch POS and table QR scanning for growing cafes and bistros.",
      MonthlyPrice: 399,
      yearlyPrice: 2999,
      Features: [
        "Unlimited Table QR Code Standees",
        "Live Cashier Touch POS (Web & Mobile",
        "Unlimited Staff Logins (Captain & Waiter)",
        "Real-Time High-Decibel Audio Kitchen Alerts",
        "GST Compliant 80mm PDF & Thermal Receipts",
        "Standard Email & Ticket Support",
      ],
      BtnText: "Start montly Trial"
    },
    {
      id: 2,
      Title: "Pro Plan",
      subTitle: "High Volume & Fine Dining",
      desc: "Full enterprise restaurant operating system with 2 months free included.",
      MonthlyPrice: 599,
      yearlyPrice: 4999,
      Features: [
        "Everything in Growth Plan + 2 Months Free",
        "Priority 24/7 WhatsApp VIP Support Line",
        "Custom Restaurant Logo Printed on Acrylic QR Cards",
        "Advanced Recipe Costing & Raw Material Depletion",
        "Multi-Register Split Bill & Dynamic Tip Counter",
        "Complimentary On-Site Staff Onboarding (Delhi/NCR/Mumbai)",
      ],
      Save: 30.4,
      BtnText: "Get Started Yearly"
    },
  ];
  return (
    <div className=" my-5 bg-[#EAF1FF] py-5">
      <div className="container  mx-auto">
        <div className="text-center">
          <span className="text-[12px] text-[#C45600] font-semibold jetbrains-mono-jet">
            Flat SaaS Subscription
          </span>
          <h3 className="font-bold text-2xl   md:w-[50%] mx-auto">
            Simple, Transparent Pricing. No Hidden Commissions.
          </h3>
          <p className="inter-global text-[12px]">
            Keep 100% of your restaurant profits. Never pay per-order
            percentages or commission fees.
          </p>
        </div>
       
        <div className="bg-[#EAF1FF]  border-gray-900 my-2 mx-auto px-2 rounded-2xl flex justify-center gap-3 md:w-[30%] ">
          <button
            className={`py-3 w-[100%]   rounded-2xl text-sm hover:bg-white ${!isYearly?"bg-white font-bold":"border-gray-300"}`}
            onClick={()=>setIsYearly(false)}
          >
            Montly Billing
          </button>
          <button
            className={`py-3 w-[100%] rounded-2xl text-sm hover:bg-white ${isYearly?"bg-white font-bold":"border-gray-300"}`}
            onClick={()=>setIsYearly(true)}
          >
            Yearly Billing 
          </button>
        </div>
          
        <div className="md:flex gap-3 justify-center ">
          {priceList.map((list) => (
            <div
              key={list.id}
              className="rounded-xl p-3 w-[80%] mx-auto my-2 bg-white shadow-2xl md:w-[40%] md:mx-0"
            >
              <span className="jetbrains-mono-jet font-semibold uppercase text-[10px]">
                {list.subTitle}
              </span>
              <h3 className="font-bold text-xl ">{list.Title}</h3>
              <p className="w-[75%]  text-sm">{list.desc}</p>
              <div className="flex mt-4">
                <IndianRupee size={25} className="my-auto" />
                {isYearly? <div className="flex flex-row"><h2 className="text-3xl font-bold">{list.yearlyPrice}</h2><span className="my-auto mx-1 italic inter-global font-light">/ year + GST</span></div>: <div className="flex"><h2 className="text-3xl font-bold">{list.MonthlyPrice}</h2><span className="my-auto mx-1 italic inter-global font-light">/ month + GST</span></div>}

               
              </div>
              <div className="p-2">
                <ul>
                  {list.Features.map((Flist, index) => (
                    <div className="flex gap-2" key={index}>
                      <CircleCheck
                        size={20}
                        color="green"
                        strokeWidth={2}
                        className="my-auto"
                      />
                      <li className="m-2 text-sm inter-global" key={index}>
                        {Flist}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center m-2">
                <button className="bg-[#D3E4FE] py-2 w-[80%] rounded-xl font-bold inter-global">
                  {list.BtnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pricing;
