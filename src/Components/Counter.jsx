import { useState } from "react"

export default function Counter () {
    //let counter = 0
    const [counter, setCounter] = useState(0)
    function HandleClick() {
        console.log("HandleClick Butonuna tiklandi")
        setCounter(counter+1)
        console.log(counter)
    }
    return(
    <>
    <h2>Counter : {counter} </h2>
    <button onClick={() =>console.log("Butona tiklandi")}>Counter bilgisini artir...(islevsiz Buton)</button>
    <button onClick={HandleClick}>Counter bilgisini artir...</button>
    <button onClick={()=>setCounter(counter+1)}>isimsiz fonksiyon ile counter bilgisini artir...</button>
    </>
    )
}