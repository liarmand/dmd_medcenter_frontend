import React, { Component } from 'react';
import { Card } from 'antd';

class Patient extends Component {
    render() {
        return (
            <Card
                title={this.props.patient.name+" "+this.props.patient.surname}
                style={{ width: 200, margin:10, display:"inline-block" }}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        );
    }
}

export default Patient;
