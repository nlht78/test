import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>🚀 Chào mừng bạn đến với TypeScript Web App!</h1>
      <p>Backend gửi: {message}</p>
    </div>
  );
};

export default App;
