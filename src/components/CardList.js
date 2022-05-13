import React from "react";
import Card from "./Card";
// import { robots } from './robots';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                }) // if I add a semicolon here, it will not work; why?
            }
        </div>
    );
};

export default CardList;

