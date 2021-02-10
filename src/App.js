import React from 'react';
import Header from './Header/Header.js';
import ImageList from './ImageList/ImageList.js';
import ImageArray from './Data/ImagesArray.js';
import './App.css';

const hornAmounts = [''];
const uniqueKeywords = [''];
ImageArray.map((animal) => {
  if (uniqueKeywords.indexOf(animal.keyword) === -1) {
    uniqueKeywords.push(animal.keyword);
  }
  if (hornAmounts.indexOf(animal.horns) === -1) {
    hornAmounts.push(animal.horns);
  }
});

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


    { console.log(this.state.keyword, this.state.horns, 'yo') };


    const filtered = ImageArray.filter((animal) => {
      console.log(typeof animal.horns, typeof this.state.horns);
      if (!this.state.horns && !this.state.keyword) return true;
      if (!this.state.keyword && parseInt(this.state.horns) === animal.horns) return true;
      if (!this.state.horns && this.state.keyword === animal.keyword) return true;
      if (parseInt(this.state.horns) === animal.horns && this.state.keyword === animal.keyword) return true;
    });

    console.log(filtered);


    return (
      <div>
        <Header />
        <div className='selectors'>
          <label>
            <h4>Horns</h4>
            <select value={this.state.horns}
              onChange={(e) => {
                this.setState({ horns: e.target.value });
                console.log(this.state.horns);
              }}>
              {hornSelect}
            </select>
          </label>
          <label>
            <h4>Keyword</h4>
            <select value={this.state.keyword}
              onChange={(e) => {
                this.setState({ keyword: e.target.value });
                console.log(this.state.keyword);
              }}>
              {keywordSelect}
            </select>
          </label>
        </div>
        <ImageList imagesArray={ImageArray} />
      </div>
    );
  }
}