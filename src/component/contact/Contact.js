import React, { useState } from "react";
import Valid from "./Valid";
import img1 from "../images/contact-image.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle,AiOutlineInstagram } from "react-icons/ai";
// import { AiFillTwitterCircle,AiOutlineInstagram } from "react-icons/ai";


export default function Contact() {
  const [value, setvalue] = useState({
    name: "",
    email: "",
    subject: "",
    Description: "",
  });
  const [error, seterror] = useState({});
  const handleInput = (event) => {
    const newObj = { ...value, [event.target.name]: event.target.value };
    setvalue(newObj);
  };
  const submit = (e) => {
    e.preventDefault();
    seterror(Valid(value));
  };
  return (
    <div style={{ backgroundColor: "#f3f4f6" }}>
      <div className="container" style={{height: "100%" }}>
        <div className="row ">
          <div className="col-lg-3 m-3 " style={{ backgroundColor: "white" }}>
            <img src={img1} className="img-fluid" alt="" style={{backgroundSize:"cover"}}/>
            <div className="mt-2">
              <h4>Address</h4>
              <p>Lahore , Pakistan</p>
            </div>
            <div className="mt-2">
              <h4>Phone</h4>
              <p>+12345567</p>
            </div>
            <div className="mt-2 d-flex justify-content-between">
              <div>
                <h4>Website</h4>
                <p>https://redq.io</p>
              </div>
              <div className="pt-3 mt-3">
                <a href="https://redq.io/" target="_blank" class="link-success fw-bolder text-decoration-none">Visit This Site</a>
              </div>
            </div>
            <div className="mt-2">
                <h4>Follow US</h4>
                <BsFacebook className="m-2" size={30}/> 
                <AiFillTwitterCircle className="m-2" size={30} />
                <AiOutlineInstagram className="m-2" size={30}/>
            </div>
          </div>

          <div className="col-lg-8 m-3 p-5" style={{ backgroundColor: "white"}}>
            <h4> If You Have Any Query Contact US</h4>
            <form>
              <div className="d-flex ">
                <div class="mb-3  w-50 m-2">
                  <label for="name" class="form-label text-dark fs-5">
                    Name :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    onChange={handleInput}
                  />
                  {error.name && <p style={{ color: "red" }}>{error.name}</p>}
                </div>
                <div class="mb-3 w-50  m-2">
                  <label for="email" class="form-label text-dark fs-5">
                    Email :
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    onChange={handleInput}
                  />
                  {error.email && <p style={{ color: "red" }}>{error.email}</p>}
                </div>
              </div>

              <div class="mb-3 m-2">
                <label for="subject" class="form-label text-dark fs-5">
                  Subject :
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  onChange={handleInput}
                />
                {error.subject && (
                  <p style={{ color: "red" }}>{error.subject}</p>
                )}
              </div>

              <div class=" m-2">
                <label
                  for="floatingTextarea2"
                  class="form-label text-dark fs-5"
                >
                  Description :
                </label>
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  name="Description"
                  style={{ height: "100px" }}
                  onChange={handleInput}
                ></textarea>
                {error.Description && (
                  <p style={{ color: "red" }}>{error.Description}</p>
                )}
              </div>
              <button
                type="submit"
                class="btn btn-success fs-4 m-2"
                onClick={submit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
