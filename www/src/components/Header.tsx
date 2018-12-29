import React from 'react';
import {style} from 'typestyle';

const background = style({
    backgroundColor: 'blue',
    width: '100%',
    height: '20%',
    paddingTop: '1%',
    paddingBottom: '1%'
}), 
label = style({
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 25
});


export const Header = () => <div className={background}><div className={label}>MATH?</div></div>