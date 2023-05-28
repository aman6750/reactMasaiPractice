import React from 'react'

function ListItem({title,id,status,onDelete}){
    return (
        <div>
            <h3>{title}</h3>
            <button onClick={()=>{
               onDelete(id);
               
            }}>Delete </button>
        </div>
    );
}

export {ListItem};