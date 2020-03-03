import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles/style.css";

const UserInfo = () => {
  const { deleteData, userData } = useContext(DataContext);

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="row table">
          <div className="col-md-6">
            <Link to="/usersInfo"></Link>
            <h2 className="topic">Users</h2>
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="userContent">
          <table className="table striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>password</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {userData.map(data => (
                <tr key={data.id}>
                  <td className="data">{data.userName}</td>
                  <td className="data">{data.email}</td>
                  <td className="data">{data.password}</td>
                  <td className="data icon"></td>
                  <td className="data icon">
                    <i onClick={e => deleteData(data.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UserInfo;
