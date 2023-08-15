import './GifListItem.css';

export default function GifListItem({ gif }) {
  return (
    <div className="gif-card">
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
};