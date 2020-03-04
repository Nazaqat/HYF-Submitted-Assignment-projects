import React, {useState} from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove  from 'react-flip-move';



function DisplayList(props){
    const items = props.items;
    const listitems = items.map( item => 
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text"
                     id={item.key} 
                     value={item.text}
                     onChange ={
                         (e)=> {
                             props.setUpdate(e.target.value, item.key)
                         }
                     }
                     />
                <span>
                    <FontAwesomeIcon className="faicons" icon="trash"
                    onClick={ () => props.deleteItem(item.key)}/>
                </span>
                </p>
                
            </div>
        }
        )

        if (listitems.length === 0) {
            return (
              <div>
              <ul className="noItems">No activity defined at the moment</ul>
            </div>
            );
          }
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
            {listitems}
            </FlipMove>
            </div>
        
    )
}

export default DisplayList;