```javascript

import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ProfileCard 
        name="Param Malviya" 
        age={22} 
        bio="AI/ML Enthusiast & Web Developer 🚀" 
        image="https://via.placeholder.com/100"
      />
      <ProfileCard 
        name="Ankita Gupta" 
        age={21} 
        bio="Full Stack Developer | Loves React 💻" 
        image="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;

```
