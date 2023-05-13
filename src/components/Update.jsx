import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const read = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://645fc724fe8d6fb29e25fe09.mockapi.io/CRUD_APP/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        read("/read");
      });
  };
  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to={'/read'}>
        <button
          type="submit"
          className="btn btn-secondary mx-2"
          onClick={handleUpdate}
        >
          Back
        </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
