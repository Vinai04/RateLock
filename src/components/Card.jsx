import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";

const Card = (props) => {

  return (
    <div>
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow 
      transform transition duration-500 hover:scale-105 hover:shadow-black hover:shadow-lg"
      >
        <img className="rounded-t-lg " src={props.info.img} alt="" />
        <div className="p-5">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
            {props.info.name}
          </h5>
          <p className="mb-8 font-normal text-gray-700">
            AS {props.info.mode} AS <br></br>{" "}
            <span className="text-3xl font-bold">
              {props.info.rate}% Fixed APY
            </span>
          </p>
          <Link to={`${props.info.name}`}>
          <button className="inline-flex items-center px-6 py-2 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
            {props.info.method} {props.info.name}
            <div className="mt-0.5 ml-2">
              <FaArrowRightLong />
            </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
