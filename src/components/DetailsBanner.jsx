import Header from './Header';

const isWideImage = (name) => {
  const wideImages = ['Tabs', 'Table'];
  if (wideImages.includes(name)) {
    return true;
  }
  return false;
};

export default function DetailsBanner({ name, image }) {
  const { src, alt } = image; // destructure from image object
  return (
    <div className="details-banner">
      <section
        className="details-banner__header"
        data-testid="accessible-components-homepage-link"
      >
        <Header />
      </section>
      <h1>{name}</h1>
      <div className="details-banner-image">
        <img src={src} alt={alt} />
        {!isWideImage(name) && (
          <>
            <img src={src} alt={alt} />
            <img src={src} alt={alt} />
          </>
        )}
      </div>
    </div>
  );
}

DetailsBanner.defaultProps = {
  image: { alt: ' ' },
};

export { isWideImage };
