import React from "react"
import memesData from "./memesData"


export default function Meme(){
    const [memeImage,  setMemeImage] = React.useState("a")
    
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        // memesArray[randomNumber].url  <-- this line is incomplete!
        
    }
    return(<div className="meme">
        <div>
            <section className ="meme-textValues">
                <input type="text" className = "meme-textValue" name="text-1" defaultValue="Shut Up" />
                <input type="text" className = "meme-textValue" name="text-2" defaultValue="And take my money"/>
            </section>
            <button className = "meme-submit" onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <img src={memeImage} className="meme-Image" />
    
    </div>)
}