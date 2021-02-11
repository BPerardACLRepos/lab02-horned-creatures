import React from 'react';
import Header from './Header/Header.js';
import ImageList from './ImageList/ImageList.js';
import ImageArray from './Data/ImagesArray.js';
import DropDown from './DropDown/DropDown.js';
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

export default class App extends React.Component {

  state = {
    horns: '',
    keyword: ''
  }

  render() {

    const hornsOnChange = (e) => {
      this.setState({ horns: e.target.value });
    }

    const keywordOnChange = (e) => {
      this.setState({ keyword: e.target.value });
    }

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
          <DropDown
            optionsArray={hornAmounts}
            title='Horns'
            state={this.state.horns}
            changeCallback={hornsOnChange} />
          <DropDown
            optionsArray={uniqueKeywords}
            title='Keyword'
            state={this.state.keyword}
            changeCallback={keywordOnChange} />
        </div>
        <ImageList imagesArray={filteredArray} />
      </div>
    );
  }
}