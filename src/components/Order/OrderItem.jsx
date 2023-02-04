import React from "react";
import { AiOutlineEye } from "react-icons/ai";

function OrderItem({ order }) {
  return (
    <>
      <tr>
        <td>{order.name}</td>
        <td>{order.email}</td>
        <td>$ {order.total}</td>
        <td>
          ({order.paid} === Paid) ? (
          <button type="button" className="btn btn-success btn-sm" disabled>
            {order.paid}
          </button>
          ) : (
          <button type="button" className="btn btn-danger btn-sm" disabled>
            {order.paid}
          </button>
          )
        </td>
        <td>{order.date}</td>
        <td>
          ({order.status} === Delivered) ? (
          <button type="button" className="btn btn-success btn-sm" disabled>
            {order.status}
          </button>
          ) : (
          <button type="button" className="btn btn-dark btn-sm" disabled>
            {order.status}
          </button>
          )
        </td>
        <td>
          <AiOutlineEye />
        </td>
      </tr>
    </>
  );
}

export default OrderItem;
