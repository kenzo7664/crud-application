import axios from "axios";
import React, {useState, useEffect} from "react";
import { Button } from "semantic-ui-react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
  const [apiData, setApiData] = useState([])
  
  useEffect(()=>{
     axios.get("https://61cecc4565c32600170c7d64.mockapi.io/CRUD")
      .then((response)=>{
        setApiData(response.data)
      });
  },[])

  const onDelete = (id) => {
    axios
      .delete(`https://61cecc4565c32600170c7d64.mockapi.io/CRUD/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://61cecc4565c32600170c7d64.mockapi.io/CRUD`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };


  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body className='text'>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.description}</Table.Cell>
                <Table.Cell>{data.date}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Link to='/update'>
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
const setData = (data) => {
  let { id, title, description,date ,checkbox } = data;
  localStorage.setItem("ID", id);
  localStorage.setItem("Title", title);
  localStorage.setItem("Description", description);
  localStorage.setItem("Date", date);
  localStorage.setItem("Checkbox Value", checkbox);
};
