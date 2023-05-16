import React, { useState } from 'react';
import Valid from "./Valid";
export default function Registor() {
    
    const [value, setvalue] = useState({
        name: "",
        email: "",
        password:"",
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
      <div className="container w-50 p-5" style={{height: "100vh" }}>
          <div className="  p-4" style={{ backgroundColor: "white"}}>
          <div className='text-center'>
          <span className="pick fs-3 fw-bolder " >Pick</span><span className="bazar fs-3 fw-bolder text-success">Bazar</span>
          </div>
          <div className="text-center">
          <span className="fs-3" >Register new account</span>
          </div>


            <form className=''>
             
                <div class="mb-3  m-2">
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
                <div class="mb-3   m-2">
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
                <div class="mb-3   m-2">
                  <label for="password" class="form-label text-dark fs-5">
                    Password :
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    onChange={handleInput}
                  />
                  {error.password && <p style={{ color: "red" }}>{error.password}</p>}
                </div>
              

              

             
              <button
                type="submit"
                class="btn btn-success fs-4 m-2 w-100"
                onClick={submit}
              >
                Registor
              </button>
            </form>
          </div>
       
      </div>
    </div>
  )
}
