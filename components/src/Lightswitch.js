import React, {useState} from 'react';

function Lightswitch(props){
    let [data, setData] = useState(null);

    let turnOn =() =>{
        let bright = "The room is bright";
        setData(bright)
        props.onDataFromChild(bright)
    }
    let turnOff =()=>{
         let dark = "The room is dark";
         setData(dark);
         props.onDataFromChild(dark);
    }   
        return(
            <div>
                <button onClick={turnOn}>Turn on</button>
                <button onClick={turnOff}>Turn off</button>
                
            </div>
        );
    }
export default Lightswitch 