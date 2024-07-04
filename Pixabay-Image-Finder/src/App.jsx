import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { Navbar, ImageResults } from './components/index'

export default class App extends Component {
  state = {
    searchText: '',
    amount: 10,
    images: []
  }

  handleChange = input => e => {
    const val = e.target.value;
    this.setState({ [input]: val },
      () => {
        const apiKey = String(import.meta.env.VITE_PIXEBAY_API_KEY);
        const pixabayURL = String(import.meta.env.VITE_PIXABAY_URL);
        axios.get(`${pixabayURL}/?key=${apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    )
  }

  render() {
    const { searchText, amount, images } = this.state;
    const values = { searchText, amount, images };

    return (
      <div>
        <Navbar
          handleChange={this.handleChange}
          values={values}
        />
        {images.length > 0 ? (<ImageResults images={images} />) : null}
      </div>
    )
  }
}