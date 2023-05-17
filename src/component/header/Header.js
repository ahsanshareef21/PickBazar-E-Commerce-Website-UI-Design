import React from "react";

import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            {/* <span className="pick fs-3 fw-bolder">Pick</span>
            <span className="bazar fs-3 fw-bolder text-success">Bazar</span> */}
          </Link>

          <img
            className="avatar"
            width={150}
            height={30}
            src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
            alt="Gregorio Y. Zara"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mx-3 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fs-5"
                  aria-current="page"
                  to={"/"}
                >
                  Shops
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fs-5" to={"/fqa"}>
                  FAQ
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-dark fs-5" to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-outline-none bg-success text-white btn-sm w-75 "
                type="submit"
              >
                <Link
                  to={"/registor"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Become a Seller
                </Link>
              </button>
              <button
                className="btn btn-outline-success bg-success text-white btn-sm w-25 "
                type="submit"
              >
                <Link
                  to={"/join"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Join
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
