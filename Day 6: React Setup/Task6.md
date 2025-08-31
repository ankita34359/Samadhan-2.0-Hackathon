### Mini task: Profile Card Component

```javascript

// ProfileCard.jsx
function ProfileCard({ name, age, bio, image }) {
  return (
    <div style={{
      border: "2px solid #ddd",
      borderRadius: "12px",
      padding: "16px",
      maxWidth: "250px",
      textAlign: "center",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100px", borderRadius: "50%" }} 
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;

```
