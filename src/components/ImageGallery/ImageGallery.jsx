import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Section, Ul } from './ImageGallery.styled';
import ButtonLoadMore from '../Button/Button';
export default class ImageGallery extends Component {
  state = {
    photos: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.photoName !== this.props.photoName) {
      const BASE__URL = 'https://pixabay.com/api/?';
      const API__KEY = '33191219-dc41095899386e0adcb39eb2c';

      this.setState({ loading: true, photos: null });
      fetch(
        `${BASE__URL}q=${this.props.photoName}&page=1&key=${API__KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Фото с именем ${this.props.photoName} не найдено`)
          );
        })
        .then(res => this.setState({ photos: res }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { photos, loading } = this.state;

    return (
      <Section>
        {photos && photos.hits == 0 && (
          <h1>Фото с именем {this.props.photoName} не найдено</h1>
        )}

        {loading && <h1>Загружаю</h1>}

        {photos && (
          <Ul>
            <ImageGalleryItem photos={photos.hits} />
          </Ul>
        )}

        <ButtonLoadMore />
      </Section>
    );
  }
}
