import { useState } from "react";
import ImgThumbNail from "./ImgThumbNail";


//UseState Calismasi
  
export default function MultipleImages () {
    const [ImageCounter, setImageCounter] = useState(1)
    // function handleAddNewImage() {
    //     setImageCounter(prev => prev+1)
    // }

    // function handleRemoveImage () {
    //     setImageCounter(ImageCounter-1)
    // }

    function handleImage (event) {
        console.log(event.target.id)
        event.target.id === "add" ? setImageCounter(prev => prev+1) : setImageCounter(prev => prev > 0 ? prev-1 : prev) 
    }
    return (
    <>
    <button id="add" onClick={handleImage}>Yeni Gorsel Ekle</button>
    <button id="remove" onClick={handleImage}>Gorsel Sil</button>
    <hr />
    {
        [...Array(ImageCounter)].map((item,index) => <ImgThumbNail key={index}
        imgSrc={`https://picsum.photos/id/${106+index}/110/100`}/>)
}
    
    </>
)
}
