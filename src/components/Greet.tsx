import React from 'react';

interface Props {
    name?: any,
    children?:any
  }


 const Greet=(props:Props)=>{
     console.log(props)
    return (
        <div>
    <h1> Hello {props.name} </h1>
       { props.children}
       </div>
       )
}

export default Greet;