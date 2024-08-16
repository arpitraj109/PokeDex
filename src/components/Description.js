import React from "react";

const Description=({heightpok,weightpok,pokestat1,pokestat2,pokestat3,pokestat4,pokestat5,pokestat6,pokebs1,pokebs2,pokebs3,pokebs4,pokebs5,pokebs6})=>
{
    return(
        <div className="des">
            <p><b>Height</b> - <b>{heightpok*10}cm.</b></p>
            <p><b>Weight</b> - <b>{(weightpok*0.1).toFixed(2)}kg.</b></p>
            <h3>Stats</h3>
            <p><b>{pokestat1}:{pokebs1}</b></p>
            <p><b>{pokestat2}:{pokebs2}</b></p>
            <p><b>{pokestat3}:{pokebs3}</b></p>
            <p><b>{pokestat4}:{pokebs4}</b></p>
            <p><b>{pokestat5}:{pokebs5}</b></p>
            <p><b>{pokestat6}:{pokebs6}</b></p>
        </div>
    )
}
export default Description