import React, { useState,useEffect } from "react";

function List({ onInput,onupdate }) {
  const [sucessid, setSucessId] = useState([]);
    const [newToDo,setNewToDo]= useState(onInput)

/* -------------------------------- Very IMP -------------------------------- */
    useEffect(() => {
        setNewToDo(onInput);
    }, [onInput]); // This effect runs whenever onInput changes
/* ----------------------------------- -- ----------------------------------- */

  const handleSucess = (id) => {
    if (sucessid.includes(id)) {
      sucessid.pop(id);
      setSucessId([...sucessid]);
    } else {
      setSucessId([...sucessid, id]);
    }
  };

  const handleDelet=(id)=>{
    const newerToDo = newToDo.filter((item)=>item.id!==id)
    // console.log(newerToDo)
    setNewToDo(newerToDo)
    onupdate(newerToDo)
  }


  return (
    <div className="container">
      <ul style={{ listStyleType: "none", padding: "0", width: "80%" }}>
        {newToDo.map((data) => (
          <li key={data.id}>
            <div
              className="todolist"
              style={{
                backgroundColor: `${
                  sucessid.includes(data.id) ? "#6F00FF" : "white"
                }`,
                padding: `${
                  sucessid.includes(data.id) ? "5px 10px" : "10px"
                }`
              }}
            >
              <span style={{fontSize: `${
                  sucessid.includes(data.id) ? "18px" : "20px"
                }`,color: `${
                  sucessid.includes(data.id) ? "white" : "black"
                }`
              }}>{data.data}</span>
              <div className="symbol">
                <span onClick={() => handleSucess(data.id)}>👍</span>{" "}
                <span onClick={()=>handleDelet(data.id)}>❌</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
