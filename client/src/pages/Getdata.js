import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./getdata.css";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import CreateIcon from "@mui/icons-material/Create";
// import DeleteIcon from "@mui/icons-material/Delete";

const Getdata = () => {
  const [getUserData, setgetUserData] = useState([]);

  const { id } = useParams("");

  const getData = async () => {
    const res = await fetch("https://demelsbackend.onrender.com/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 404 || !data) {
      console.log("no data");
    } else {
      setgetUserData(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    const res = await fetch(`/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deleteData = await res.json();
    console.log(deleteData);
    if (res.status === 404 || !deleteData) {
      console.log("data not found");
    } else {
      if (window.confirm("are you sure you want to delete this data")) {
        getData();
        alert("data deleted");
      }
    }
  };

  return (
    <div className="datas">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">Email/number</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getUserData.map((user) => {
              const { _id, name, email, description } = user;
              return (
                <tr key={_id}>
                  <th scope="row">{_id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{description}</td>
                  <td className="d-flex justify-content-between">
                    {/* <NavLink to={`/detail/${_id}`} className="btn btn-success">
                      <i className="fa-sharp fa-regular fa-eye"></i>
                    </NavLink>
                    <NavLink to={`edit/${_id}`} className="btn btn-primary">
                      <i className="fa-solid fa-pen"></i>
                    </NavLink> */}
                    <button
                      onClick={() => deleteUser(_id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <RemoveRedEyeIcon />
                </button>
                <button className="btn btn-primary">
                  <CreateIcon />
                </button>
                <button className="btn btn-danger">
                  <DeleteIcon />
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Getdata;
