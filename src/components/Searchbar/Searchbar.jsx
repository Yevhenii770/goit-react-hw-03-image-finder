import React, { Component } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

import { ImSphere } from 'react-icons/im';

export default class Searchbar extends Component {
  state = {
    searchbarPhotoName: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchbarPhotoName.trim() === '') {
      toast.error('Введите имя поиска');
      return;
    }
    this.props.onSubmitName(this.state.searchbarPhotoName);
    this.setState({ searchbarPhotoName: '' });
  };

  handleNameChange = event => {
    this.setState({
      searchbarPhotoName: event.currentTarget.value.toLowerCase(),
    });
  };

  render() {
    return (
      <Header>
        <label>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <ImSphere />
            </SearchFormButton>

            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.photoName}
              onChange={this.handleNameChange}
            />
          </SearchForm>
        </label>
      </Header>
    );
  }
}
