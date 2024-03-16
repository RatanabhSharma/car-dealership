import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./getdata.css";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import CreateIcon from "@mui/icons-material/Create";
// import DeleteIcon from "@mui/icons-material/Delete";

const Getdata = () => {
  const [getUserData, setgetUserData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://demelsbackend.onrender.com/getsub", {
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

  return (
    <div className="datas">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Email</th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getUserData.map((user) => {
              const { _id, email } = user;
              return (
                <tr key={_id}>
                  <th scope="row">{_id}</th>
                  <td>{email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Getdata;
