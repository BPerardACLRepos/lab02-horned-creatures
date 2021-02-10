import React from 'react';
import Header from './Header/Header.js';
import ImageList from './ImageList/ImageList.js';
import ImageArray from './Data/ImagesArray.js';
import './App.css';

// select option array with blank starting value
const hornAmounts = [''];
const uniqueKeywords = [''];

// derive option values from data
ImageArray.map((animal) => {
  if (uniqueKeywords.indexOf(animal.keyword) === -1) {
    uniqueKeywords.push(animal.keyword);
  }
  if (hornAmounts.indexOf(animal.horns) === -1) {
    hornAmounts.push(animal.horns);
  }
});

// map option values to option elements
const hornSelect = hornAmounts.map((amount, index) =>
  <option key={index} value={amount}>
    {amount}
  </option>
);

const keywordSelect = uniqueKeywords.map((keyword, index) =>
  <option key={index} value={keyword}>
    {keyword}
  </option>
);


export default class App extends React.Component {

  state = {
    horns: '',
    keyword: ''
  }

  render() {

    // filter complete data set for ImageList props
    const filteredArray = ImageArray.filter((animal) => {

      // no filter selected
      if (!this.state.horns && !this.state.keyword) return true;

      // horns filter selected
      if (!this.state.keyword && parseInt(this.state.horns) === animal.horns) return true;

      // keyword filter selected
      if (!this.state.horns && this.state.keyword === animal.keyword) return true;

      // horns & keyword filter selected
      if (parseInt(this.state.horns) === animal.horns && this.state.keyword === animal.keyword) return true;
    });

    return (
      <div>
        <Header />
        <div className='selectors'>
          <label>
            <h4>Horns</h4>
            <select value={this.state.horns}
              onChange={(e) => {
                this.setState({ horns: e.target.value });
              }}>
              {hornSelect}
            </select>
          </label>
          <label>
            <h4>Keyword</h4>
            <select value={this.state.keyword}
              onChange={(e) => {
                this.setState({ keyword: e.target.value });
              }}>
              {keywordSelect}
            </select>
          </label>
        </div>
        <ImageList imagesArray={filteredArray} />
      </div>
    );
  }
}