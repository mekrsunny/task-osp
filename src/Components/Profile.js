import React from "react";
import "./Profile.css";
import menu from "../assets/Images/menu.png";
import email from "../assets/Images/email.png";
import bell from "../assets/Images/bell2.png";
import user1 from "../assets/Images/user1.png";
import user2 from "../assets/Images/user2.png";
import dp from "../assets/Images/dp.jpg";
import tick_mark from "../assets/Images/checked.png";
import view from "../assets/Images/view.png";
import pencil from "../assets/Images/pencil.png";
import cancel from "../assets/Images/cancel.png";

function Profile() {
  return (
    <div>
      <div className="header">
        <div className="hdleft">
          <div>Patient System</div>
          <img src={menu} alt="" />
        </div>
        <div className="hdrt">
          <img src={email} alt="" />
          <img src={bell} alt="" />
          <img src={user1} alt="" />
        </div>
      </div>

      <div className="profilepg">
        <div className="sidebar">
          <div className="sidebarup">
            <img src={dp} className="propic" alt="" />
            <b>Lorem Ipsum</b>
            <p>Admin</p>
          </div>
          <div className="pl sbpatient">
            <img src={tick_mark} alt="" /> <span>Patient</span>
          </div>
          <div className="pl">
            <img src={user2} alt="" /> <span>Logout</span>
          </div>
        </div>

        <div className="mainpage">
          <div className="dashboard">
            <p>Patient Dashboard</p>
          </div>

          <div className="card2">
            <div className="pdetail">
              <h3>Patient Detail</h3>
              <div className="organise">
                <div className="colmn">
                  First Name: <input type="text" />
                  Last Name: <input type="text" />
                  Phone: <input type="text" />
                </div>
                <div className="colmn">
                  Email: <input type="text" />
                  Address 1: <input type="text" />
                  Address 2: <input type="text" />
                </div>
                <div className="colmn">
                  City: <input type="text" />
                  State: <input type="text" />
                  Pincode: <input type="text" />
                </div>
              </div>
              <button className="add-button">ADD</button>
            </div>

            <div className="plist">
              <div className="search">
                <h3>Patient List</h3>
                <input type="text" placeholder="Search by First Name" />
              </div>

              <table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>Bill</td>
                  <td>Gates</td>
                  <td>Lorem ipsum dolor sit.</td>
                  <td>
                    <img src={view} alt="" />
                    <img src={pencil} alt="" />
                    <img src={cancel} alt="" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
