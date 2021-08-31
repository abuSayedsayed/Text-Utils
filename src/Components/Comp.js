import React, { Component } from 'react';

export class Clock extends Component {
    state = { date: new Date() };

    timer;

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date } = this.state;
        const { locale } = this.props;
        return (
            <div>
                <h1> {date.toLocaleTimeString(locale)}</h1>
            </div>
        );
    }
}

export default Clock;
