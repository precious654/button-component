import React from "react";

function Button(props) {

  return(
    <div className="button">
      {props.leftImage && <img src={props.image} alt="icon" className="icon-left" width="20" />}
      <button className={props.class}>{props.name}</button>
      {props.rightImage && <img src={props.image} alt="icon" className="icon-right" width="20" />}
    </div>
  )

}

export default Button;
