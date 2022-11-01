import React from "react";
import Card from "../cardsData.json";
import '../App.css';
function MovieCardDisplay (){
  return(
    <>
     
    <div className="movie">
    {  
        Card && Card.map(card => {
           return(     
            <div  key={card.id}>
              
                  <ul className="img-box" key={card.id}>
                    <li> <img src={card.img.src} className="img-box" alt={card.img.alt} /></li>
                    <li> <strong>#{card.id} - {card.title} ({card.year})</strong></li>
                    <li >Distributor:{card.distributor}</li>
                    <li >Amount:{card.amount}</li>
                  </ul>
                
            </div>
        
           )
        })
    }
    </div>
    </>
  );
}
export default MovieCardDisplay;