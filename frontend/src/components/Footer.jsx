import { CloudCheck } from "lucide-react"

const Footer=()=>{
return (
  <div className="my-5 container  grid  grid-cols-2 mx-auto gap-1 md:grid-cols-4">
    <div className="col-span-1  m-1">
      <div className="flex m-1">
        <CloudCheck
          className="bg-[#1E40AF] mx-1 p-2 rounded-lg shadow-xl/10 my-auto "
          strokeWidth={2}
          size={30}
          color="white"
        />
        <h3 className="font-semibold text-[#002584]">RestroSaaS India</h3>
      </div>
      <p className="inter-global m-2 font-light text-[12px] ">
        Next-generation restaurant ERP & POS architected for high-velocity
        dining, cloud kitchens, and QSR chains across India.
      </p>
      <div className="my-3 mx-1 flex flex-col md:block">
        <span className="p-1 m-1 w-[50%] text-sm rounded bg-[#85F8C4] md:w-full">GST Registered</span>
        <span className="p-1 m-1 w-[50%] text-sm rounded bg-[#EAF1FF] md:w-full">FSSAI Complaint</span>
      </div>
    </div>
    <div className="col-span-1  m-1 p-2">
      <h4 className="font-bold">Modules</h4>
      <ul className="text-sm inter-global my-2 font-light">
        <li>Touch POS Register</li>
        <li>Kitchen Display System(kDS)</li>
        <li>Table Floor Plam & QR</li>
        <li>Inventory & Recipe Costing</li>
      </ul>
    </div>
    <div className="col-span-1 m-1 p-2">
        <h4 className="font-bold">Compliance & Billing</h4>
      <ul className="text-sm inter-global my-2 font-light">
        <li>CGST & SGST E-Invoicing</li>
        <li>Thermal Print 80mm / 58mm</li>
        <li>FSSAI Menu Classification</li>
        <li>Dynamic UPI QR Counter</li>
      </ul>
    </div>
    <div className="col-span-1 m-1 p-2">
        <h4 className="font-bold">Platform</h4>
      <ul className="text-sm inter-global my-2 font-light">
        <li>Merchant Portal Login</li>
        <li>KBook Product Walkthrough</li>
        <li>SaaS Subscription Tiers</li>
        <li>Enterprise Support Helpdesk</li>
      </ul>
    </div>
  </div>
);
}

export default Footer