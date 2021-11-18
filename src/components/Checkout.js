import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pizzaman from "../assets/PizzaMan.png";

export default function Checkout({ ingredients }) {
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const [image, setimage] =useState(false);

  const imageoperation=()=>{
    setSuccess(true);
    localStorage.setItem("image",JSON.stringify(Pizzaman));
  }
  useEffect(()=>{
    const image=localStorage.getItem("image");
    if (image) {
      setimage(JSON.parse(image));
    }
  },[])
  return (
    <div style={{ padding: 50, display: "flex",backgroundColor:"#31708E" }}>
      <div style={{ flex: 1 }}>
        <div>
          <h1 style={{ fontFamily: "Comfortaa",color:"#fff" }}>My Ingredient</h1>
          {Object.keys(ingredients).reduce((acc, ing) => {
            return acc + ingredients[ing] ? 1 : 0;
          }, 0) === 0 && <p>No ingredients Selected</p>}
          {Object.keys(ingredients).map((ingredient) => {
            return (
              ingredients[ingredient] && (
                <ul>
                <li style={{fontSize:"20px",color:"#fff" }}>
                  {ingredient[0].toUpperCase()}
                  {ingredient.substr(1)}
                </li>
                </ul>
              )
            );
          })}
          <button
            className="proceedToCheckout"
            onClick={() => history.push("/")}
          >
            Go Back
          </button>
          <button
            onClick={() => imageoperation()}
            className="proceedToCheckout"
            style={{ marginLeft: 10 }}
          >
            Confirm
          </button>
        </div>
      </div>
      <div style={{ flex: 1,color:"#fff"  }}>
        {success && (
          <div style={{ textAlign: "center" }}>
            <img src={Pizzaman} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your order, Thank you
            </div>
            <div style={{ fontFamily: "Comfortaa" }}>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
              Will be ready in 20-30 min.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}