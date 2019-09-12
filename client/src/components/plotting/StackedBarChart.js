import React, { Component, Fragment } from 'react';
import { maxHeaderSize } from 'http';

class StackedBarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return <h1>StackedBarChart</h1>;
    }
}

export default StackedBarChart;