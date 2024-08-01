import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={s.wrapper}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
