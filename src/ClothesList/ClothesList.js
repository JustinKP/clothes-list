import "./ClothesList.css";
import React, { useState } from "react";
import { RoleWrapper } from "../RoleWrapper/RoleWrapper";

export const ClothesList = ({isReactClassroom, role}) => { //, loggedIn
  console.log('Clothes list rendered');

  const [clothes, setClothes] = useState([
    {id: '001', name: 'T-shirt',  price: '$10', stock: "10", description: ""},
    {id: '002', name: 'Jeans',    price: '$20', stock: "10", description: ""},
    {id: '003', name: 'Socks',    price: '$5',  stock: "30", description: ""},
    {id: '004', name: 'Shoes',    price: '$20', stock: "7",  description: ""},
    {id: '005', name: 'Leggings', price: '$15', stock: "10", description: ""}
  ]); //creates data array and setter

  const [inputItemId, setinputItemId] = useState("");
  const [inputItemName, setinputItemName] = useState("");
  const [inputItemPrice, setinputItemPrice] = useState("");
  const [inputItemStock, setinputItemStock] = useState("");
  const [inputItemDesc, setinputItemDesc] = useState("");

  function isNumeric(num){
    return !isNaN(num)
  }

  function handleAddItem() {
    const newItem = {id: inputItemId, name: inputItemName, price: inputItemPrice, stock: inputItemStock, description: inputItemDesc}//obj
    const existingItem = clothes.find(clothesItem => clothesItem.name === newItem.name);//saves the obj that stock is being added to
    //existingItem is a copy of the object in array 1 where the name of the obj is the name of the new (inputted) obj (item).
    //newItem NEEDS to be an obj and not an array for this (newItem.name) to work.

    if (existingItem && isNumeric(newItem.stock)) { //if existingItem is assinged something, aka if array1 has the item newItem is talking about.
      existingItem.stock = parseInt(existingItem.stock) + parseInt(newItem.stock); //take clothes and increace that obj's stock by the stock listed in newItem
      setClothes([...clothes]); //re-sets the clothes (saves changes).
    } else {
      setClothes([...clothes, newItem]);//sets clothes as clothes + new item
    }
  } //handler for the button click

  return (
    <div className="student-list">
      <table id="clothesTable">
        <thead>
          <tr class="header">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/*you comment kinda like css in JSX??? and it's different then how you comment in XML?? whyyy*/}
          {/*this is better form then passing in student for {} and having each be student.xy and z*/}
          {clothes.map(({id, name, price, stock, description}, index) => ( //List
            <tr key={index}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{stock}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <input
          type="text"
          id="myInput"
          onkeyup={handleFilter}
          // onChange={e => {
          //   setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
          // }}
          placeholder="Search for names.."
          title="Type in a name"
          //value={newItem}
          //onChange={:}
        /> */}
      {/* <button>
        Apply filter
      </button> */}
      <br></br>
      <br></br>
      <RoleWrapper rolesAllowed={["Admin"]} currentRole={role}>
        <input
          type="text"
          placeholder="ID"
          value={inputItemId}
          onChange={(e) => setinputItemId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={inputItemName}
          onChange={(e) => setinputItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={inputItemPrice}
          onChange={(e) => setinputItemPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Stock"
          value={inputItemStock}
          onChange={(e) => setinputItemStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={inputItemDesc}
          onChange={(e) => setinputItemDesc(e.target.value)}
        />
        <button type="button" onClick={handleAddItem}>
          Add row
        </button>
      </RoleWrapper>
    </div>
  );
};
