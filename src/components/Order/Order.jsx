import React, { useEffect, useState } from "react";
import "./Order.css";
import OrderItem from "./OrderItem";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/orders")
      .then((r) => r.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <>
      <h2>Orders</h2>
      <div className="card orderCard">
        <div id="searchStatusDiv" className="mb-3">
          <input
            id="search"
            className="form-control me-2"
            type="search"
            placeholder="Search..."
          />
          <select
            id="select"
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Status</option>
            <option value="">Active</option>
            <option value="">Disable</option>
            <option value="">Show All</option>
          </select>
        </div>
        <hr />
        <div className="mb-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Total</th>
                <th scope="col">Paid</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {orders.map((order) => (
                <OrderItem key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Order;
