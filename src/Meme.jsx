import React, { useState } from "react"
import memesData from "./memesData"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(pastMeme => ({
            ...pastMeme, randomImage: memesArray[randomNumber].url
        }))        
    }
    function handleChange(event){
        console.log(event.target)
        const {name, value} = event.target
        event.preventDefault()
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return(<div className="meme">
        <div>
            <section className ="meme-textValues">
                <input 
                type="text"
                placeholder="Top text"
                className="meme-textValue"
                name = "topText"
                value = {meme.topText}
                onChange = {handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="meme-textValue"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange = {handleChange}
                />
            </section>
            <button className = "meme-submit" onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme-Image" />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2> 
        </div>
    
    </div>)

    
}