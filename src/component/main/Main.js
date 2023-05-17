import React from 'react'
import '../main/main.css'
import Silder  from '../Slider/Silder';
import Mtop from '../Mtop/Mtop';

const img1 =
  "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F200%2Fkhong_guan_premium_marie.jpg&w=1920&q=75";

const img2 =
  "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F197%2FJammie_Dodgers.jpg&w=1920&q=75";

const img3 =
  "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=1920&q=75";

const img4="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75"

const img5 =
  "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F425%2FRound-Cake_rfsrkr.png&w=1920&q=75";

const img6="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75"

const img7="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75"

const img8 =
  "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F197%2FJammie_Dodgers.jpg&w=1920&q=75";

const img9="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75"

const img10 =
  "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F197%2FJammie_Dodgers.jpg&w=1920&q=75";
export default function Main() {
  return (
    <div>
    <Mtop/>
    <Silder/>
     <div className="d-flex mt-4" >
      <div className="col-2">
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item w-100">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Furit & Vegetables
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul style={{listStyle:"none"}}>
        <li className='m-2'>Fruits</li>
        <li className='m-2'>Vegetables</li>
      </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Meat & Fish
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Fresh Fish</li>
          <li className='m-2'>Meat</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Snacks
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Nuts & Biscuits</li>
          <li className='m-2'>Chocolates</li>
          <li className='m-2'>Crisps</li>
          <li className='m-2'>Noodles & Pasta</li>
          <li className='m-2'>Sauce</li>
          <li className='m-2'>Soup</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFourth">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseThree">
        Pet Care
      </button>
    </h2>
    <div id="flush-collapseFourth" class="accordion-collapse collapse" aria-labelledby="flush-headingFourth" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Cat Food</li>
          <li className='m-2'>Dog Food</li>
          <li className='m-2'>Accsessories</li>
                  </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
        Home & Cleaning
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Air Fresher</li>
          <li className='m-2'>Cleaning Product</li>
          <li className='m-2'>Kitchen Accessories</li>
          <li className='m-2'>Laundry</li>
                 </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
        Dairy
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Milk</li>
          <li className='m-2'>Butter</li>
          <li className='m-2'>Egg</li>
          <li className='m-2'>Yogurt</li>
                 </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree">
        Cooking
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Oil</li>
          <li className='m-2'>Rice</li>
          <li className='m-2'>Salt & Suger</li>
          <li className='m-2'>Spices</li>
                 </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseThree">
        Breakfast
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Bread</li>
          <li className='m-2'>Cereal</li>
          <li className='m-2'>Jam</li>
                 </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseThree">
        Beverage
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Coffee</li>
          <li className='m-2'>Energy Drinks</li>
          <li className='m-2'>Juice</li>
                 </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseThree">
        Health & Beauty
      </button>
    </h2>
    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul style={{listStyle:"none"}}>
          <li className='m-2'>Bath</li>
          <li className='m-2'>Cream</li>
                 </ul>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="col-10 ms-5">
      <div className='row m-2'>

      <div class="card m-2" style={{width:"15rem",}}>
      <img src={img1} alt="" />
        <div class="card-body">
          <p class="card-text">$4.00</p>
          <h5 class="card-title">Items Name</h5>
          <button  style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img2} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img3} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img4} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img5} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img6} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img7} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img2} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img6} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img1} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>

      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img7} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
        </div>
     
      <div class="card m-2" style={{width:"15rem"}}>
      <img src={img3} alt="" />
        <div class="card-body">
          <p class="card-text">$2.09</p>
          <h5 class="card-title">Items Name</h5>
          <button style={{width:"100%"}}>Add To Cart</button>
        </div>
      </div>

      </div>
      </div>
     </div>
    </div>
  )
}
