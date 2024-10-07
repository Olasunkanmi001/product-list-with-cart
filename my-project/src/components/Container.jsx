import React, { useEffect, useState } from "react";

const Container = ({ myData, subOrder, addOrder }) => {
  return (
    <div className="col-span-2">
      <h1 className="text-4xl font-bold pb-8">Desserts</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
        {myData.map((item, id) => {
          return (
            <div key={item.name} className="rounded-lg">
              <div className="relative">
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcset={item.image.mobile}
                  />
                  <source
                    media="(min-width: 900px)"
                    srcset={item.image.desktop}
                  />
                  <img
                    src={item.image.tablet}
                    alt={item.name}
                    className={`w-full h-50 object-cover rounded-md block ${
                      item.order
                        ? "rounded-lg border-solid border-2 border-Red "
                        : ""
                    }`}
                  />
                </picture>
                {item.order ? (
                  <div className="flex w-auto items-center gap-1 cursor-pointer rounded-full bg-Red absolute left-1/2 bottom-[-22px] transform -translate-x-1/2 py-2 md:py-2.5 px-3 md:px-4.5 text-white">
                    <button
                      className="mr-6 p-1 text-white border-solid border-2 rounded-full border-white hover:bg-white hover:text-Red "
                      onClick={() => {
                        subOrder(id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="2"
                        fill="none"
                        viewBox="0 0 10 2"
                        stroke="currentcolor"
                        className="w-2 h-2"
                      >
                        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                      </svg>
                    </button>
                    <span>{item.order}</span>
                    <div
                      className="ml-6 p-1 text-white border-solid border-2 rounded-full border-white hover:bg-white hover:text-Red"
                      onClick={() => {
                        addOrder(id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                        stroke="currentcolor"
                        className="w-2 h-2"
                      >
                        <path
                          fill="#fff"
                          d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      addOrder(id);
                    }}
                    className="flex items-center text-gray-950 cursor-pointer hover:text-Red gap-1 rounded-full border border-gray-400 hover:border-Red bg-white absolute left-1/2 bottom-[-22px] transform -translate-x-1/2 py-2 md:py-3 px-3 md:px-5 md:text-base text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      fill="none"
                      viewBox="0 0 21 20"
                      className="inline h-6"
                    >
                      <g fill="#C73B0F" clip-path="url(#a)">
                        <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                        <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M.333 0h20v20h-20z" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="font-semibold text-sm ">Add to Cart</span>
                  </div>
                )}
              </div>
              <div className="py-6">
                <p className="text-gray-500 text-xs md:text-sm">
                  {item.category}
                </p>
                <h3 className="text-base md:text-lg font-semibold ">
                  {item.name}
                </h3>
                <p className="text-base md:text-lg font-semibold text-Red">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
