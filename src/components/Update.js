import React, { useState,useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import {useHistory} from 'react-router'

function Update (){
  const [checkbox, setCheckbox] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [id, setID] = useState(null);
  
  let navigate = useHistory()
  const updateAPIData = () => {
    axios.put(`https://61cecc4565c32600170c7d64.mockapi.io/CRUD/${id}`, {
      title,
      description,
      date,
      checkbox,
    })
    .then(()=>{
     navigate.push("./read")
    });
  };
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("Title"));
    setDescription(localStorage.getItem("Description"));
    setDate(localStorage.getItem("Date"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);
  return (
    <Form className='create-form'>
      <Form.Field>
        <label>Title</label>
        <input placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title}/>
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <input
          placeholder='Date'
          type='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='I agree to the Terms and Conditions'
          onChange={(e) => setCheckbox(!checkbox)}
          checked={checkbox}
        />
      </Form.Field>
      <Button  type='submit' onClick={updateAPIData}>
        Update
      </Button>
    </Form>
  );
}

export default Update;
