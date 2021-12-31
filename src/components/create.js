import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

function Create() {
  const [checkbox, setCheckbox] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const checkInputs = (e) =>{
   const Tit = document.getElementById("title").value
   const descr = document.getElementById("desc").value
   
   if (Tit && descr === ""){
    navigate("./")
   }
   else if(Tit && descr !== ""){
    postData()
   }
  }

  let navigate = useHistory();
   const postData = () => {
     axios.post("https://61cecc4565c32600170c7d64.mockapi.io/CRUD",{
      title,
      description,
      date,
      checkbox
     })
     .then(()=>{
      navigate.push("./read")
     });

   };

  return (
    <Form className='create-form'>
      <Form.Field>
        <label>Title</label>
        <input
          type='text'
          id='title'
          placeholder='Title'
          
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          id='desc'
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <input
          placeholder='Date'
          type='date'
          onChange={(e) => setDate(e.target.value)}
          
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='I agree to the Terms and Conditions'
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button onClick={checkInputs} type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default Create;
