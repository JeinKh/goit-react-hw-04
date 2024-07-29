import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
