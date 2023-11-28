import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";

const Borrow = () => {
  const eth = { name: "ETH", rate: "4.02", img: "ethereum.svg", mode: "HIGH" };
  const dai = { name: "DAI", rate: "6.16", img: "dai.svg", mode: "HIGH" };
  const usdc = { name: "USDC", rate: "6.48", img: "usdc.svg", mode: "HIGH" };
  const wbtc = { name: "WBTC", rate: "2.00", img: "wbtc.svg", mode: "HIGH" };

  return (
    <>
      <div className="min-h-screen p-4 bg-homepage_bg bg-no-repeat bg-cover bg-center bg-fixed">
        <Navbar />
        <div className="relative overflow-hidden mt-6">
          <div className="w-full p-8 relative z-10">
            <div>
              <h1 className="text-7xl font-bold text-white  font-poppins px-6 drop-shadow-lg">
                <div className="drop-shadow-lg">Fixed Rate Lending</div>
              </h1>
              <br></br>
              <div className="text-2xl font-medium text-white  font-poppins px-6 drop-shadow-lg">
                <p className="drop-shadow-lg">
                  Fix your rate and earn guaranteed returns with peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="m-8 flex">
            <Card info={eth} />
          </div>
          <div className="m-8 flex">
            <Card info={dai} />
          </div>
          <div className="m-8 flex">
            <Card info={usdc} />
          </div>
          <div className="m-8 flex">
            <Card info={wbtc} />
          </div>
        </div>
        <div className="mt-60">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Borrow;