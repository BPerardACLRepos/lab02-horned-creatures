import React from 'react';



export default class DropDown extends React.Component {
    render() {

        const mappedOptions = this.props.optionsArray.map((value, index) =>
            <option key={index} value={value}>
                {value}
            </option>
        );

        return (
            <label>
                <h4>{this.props.title}</h4>
                <select value={this.props.state} onChange={this.props.changeCallback}>
                    {mappedOptions}
                </select>
            </label>
        );
    }
}