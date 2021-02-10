import React from 'react';
import './ImageList.js';

export default class ImageList extends React.Component {
    render() {
        return (
            <div>
                {this.props.imagesArray.length}
            </div>
        );
    }
}