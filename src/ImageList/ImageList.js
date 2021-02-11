import React from 'react';
import ImageItem from './ImageItem/ImageItem.js';
import './ImageList.css';

export default class ImageList extends React.Component {
    render() {

        const filteredImages = this.props.imagesArray;

        const imageElements = filteredImages.map(animal =>
            <label key={animal.title} >
                <h3>{animal.title}</h3>
                <img src={animal.url} alt={animal.title} />
                <p>{animal.description}</p>
            </label>
        );

        return (
            <div className='hornedCreatureDiv'>
                {imageElements}
            </div>
        );
    }
}