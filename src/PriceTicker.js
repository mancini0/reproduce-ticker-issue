import React from 'react';
import './PriceTicker.css';
class PriceTicker extends React.Component {

    constructor(props) {
        super(props)
        this.state = { price: undefined, arrow: undefined }
    }

    static getDerivedStateFromProps(newProps, oldState) {
        if (newProps.price && oldState.price && newProps.price !== oldState.price) {
            const upArrow = '\u21E7'
            const downArrow = '\u21E9'
            const change = (newProps.price-oldState.price).toFixed(2)
            if (newProps.price > oldState.price) {
                return { price: newProps.price, arrow: upArrow, bgColor: 'green', change}
            }
            else {
                return { price: newProps.price, arrow: downArrow, bgColor: 'red', change }
            }
        }
        return { price: newProps.price, arrow: undefined, tickClass: undefined, change:undefined}
    }

    render(props) {
        return (
            <div>
                {this.state.arrow &&
                    <span className='fadeout' style={{
                        backgroundColor: this.state.bgColor,
                    }}>{this.state.arrow} {this.state.change}</span>

                }
                {this.state.price? '  '+this.state.price : 'waiting for first price...'}
            </div>
        );

    }

}


export default PriceTicker