import React from "react";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { ListItem } from "./ListItem";

export default function List(){

    const[query,setQuery] = useState("");
    const[list,setList] = useState([]);

    const handleAdd=()=>{
        const payload = {
            title:query,
            status:false,
            id:uuidv4(),
        };
        setList([...list,payload]);
        setQuery("");
    };

    const onDelete=(id)=>{
        let updatedList =list.filter(item=> item.id!==id);
        setList(updatedList); 
    }

    return(
        <>
        <h1>List of items</h1>

        <div>
            <input type="text" placeholder="add Something" value={query} onChange={(event)=>(
                setQuery(event.target.value)
            )}/>
            <button onClick={handleAdd}>Add</button>
        </div>


        {list.map((item)=>{
            return (
              <ListItem onDelete={onDelete} key={item.id}  {...item}/>
            );
        })}


        </>
    );
}

