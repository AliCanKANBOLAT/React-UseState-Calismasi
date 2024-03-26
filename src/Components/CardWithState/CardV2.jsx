import {useState} from 'react';
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

export default function CardV2 () {
    const [like,setLike] = useState(0)
    const handleClick = () => setLike (prev => prev+1)
    return (
        <div style={{border:"1px solid red",padding:"4px",borderRadius:"8px",marginBottom:"10px",padding:"10px"}}>

            <CardHeader like={like} />
            <button onClick={handleClick}>Like</button>
            <ul>
                <li>Lorem.</li>
                <li>Eveniet?</li>
                <li>Molestias.</li>
            </ul>
            <CardFooter like={like} handleClick={handleClick} />
            <button onClick={handleClick}>Footer Like</button> 
        </div>
    )
}