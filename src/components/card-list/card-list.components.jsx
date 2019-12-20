import React from 'react';
import '../card-list/card-list.styles.css';

import {Card} from '../card/card.component';

export const CardList=(props)=>(    
    <div className="card-list">
        {
            props.monster.map(mons => <Card key={mons.id} monster={mons}/>)
        }
    </div>
);