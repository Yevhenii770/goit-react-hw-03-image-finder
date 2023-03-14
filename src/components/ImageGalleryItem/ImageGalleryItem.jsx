import { PropTypes } from 'prop-types';
import { Img, GalleryItem } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ photos }) => (
  <>
    {photos.map(({ id, webformatURL, tag }) => (
      <GalleryItem key={id}>
        <Img src={webformatURL} alt={tag} />
      </GalleryItem>
    ))}
  </>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
};
