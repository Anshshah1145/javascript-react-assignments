import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">

      <ProfileCard
        name="Ansh Shah"
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        description="MCA student passionate about software development, AI, and building useful applications."
      />

    </div>
  );
}

export default App;