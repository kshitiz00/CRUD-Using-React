import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");
  const handleDelete = (id) => {
    axios
      .delete(`https://645fc724fe8d6fb29e25fe09.mockapi.io/CRUD_APP/${id}`)
      .then(() => {
        getData();
      });
  };
  const handleEdit = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  function getData() {
    axios
      .get("https://645fc724fe8d6fb29e25fe09.mockapi.io/CRUD_APP")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => {
            if (tableDark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read</h2>
        <Link to={"/"}>
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>

      <table className={`table ${tableDark}`}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {data.map((e) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{e.id}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <Link to={"/update"}>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handleEdit(e.id, e.name, e.email);
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Read;
