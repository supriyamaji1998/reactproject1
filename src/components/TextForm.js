import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";

import { Form } from "react-bootstrap";
import WordList from "./WordList";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    console.log("uppercase was clicked");
    setText(text.toUpperCase());
    text.split(/\s+/).filter((ele) => {
      return ele.length !== 0;
    }).length && props.showAlert("Coverted to UpperCase", "success");
  };
  const handleLowerClick = () => {
    console.log("uppercase was clicked");
    setText(text.toLowerCase());
    text.split(/\s+/).filter((ele) => {
      return ele.length !== 0;
    }).length && props.showAlert("Coverted to LowerCase", "success");
  };
  const handleCopy = () => {
    const Text = document.getElementById("TextBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    text.length && props.showAlert("Text copied on clipboard ", "success");
  };
  const handleExtraSpace = () => {
    let formatedText = text.split(/\s+/);
    setText(formatedText.join(" "));
    text.split(/\s+/).filter((ele) => {
      return ele.length !== 0;
    }).length && props.showAlert("Text Formated ", "success");
  };

  const handleClear = () => {
    setText("");
    text.length && props.showAlert("Text Box clear", "success");
  };
  const handleChange = (event) => {
    console.log("onchange was clicked");
    setText(event.target.value);
  };
  let timeReq = 0;

  timeReq =
    0.008 *
    text.split(/\s+/).filter((ele) => {
      return ele.length !== 0;
    }).length;
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <Form>
          <Form.Group className="mb-3" controlId="TextBox">
            <Form.Label>
              <h6>Write your text here</h6>
            </Form.Label>
            <Form.Control
              as="textarea"
              value={text}
              rows={8}
              onChange={handleChange}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "light" ? "black" : "white",
              }}
              placeholder="Enter your text here"
            />
          </Form.Group>
        </Form>
        <Button className="btn btn-primary" onClick={handleUpperClick}>
          Convert to UpperCase
        </Button>
        <Button
          className="btn btn-primary mx-3 my-3"
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </Button>
        <Button className="btn btn-primary" onClick={handleCopy}>
          Copy Text
        </Button>
        <Button
          className="btn btn-primary mx-3 my-3"
          onClick={handleExtraSpace}
        >
          Format Text
        </Button>
        <Button className="btn btn-primary  " onClick={handleClear}>
          Clear All
        </Button>
      </div>
      <div className="my-3">
        <h2>Your Text summary </h2>
        <p>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p> {timeReq} minutes to read.</p>
        <hr />
        <hr />
        <h3>Preview Text</h3>
        <hr />
        <p>{text}</p>
      </div>
      <hr />
      <hr />
      <div className="my-3">
        <h2>Word Count</h2>
        <WordList text={text} />
      </div>
    </>
  );
}
