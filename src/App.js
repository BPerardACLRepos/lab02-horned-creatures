import React from 'react';
import Header from './Header/Header.js';
import ImageList from './ImageList/ImageList.js';
import ImageArray from './Data/ImagesArray.js';
import './App.css';

const hornAmounts = [];
const uniqueKeywords = [];
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
    keyword: '',
  }

  render() {







    return (
      <div>
        <Header />
        <div className='selectors'>
          <label>
            <h4>Horns</h4>
            <select>
              {hornSelect}
            </select>
          </label>
          <label>
            <h4>Keyword</h4>
            <select>
              {keywordSelect}
            </select>
          </label>
        </div>
        <ImageList imagesArray={ImageArray} />
      </div>
    );
  }
}