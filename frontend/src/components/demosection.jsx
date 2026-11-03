import DemoDeviceMockups from "./demoDeviceMockup"

const DemoSection=()=>{
return(
    <div className=" text-center bg-[#EAF1FF] py-5">
          <h6 className=" text-sm text-[#9D4300] font-bold text-center uppercase inter-global p-2">Hands on Interactive Simulation</h6>
        <h2 className="text-3xl font-bold plus-jakarta-sans-plus-Jsan ">Experience What Your Guests & Cashiers See</h2>
        <p className="inter-global  mx-auto w-[60%] text-sm my-3 text-gray-500 ">Tap items on the guest mobile mockup below. Watch how the staff POS register updates simultaneously, calculating 2.5% CGST and 2.5% SGST in real-time.</p>
        <DemoDeviceMockups/>
    </div>
 
)
}
export default DemoSection