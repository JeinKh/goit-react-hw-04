const ImageCard = ({ item, onClick }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.slug}
        onClick={() => onClick(item.urls.regular)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
