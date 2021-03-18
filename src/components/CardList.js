import React from "react";
import Card from "./Card";

const CardList = (props) => {

    return(
        <div>
            {
                props.robots.map( (user, i) => {
                return(
                    <Card key={props.robots[i].id} robots={props.robots[i]}/>
                );
            })
            }
        </div>
    );
}
export default CardList;