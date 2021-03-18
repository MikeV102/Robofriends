import React from "react";
const Card = (props) => {
    return(
        <div className={'bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'}>
            <img alt={'robot'} src={`https://robohash.org/${props.robots.id}?200x200`}/>
            <div>
                <h2>{props.robots.name}</h2>
                <p>{props.robots.email}</p>
                <p>{props.robots.address.street}</p>
            </div>
        </div>
    )
}
export default Card;