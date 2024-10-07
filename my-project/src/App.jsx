import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import myData from "../data/data.json";
import Cart from "./components/Cart";
import Confirm from "./components/Confirm";
function App() {
  const [data, setData] = useState([]);
  const [orderConfirm, setOrderConfirm] = useState(false)

  useEffect(() => {
    const updateData = myData.map((item, index) => {
      return { ...item, order: 0, id: index };
    });
    setData(updateData);
  }, []);

  const addOrder = (index) => {
    const updateData = data.map((item, i) => {
      if (i == index) {
        return { ...item, order: item.order + 1 };
      }
      return item;
    });
    setData(updateData);
  };
  const subOrder = (index) => {
    const updateData = data.map((item, i) => {
      if (i == index && item.order > 0) {
        return { ...item, order: item.order - 1 };
      }
      return item;
    });
    setData(updateData);
  };

  const setUpdatedData = (updateData) => {
    setData(updateData);
  };

  const confirmOrder = ()=>{
    setOrderConfirm(true)
  }
  const startNewOrder = ()=>{
    const updateData = myData.map((item) => {
      return { ...item, order: 0};
    });
    setData(updateData);
    setOrderConfirm(false)
  }

  return (<>
  
    <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-Rose-50 md:gap-8 gap-y-8 gap-x-0 py-12 px-8 sm:px-12 md:py-20">
      <Container myData={data} addOrder={addOrder} subOrder={subOrder} />
      <Cart myData={data} setUpdatedData={setUpdatedData} confirmOrder={confirmOrder} />
    </div>
     {orderConfirm && <Confirm myData={data} startNewOrder={startNewOrder} />}
    </>
  );
}

export default App;
