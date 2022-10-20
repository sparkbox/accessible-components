export default function DetailsBanner({ name, image }) {
  const { src, alt } = image; // destructure from image object
  return (
    <div className="details-banner">
      <h1>{name}</h1>
      <div className="details-banner-image">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

DetailsBanner.defaultProps = {
  image: { alt: ' ' },
};
