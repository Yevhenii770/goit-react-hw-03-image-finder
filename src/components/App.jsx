import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    photoName: '',
    loading: false,
  };
  handleFormSubmit = searchbarPhotoName => {
    this.setState({ photoName: searchbarPhotoName });
  };

  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Searchbar onSubmitName={this.handleFormSubmit} />
        <ImageGallery photoName={this.state.photoName} />

        <ToastContainer
          position="top-right"
          autoClose={1500}
          limit={1}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}
