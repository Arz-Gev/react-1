import ProfileCard from "./compontents/profileCard/ProfileCard";
const Profiles = [
  {
    id: 0,
    name: "Dolomites",
    title: "Italy",
    imageUrl: "https://shorturl.at/ECWxY",
  },
  {
    id: 1,
    name: "Salar de Uyuni",
    title: "Bolivia",
    imageUrl: "https://shorturl.at/sjtps",
  },
  {
    id: 2,
    name: "Mount Fuji",
    title: "Japan",
    imageUrl:
      "https://pixlr.com/blog/wp-content/uploads/2021/04/83058266_l.jpg",
  },
];

function App() {
  return (
    <>
      {Profiles.map((item) => (
        <div key={item.id}>
          <ProfileCard
            name={item.name}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        </div>
      ))}
    </>
  );
}

export default App;
