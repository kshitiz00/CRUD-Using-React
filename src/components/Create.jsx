import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = { "content-type": "text/json" };
  const read = useNavigate();
  const handleSubmit = (e) => {
    console.log("Clicked");
    e.preventDefault();
    axios.post(
      "https://645fc724fe8d6fb29e25fe09.mockapi.io/CRUD_APP",
      {
        name: name,
        email: email,
      },
      header
    ).then(()=>{
        read("/read");
    })
    
  };
  return (
    <>
        <div className="d-flex justify-content-between m-2">
      <h2>Create</h2>
      <Link to={'/read'}>
      <button className="btn btn-primary">Show Data</button>
      </Link>
      </div>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
