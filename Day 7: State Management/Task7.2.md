#### Mini Task 2: Live Text Preview

```javascript

import { useState } from "react";

function LiveText() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Live Text Preview</h2>
      <input 
        type="text" 
        placeholder="Type here..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <p style={{ marginTop: "20px" }}>👉 You typed: <b>{text}</b></p>
    </div>
  );
}

export default LiveText;
```
