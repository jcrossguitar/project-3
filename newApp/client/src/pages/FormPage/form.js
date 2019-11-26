import React from 'react';

export default class Form extends React.Component {
    state = {
        clientName: "",
        pointOfContact: "",
        email: "",
        phone: "",
        orderRequest: '',
        date: ""
    }

    render() {
        return (
            <form>
                <input placeholder="Client Name" value={this.state.clientName}
                onChange={e => this.setState({ date: e.target.value})}/>

                <input placeholder="Point of Contact" value={this.state.pointOfContact}
                onChange={e => this.setState({ date: e.target.value})}/>

                <input placeholder="Email" value={this.state.email}
                onChange={e => this.setState({ email: e.target.value})}/>

                <input placeholder="Phone" value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value})}/>

                <input placeholder="Order Request" value={this.state.orderRequest}
                onChange={e => this.setState({ orderRequest: e.target.value})}/>
                
                <input placeholder="Date Created" value={this.state.date}
                onChange={e => this.setState({ date: e.target.value})}/>
            </form>
        )
    }
}