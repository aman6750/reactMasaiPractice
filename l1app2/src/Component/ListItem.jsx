import React from 'react'

function ListItem({title,id,status,onDelete,isHidden}){

    if(isHidden){
        return null;
    }

    return (
        <div style={{border:"1px solid black", margin:10, padding:5}}>
            <h3>{title}</h3>
            <button onClick={()=>{
               onDelete(id);
               
            }}>Delete </button>
        </div>
    );
}

export {ListItem};