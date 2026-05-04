import React, { useEffect, useState } from "react";
import "./App.css";
import { Trash2, UserPlus } from "lucide-react";

function App() {
  const [staff, setStaff] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [availability, setAvailability] = useState("Morning");

  const fetchStaff = async () => {
    const res = await fetch("http://127.0.0.1:8000/staff");
    const data = await res.json();
    setStaff(data);
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const addStaff = async () => {
    if (!name || !role) return alert("Name and Role required");

    await fetch("http://127.0.0.1:8000/staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, role, availability })
    });

    setName("");
    setRole("");
    setAvailability("Morning");
    fetchStaff();
  };

  const deleteStaff = async (id) => {
    await fetch(`http://127.0.0.1:8000/staff/${id}`, {
      method: "DELETE"
    });

    fetchStaff();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Restaurant Roster</h1>
        <p>Manage staff availability</p>
      </header>

      <div className="grid">
        {/* ADD STAFF */}
        <div className="card">
          <h2><UserPlus size={18}/> Add Staff</h2>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Chef">Chef</option>
            <option value="Waiter">Waiter</option>
            <option value="Manager">Manager</option>
          </select>

          <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
            <option>Morning</option>
            <option>Evening</option>
            <option>Night</option>
          </select>

          <button onClick={addStaff}>Add Staff</button>
        </div>

        {/* STAFF LIST */}
        <div className="card">
          <div className="card-header">
            <h2>Staff</h2>
            <span>{staff.length} members</span>
          </div>

          <div className="list">
            {staff.map((s) => (
              <div key={s.id} className="list-item">
                <div>
                  <strong>{s.name}</strong>
                  <p>{s.role}</p>
                </div>

                <div className="right">
                  <span className="badge">{s.availability}</span>

                  <button
                    className="delete-btn"
                    onClick={() => deleteStaff(s.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;