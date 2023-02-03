import React, { useEffect, useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div id="usersHeader">
        <h2>Customers</h2>
        <button type="button" className="btn btn-outline-success btn-sm">
          Create new
        </button>
      </div>
      <div className="card userCard">
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
            <option selected>Status: All</option>
            <option value="">Active only</option>
            <option value="">Disable</option>
          </select>
        </div>
        <hr />
        <div className="mb-3 row">
          {users.map((user) => (
            <div
              className="card col- nameCard"
              // style={{ width: "14rem" }}
              key={user.id}
            >
              <div className="img">
                <img
                  src="https://static-admin-dashboard-example.netlify.app/images/favicon.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.position}</p>
                <a href="mailto:{user.email}">{user.email}</a>
              </div>
            </div>
          ))}
          <div className="pg">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
