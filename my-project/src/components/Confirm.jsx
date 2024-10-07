import React from "react";

const Confirm = ({ myData, startNewOrder }) => {
  const myOrderData = myData.filter((item) => item.order);

  const totalOrderPrice = myData.reduce((total, item) => {
    return total + item.order * item.price;
  }, 0);
  console.log(myData);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end md:items-center z-10">
      <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-full h-fit -top-1/2 md:w-2/3 lg:w-1/3">
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
              fill="#1EA575"
            />
            <path
              d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
              fill="#1EA575"
            />
          </svg>
        </div>
        <div className="py-6">
          <h1 className="text-3xl font-bold">Order Confirmed</h1>
          <p className="text-gray-400">We hope you enjoy your food!</p>
        </div>
        <div className="bg-Rose-50 rounded-md ">
          <div className="max-h-64 overflow-y-auto px-4 py-2">
            {myOrderData.map((item) => {
              return (
                <div key={item.name}>
                  <div className="flex justify-between py-4 items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10">
                        <img
                          className="rounded-md"
                          src={item.image.thumbnail}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex flex-col font-semibold text-sm">
                        <h3 className="font-semibold ">{item.name}</h3>
                        <div className="flex flex-row gap-4">
                          <p className="text-Red ">{item.order}x</p>
                          <p className="text-gray-400">
                            @ ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500 font-semibold">
                        ${(item.order * item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className=" flex justify-between py-6 px-4">
            <p className="text-gray-600">Order Total</p>
            <h1 className="font-bold text-3xl text-black">
              ${totalOrderPrice.toFixed(2)}
            </h1>
          </div>
        </div>
        <div>
          <button
            className="bg-Red w-full rounded-full py-4 text-gray-100"
            onClick={() => startNewOrder()}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
