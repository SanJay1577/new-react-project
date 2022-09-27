import React, { Fragment } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';

import { wrapperContext } from '../Context/context';
import { WrapperChild } from './wrpperChild';

const Wrapping = () => {

    const {
        demo, 
        setDemo, 
        datas, 
        setDatas, 
        effectData, 
        setEffectData} = useContext(wrapperContext); 

    const handleStateChange = (event)=>{
        setDemo(event.target.value); 
    }
    
    const handleStateClick = (e) =>{
        e.preventDefault();
        setDatas([...datas, demo]); 
    }


    useEffect(()=>{
        setEffectData(Date.now()); 
        console.log(`The use Effect is called`)
    }, [datas, demo, setEffectData])

  return (
    <div>
        <h1>Wrappig all the concepts</h1>
        <Fragment>
            <h2>1. Use State</h2>
       <form>
        <input 
        type="text"
        onChange={handleStateChange}
        value={demo}
        />

        <button type= "submit"
        onClick={handleStateClick}
        >Add data</button>
          <p> Preview : {demo}</p>
          <p>Datas :  {datas}</p>
          <p>Effect data: Last mountes Time : {effectData}</p>
        </form>
        </Fragment>

        <WrapperChild>
            <h2>Im the warpped children</h2>
        </WrapperChild>
         
        </div>
  )
}

export default Wrapping