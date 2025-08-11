import "./style.css";

export default function ProfileCard({ name, title, imageUrl }) {
  return (
    <div className="location-card">
      <img src={imageUrl} alt="picture of nature" width="auto" height="200px" />
      <h1 className="h1">{name}</h1>
      <h2 className="h2">{title}</h2>
    </div>
  );
}
