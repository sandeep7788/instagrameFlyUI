import React, { Component, useEffect, useState } from "react";


export default function DemoFun() {

    const [name,setName] = useState("name");
    const [num,setNum] = useState(0);

    useEffect(() => {
        setName("use effect");
        setNum(num+1);
    },[])

    return (
        <div>
            <h1>data</h1>
            <h1>hello world111111111 {name} _ {num}</h1>
            <button onClick={() => {
                setName("updated name")
                
                }}> 111111111111</button>
        </div>
    )


}