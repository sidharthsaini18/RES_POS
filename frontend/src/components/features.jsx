import { QrCode,Banknote,Volume2,ReceiptText,IdCard,ChartNoAxesCombined,ChevronRight } from "lucide-react"
const Features=()=>{
    const featureList=[
        {
            id:1,
            icon:<QrCode size={30} color="#002584" strokeWidth={2.5} />,
            title:"Scan-to-orderORMenus",
            desc:"Zero app download required for diners. Guests simply point their camera or WhatsApp scanner to browse rich photo menus, customize spice levels, and order directly to kitchen counters.",
            btnText:"Dynamic Table QRs"
        },
          {
            id:2,
            icon:<Banknote size={30} color="#002584" strokeWidth={2.5} />,
            title:"Insant Cash and UPIPOS",
            desc:"Blazing fast 1-tap checkout. Collect physical cash, display dynamic on-screen UPI QR codes (PhonePe, GPay, Paytm), or split bills across seats with zero latency.",
            btnText:"Sub-second-Settlement"
        },
          {
            id:3,
            icon:<Volume2 size={30} color="#002584" strokeWidth={2.5} />,
            title:"Real TIme Sound Alert",
            desc:"Indian kitchens are loud and chaotic. High-decibel audio chimes trigger instantly on kitchen phones and cashier tablets whenever a guest clicks 'Place Order'",
            btnText:"No missed Table orders"
        },
          {
            id:4,
            icon:<ReceiptText size={30} color="#002584" strokeWidth={2.5} />,
            title:"Gst and Thernal Receipts",
            desc:"Automated 2.5% CGST + 2.5% SGST breakdown compliant with Indian tax regulations. Instant formatting for standard 80mm and 58mm Bluetooth/USB thermal printers or digital WhatsApp PDFs.",
            btnText:"FASSI and GST aligned"
        },
          {
            id:5,
            icon:<IdCard size={30} color="#002584" strokeWidth={2.5} />,
            title:"Mutli Role Access Control",
            desc:"Maintain air-tight security. Restrict discount permissions to managers, let waitstaff take handheld KOTs, grant cashiers till reconciliation, and give owners live profit visibility.",
            btnText:"Anti Theft Cash audits"
        },
          {
            id:6,
            icon:<ChartNoAxesCombined size={30} color="#002584" strokeWidth={2.5} />,
            title:"Super Admin Platform",
            desc:"Manage single cafes or 20-outlet franchise chains from one centralized cloud dashboard. Live hourly sales velocity, recipe inventory depletion, and staff attendance tracking.",
            btnText:"Franchise Ready Analysis"
        }     

    ]
return(
<div className=" container mx-auto">
<div className="my-3">
    <h6 className="text-sm  font-bold text-[#9D4300] uppercase m-2">Robust Operational Architecture</h6>
    <h3 className="text-3xl font-extrabold plus-jakarta-sans-plus-Jsans m-2">Engineered for Indian Dining Realities</h3>
    <p className="inter-global font-light m-2 sm:w-[50%] ">Built from the ground up to solve rush hour bottlenecks, unreliable broadband, and messy staff handover in busy Indian kitchens.</p>
    </div>
    <div className="sm:grid grid-cols-3">
        {featureList.map((list)=>(
            <div key={list.id} className=" flex-wrap rounded-lg shadow-2xl/10 m-2 p-4 hover:shadow-sm transition delay-200">
                <div className="bg-[#D3E4FE] p-2 rounded-xl w-fit m-2 inter-global">
                    {list.icon}
                </div>
               <div className="my-4">
               <h5 className="text-lg font-bold">{list.title}</h5>
               <p className="font-light">{list.desc}</p>
               </div>
               <div className="my-2 flex">
               <button className="text-[#002584] font-bold">{list.btnText}</button>
               <ChevronRight size={20} color="#002584" strokeWidth={2.5} className="my-auto" />
               </div>
            </div>
        ))}
    </div>

</div>
)
}
export default Features