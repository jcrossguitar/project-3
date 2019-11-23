import React from 'react';
import OrderAPI from '../../utils/API';


export class ViewOrderDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewOrder: {
				clientName: 'No Order',
				pointOfContact: "None",
				email: "None",
				phone: "0000000000",
				orderRequest: 'loading...',
				date: ""
			},
		};
	}

	componentDidMount() {
		const {
			id
		} = this.props.match.params;
		if (id) {
			OrderAPI.getOrderById(id)
				.then(res => {
					console.log('order', res.data)
					this.setState({
						order: res.data,
					});
				})
				.catch(err => {
					console.log(`ERR - Could not load order id: ${id}`, err);
					this.setState({
						order: {
							name: "Facebook",
							amount: 100,
							description: "Micro-processors",
						}
					});
				});
		}
		
	}

	render() {
		return (
			<div>
				<h1>Welcome to ViewOrderDetail {this.props.match.params.id || "Unknown"}</h1>
				<h2>{ this.state.order.name } - ${this.state.order.amount / 100}</h2>
				<p>{ this.state.order.description }</p>
			</div>
		);
	}
}
