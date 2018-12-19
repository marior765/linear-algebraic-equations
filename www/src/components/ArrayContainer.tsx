import * as React from 'react';

interface IState {
    size?: number,
    arrayValue: Array<Number>
}

interface IProps {
    size: number
}

export class ArrayContainer extends React.Component<IProps, IState> {

    private A:Number[][] = [[],[]];
    private X:Number[] = [];


    constructor(props: IProps) {
        super(props);

        this.state = {
            size: 3,
            arrayValue: new Array(this.props.size * this.props.size).fill('')
        }
    }

    valueHandler(e: string, index: number) {
        let a = this.state.arrayValue;
        let x = +e;
        a[index] = x;
        this.setState({arrayValue: a});
    }

    convertToDoubleArray() {
        let k = 0;
        for (let i = 0; i < this.props.size; i++) {
            for (let j = 0; j < this.props.size; j++) {
                this.A[i][j] = this.state.arrayValue[k];
                k++;0
            }
        }
    }

    render() {
        return (
            <div>
                <div style={{flex: 1,width: 200, flexWrap: "wrap", padding: 10}}>
                {
                    this.state.arrayValue.map((item: any, index: number) => 
                        <input
                            onChange={e => this.valueHandler(e.target.value, index)}
                            style={{width: 50, borderRadius: 10, textAlign: 'center'}}
                            value={this.state.arrayValue[index].toString()} key={index} />)
                }
                </div>
            </div>
        )
    }
}