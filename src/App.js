import React from 'react';
import Header from './Header/Header.js';
import ImageList from './ImageList/ImageList.js';
import ImageArray from './Data/ImagesArray.js';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList imagesArray={ImageArray} />
      </div>
    );
  }
}