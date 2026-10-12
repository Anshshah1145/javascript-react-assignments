import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  return (
    <div className="container">

      <h1>Student Form</h1>

      <form>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Course</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter your course"
        />

      </form>

      <div className="display-data">

        <h2>Entered Data</h2>

        <p>
          <strong>Name:</strong> {name}
        </p>

        <p>
          <strong>Email:</strong> {email}
        </p>

        <p>
          <strong>Course:</strong> {course}
        </p>

      </div>

    </div>
  );
}

export default App;