import * as React from 'react';
import { LinkComponent } from '../../Utils/Link';
import { style } from 'typestyle';

const MainContainer = style({
    textAlign: 'center',
    marginTop: '8%',

}),
LinkContainer = style({
    padding: '5%',
    border: '1px solid',
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2,
    fontWeight: 'bold',
    color: 'black',
}),
Header = style({
    color: 'darkblue',
    fontWeight: 'bold',
    textAlign: 'center'
});

export const ArrayNavigation = () => (
    <div>
        <p className={Header}>Methods of solving systems of linear algebraic equations:</p>
        <div className={MainContainer}>
            <LinkComponent to='/linearAE/LU' ><span className='link-container'>LU</span></LinkComponent>
            <LinkComponent to='/linearAE/QR' ><span className='link-container'>QR</span></LinkComponent>
            <LinkComponent to='/linearAE/LDL' ><span className='link-container'>LDL</span></LinkComponent>
        </div>
    </div>
)