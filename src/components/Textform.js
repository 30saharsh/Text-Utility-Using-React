import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'black'}} >  
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white' , color:props.mode === 'dark'?'white' : 'black'}}
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary  m-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button  disabled={text.length===0}  className="btn btn-success mx-3" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container m-2" style={{color:props.mode === 'dark'?'white':'black'}}  >
        <p>
          This text has {text.split(/\s+/).length - 1} words and {text.length}{" "}
          characters
        </p>
        <h2>This is Your Summary</h2>
        <p>{text.length>0?text:"No Text To Preview !"}</p>
      </div>
    </>
  );
}
