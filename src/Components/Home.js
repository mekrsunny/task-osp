import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import document from "../assets/Images/document.png";
import Logo from "../assets/Images/logo.png";
import apple from "../assets/Images/apple.png";
import android from "../assets/Images/android.png";
import bell from "../assets/Images/bell.png";
import batch from "../assets/Images/batch.png";
import language from "../assets/Images/language.png";
import Message from "../assets/Images/Message.png";
import account from "../assets/Images/Account.png";
import account_card from "../assets/Images/account_card.png";
import location from "../assets/Images/location.png";
import patient from "../assets/Images/patient.png";
import comma from "../assets/Images/comma.png";
import right_arrow from "../assets/Images/right_arrow.png";
import right_tick from "../assets/Images/right_tick.png";
import docs from "../assets/Images/docs.png";
import fb from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import yt from "../assets/svg/youtube.svg";
import insta from "../assets/svg/instagram.svg";
import linkedin from "../assets/svg/linkedin.svg";
import PC from "../assets/Images/pc.png";

function Dashboard() {
  return (
    <div>
      <div className="row ribbon">
        <div className="col d-flex justify-content-center">
          <div className="d-flex border-start border-end p-1">
            <p className="m-1">(00) 000 111 2222</p>
          </div>
          <div className="d-flex border-end p-1">
            <p className="m-1">example@example.com</p>
          </div>
        </div>
        <div className="col">
          <div className="d-flex m-1 justify-content-center gap-4">
            <a href="">
              <img src={fb} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={yt} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="nav d-flex mt-3 justify-content-evenly">
        <div className="d-flex">
          <img src={Logo} alt="Admin" />
          <p className="m-2 p-2">PatientSystem</p>
        </div>

        <div>
          <nav className="navbar navbar-expand-lg navbar">
            <div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav gap-4">
                  <Link to="/">
                    <li class="nav-item ribbon rounded nav-link active text-white">
                      Home
                    </li>
                  </Link>
                  <Link to="/dashboard">
                    <li class="nav-link active text-color">
                      Dashboard
                    </li>
                  </Link>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span className="text-color">Services</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span className="text-color">Success Stories</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span className="text-color">Download App</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span className="text-color">About Us</span>
                    </a>
                  </li>
                  <Link to="/login">
                    <li className="nav-link active text-color">
                      Login
                    </li>
                  </Link>
                  {/* <li class="nav-item">
                    <a class="nav-link active" href="#">
                      <span class="text-color">Login</span>
                    </a>
                  </li> */}
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg p-5 mt-3">
        <h1 class="text-center mt-5 text-white fs-1 m-5">
          Lorem ipsum is simply dummy text.
        </h1>
        <div className="text-center">
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            necessitatibus facilis natus fugiat quis doloremque vitae, suscipit
            ratione sint hic, minus, labore modi voluptatum cum! Pariatur ullam
            voluptate, quia perspiciatis earum deserunt aspernatur quisquam
            aperiam incidunt nam nisi! Blanditiis, nisi?
          </p>
        </div>
        <div className="text-center">
          <button className="btn ribbon m-2 mt-9">Lorem Ipsum</button>
          <button className="btn ribbon m-2 mt-9">Lorem Ipsum</button>
        </div>
      </div>
      <div className="text-center">
        <img src={PC} class="pc_img" alt="Laptop" />
      </div>

      <div className="container">
        <div className="row m-4">
          <div className="col-sm-6">
            <div className="card m-2 border-0">
              <div className="d-flex justify-content-start gap-3">
                <img src={Message} alt="Message" width="10%" />
                <h2 className="mt-2">Lorem Ipsum</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  labore nostrum est nulla fuga quos assumenda repellendus nihil
                  voluptates ea dolorem, ducimus laboriosam, aut esse veniam.
                  Quasi sapiente eius soluta repellendus voluptatem, ad commodi
                  error facilis, magni incidunt deserunt fugit placeat{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card m-2 border-0">
              <div className="d-flex justify-content-start gap-3">
                <img src={batch} alt="batch" width="10%" />
                <h2 className="mt-2">Lorem Ipsum</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  labore nostrum est nulla fuga quos assumenda repellendus nihil
                  voluptates ea dolorem, ducimus laboriosam, aut esse veniam.
                  Quasi sapiente eius soluta repellendus voluptatem, ad commodi
                  error facilis, magni incidunt deserunt fugit placeat{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card m-2 border-0">
              <div className="d-flex justify-content-start gap-3">
                <img src={location} alt="Location" width="12%" />
                <h2 className="mt-2">Lorem Ipsum</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  labore nostrum est nulla fuga quos assumenda repellendus nihil
                  voluptates ea dolorem, ducimus laboriosam, aut esse veniam.
                  Quasi sapiente eius soluta repellendus voluptatem, ad commodi
                  error facilis, magni incidunt deserunt fugit placeat{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card m-2 border-0">
              <div className="d-flex justify-content-start gap-3">
                <img src={language} alt="Laguage" width="10%" />
                <h2 className="mt-2">Lorem Ipsum</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  labore nostrum est nulla fuga quos assumenda repellendus nihil
                  voluptates ea dolorem, ducimus laboriosam, aut esse veniam.
                  Quasi sapiente eius soluta repellendus voluptatem, ad commodi
                  error facilis, magni incidunt deserunt fugit placeat{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card m-2 border-0">
              <div className="d-flex justify-content-start gap-3">
                <img src={document} alt="Document_Watch" width="15%" />
                <h2 className="mt-2">Lorem Ipsum</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  labore nostrum est nulla fuga quos assumenda repellendus nihil
                  voluptates ea dolorem, ducimus laboriosam, aut esse veniam.
                  Quasi sapiente eius soluta repellendus voluptatem, ad commodi
                  error facilis, magni incidunt deserunt fugit placeat{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card m-2 border-0">
              <div className="d-flex justify-content-start gap-3">
                <img src={bell} alt="Bell" width="15%" />
                <h2 className="mt-2">Lorem Ipsum</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  labore nostrum est nulla fuga quos assumenda repellendus nihil
                  voluptates ea dolorem, ducimus laboriosam, aut esse veniam.
                  Quasi sapiente eius soluta repellendus voluptatem, ad commodi
                  error facilis, magni incidunt deserunt fugit placeat{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service p-5">
        <h1 className="text-center m-3 text-color fs-3">Services</h1>
        <div className="text-center mb-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            voluptatem quisquam ea? Quibusdam voluptatum atque, provident,
            debitis laboriosam vitae recusandae, minus vel voluptas labore et.
            Explicabo vitae officiis quaerat quae at nihil inventore est
            eligendi autem fugiat velit itaque obcaecati aperiam, tenetur
            provident repudiandae cupiditate aspernatur dolorum dolores quisquam
            nam?
          </p>
        </div>
        <hr />
        <h1 className="text-center m-5">Lorem Ipsum</h1>
        <div className="container d-flex  ">
          <div className="col">
            <div className="d-flex flex-column align-items-end m-5 mt-0">
              <img src={account} alt="Account" width="10%" />
              <h2 className="text-color fs-4">Lorem Ipsum</h2>

              <p className="">Lorem Ipsum is simply text of the printing</p>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-end m-5 ">
                <img src={account_card} alt="Account_card" width="10%" />
                <h2 className="text-color fs-4">Lorem Ipsum</h2>
                <p className="">Lorem Ipsum is simply text of the printing</p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-end m-5 ">
                <img
                  src={location}
                  className="right_float"
                  alt="Location"
                  width="10%"
                />
                <h2 class="text-color fs-4">Lorem Ipsum</h2>
                <p className="">Lorem Ipsum is simply text of the printing</p>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={patient} alt="Patient" width="90%" />
          </div>
          <div className="col d-flex flex-column  ">
            <div className="col">
              <div className=" card d-flex flex-column justify-content-start w-75 p-3 shadow">
                <img src={right_tick} alt="Tick" width="10%" />
                <h2 className="text-color fs-4">Lorem Ipsum</h2>
                <p className="">Lorem Ipsum is simply text of the printing</p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column justify-content-start p-2">
                <img src={right_arrow} alt="Arrow" width="10%" />
                <h2 className="text-color fs-4">Lorem Ipsum</h2>
                <p className="">Lorem Ipsum is simply text of the printing</p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column justify-content-start p-2">
                <img src={docs} alt="Document" width="10%" />
                <h2 className="text-color fs-4">Lorem Ipsum</h2>
                <p className="">Lorem Ipsum is simply text of the printing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center m-5 fs-2 text-color">Success Stories</h1>
      <div className="container d-flex">
        <div className="row">
          <div className="col d-flex">
            <img src={comma} alt="Comma" height="25%" />
            <p className="mt-2 m-1 w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              commodi esse laboriosam quae beatae fugiat sit perferendis tempora
              cumque maxime. Dolore inventore soluta impedit quaerat consequatur
              praesentium accusamus doloremque.{" "}
            </p>
          </div>
          <div className="col d-flex">
            <img src={comma} alt="Comma" height="25%" />
            <p className="mt-2 m-1 w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              commodi esse laboriosam quae beatae fugiat sit perferendis tempora
              cumque maxime. Dolore inventore soluta impedit quaerat consequatur
              praesentium accusamus doloremque.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center ">
        <h1>&#x2022; &#x2022; &#x2022;</h1>
        <div class="bg-color p-5 mt-3">
          <h1 class="text-center mt-5 text-white fs-3 fw-bold">
            Download the app now!.
          </h1>
          <div className="text-center">
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              necessitatibus facilis natus fugiat quis doloremque vitae,
              suscipit ratione sint hic, minus, labore modi voluptatum cum!
              Pariatur ullam voluptate, quia perspiciatis earum deserunt
              aspernatur quisquam aperiam incidunt nam nisi! Blanditiis, nisi?
            </p>
          </div>
          <div>
            
            <button className="btn  m-5 text-white border rounded-pill">
              <img className=" m-1" alt="" src={apple}/>
              IPHONE
            </button>
            <button class="btn  m-5 text-white border rounded-pill">
            <img  className=" m-1"alt="" src={android}/>
              ANDROID
            </button>
          </div>
        </div>
      </div>

      <div className="container d-flex mt-5">
        <div className="row">
          <div className="col">
            <h2>About Us</h2>
            <p className="footer_text w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              consectetur accusantium blanditiis dolor in cumque nobis
              exercitationem, cupiditate maxime quidem nesciunt rem modi
              necessitatibus? Soluta a quaerat labore non nam ipsam inventore
              accusantium neque. Dicta, ab! Minima fuga delectus dicta.
            </p>
          </div>
          <div className="col">
            <h2>Call Us</h2>
            <p className="footer_text">(00)000 000 0000</p>
            <h2>Send Us Mail</h2>
            <p className="footer_text">example@example.com</p>
          </div>
          <div className="col">
            <h2>Keep In Touch</h2>
            <div class="d-flex m-1 justify-content-start gap-3 text-center footer_text">
              <a href="">
                <img src={fb} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
              <a href="">
                <img src={yt} alt="" />
              </a>
              <a href="">
                <img src={insta} alt="" />
              </a>
              <a href="">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-content-center justify-content-center gap-5 m-3">
        <span className="text-color">Home</span>
        <span className="text-color">Services</span>
        <span className="text-color">Success Stories</span>
        <span className="text-color">Download Apps</span>
        <span className="text-color">About Us</span>
      </div>
      <hr className="m-3" />
      <footer className="text-center p-2 footer_text">
        @2020 Patient System.All Rights Reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
