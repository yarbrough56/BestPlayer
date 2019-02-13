import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
    // shared by input box and slider
    state = {
        inputValue: 2,
    }

    onChange = (value) => {
        console.log(value)
        this.setState({
            inputValue: value,
        });
        this.props.onMinCountChange(value);
    }


    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}
