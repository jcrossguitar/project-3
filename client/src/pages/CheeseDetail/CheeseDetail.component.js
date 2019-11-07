import React from 'react';
import API from '../../utils/API';

export class CheeseDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cheese: {
                name: "No Cheese",
                price: 0,
                description: "nothing purchased",
                }        
            };
    }

    componentDidMount() {
        const {
            id
        } = this.props.match.params;
        if (id) {
            API.getCheeseByID(id).then(cheese => {
                this.setState({
                    cheese,                
                });
            })

            .catch(err => {
                console.log(`ERR - could not load cheese id: ${id}`, err);
                this.setState({
                    cheese: {
                    name: "Smelly cheese",
                    price: 1000,
                    description: "the stinkiest of all",
                    }
                })

            });
        }

        // API.getCheeseByID()
    }

    render() {
        return (
            <div>
            <h1>Welcome to CheeseDetail {this.props.match.params.id || "Unknown"}</h1>
            <h2>Welcome to CheeseDetail {this.state.cheese.name } - ${this.state.cheese.price / 100 }</h2>
            <p>{ this.state.cheese.description }</p>
            </div>

        );
    }
}