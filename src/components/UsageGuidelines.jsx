export default function UsageGuidelines({ children }) {
  return (
    <div className="cmp-usage-guidelines">
      <div className="cmp-usage-guidelines__text">
        <h2 className="cmp-usage-guidelines__heading">Usage Guidelines</h2>
        <div className="cmp-usage-guidelines__content">{children}</div>
      </div>
      <img
        className="cmp-usage-guidelines__image"
        src="/images/usage-guidelines-image.svg"
        alt="Sparkbox logo"
      />
    </div>
  );
}
