import React from 'react'
import { useState } from "react";

export default function Mtop() {

  const [image, setImage] = useState(
    "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=1920&q=75"
  );


  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "80vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3>Groceries Delivered in 90 Minute</h3>
            <p>
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Your Product from here"
              style={{
                padding: "10px",
                width: "60vw",
                border: "2px solid black",
              }}
            />
            <button
              style={{
                padding: "10px",
                backgroundColor: "rgb(1, 198, 139)",
                color: "white",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
