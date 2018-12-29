import * as React from 'react';
import { LU } from '../../methods/LU';
import { QR } from '../../methods/QR';
import { LDL } from '../../methods/LDL';
import { style } from 'typestyle';

interface IState { 
    aValue: Array<number>
    bValue: Array<number>
    x: Array<number>
}

interface IProps {
    size: number
}

const MainContainer = style({
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row'
}),
Cell = style({
    width: 100,
    height: 30,
    textAlign: 'center',
    border: '1.5px solid',
    borderRadius: 5,
    margin: 1
})

export class ArrayContainer extends React.Component<IProps, IState> {

    private size: number = this.props.size || 3;
    private A:number[][] = new Array(this.size).fill([]);

    constructor(props: IProps) {
        super(props);

        this.state = {
            aValue: new Array(this.size * this.size).fill(''),
            bValue: new Array(this.size).fill(''),
            x: []
        }

        this.valueHandler = this.valueHandler.bind(this);
        this.valueHandlerForB = this.valueHandlerForB.bind(this);
        this.calculateLU = this.calculateLU.bind(this);
    }

    valueHandler(e: string, index: number) {
        let a = this.state.aValue;
        let x = +e;
        a[index] = +x;
        this.setState({aValue: a});
    }

    valueHandlerForB(e: string, index: number) {
        let a = this.state.bValue;
        let x = +e;
        a[index] = +x;
        this.setState({bValue: a});
    }

    calculateLU() {
        let k = 0;
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                this.A[i][j] = this.state.aValue[k]
                k++;
            }
        }
        this.setState({x: LU(this.size, this.A, this.state.bValue, this.state.x)});
    }

    render() {
        return (
            <div>
                <div className='array-container'>
                    <div className={style({width: 120 * this.size})}>
                        {
                            this.state.aValue.map((item: any, index: number) => 
                                <input
                                    onChange={e => this.valueHandler(e.target.value, index)}
                                    className={Cell}
                                    value={
                                            this.state.aValue[index].toString() == 'NaN' ?
                                            '' : this.state.aValue[index].toString()
                                          }
                                    key={index} />)
                        }
                    </div>
                    <div className='b-container'>
                        {
                            this.state.bValue.map((item: any, index: number) => 
                            <input
                                onChange={e => this.valueHandlerForB(e.target.value, index)}
                                className={Cell}
                                value=
                                {
                                    this.state.bValue[index].toString() == 'NaN' ?
                                    '' : this.state.bValue[index].toString()
                                }
                                key={index} />)
                        }
                    </div>
                    <div className='x-container'>
                        {
                            this.state.bValue.map((item: any, index: number) => 
                            <input
                                readOnly={true}
                                className={Cell}
                                value={this.state.x[index] == null ? '' : this.state.x[index].toString()}
                                key={index} />)
                        }
                    </div>
                </div>
                <button className='array-button' onClick={this.calculateLU}>Calculate</button>
            </div>
        )
    }
}