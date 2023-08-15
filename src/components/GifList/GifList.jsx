import GifListItem from '../GifListItem/GifListItem';

export default function GifList({ gifs }) {
  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <GifListItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
};