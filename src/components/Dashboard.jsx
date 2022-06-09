import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px 40px" }}>
      <h1>Dashboard</h1>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default Dashboard;
