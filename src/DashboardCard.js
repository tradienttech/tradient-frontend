import React, { useState, useEffect } from "react";

const DashboardCard = () => {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState([]);
  const [pnl, setPnl] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/pnl`)
      .then((res) => res.json())
      .then((data) => setPnl(data.total_pnl || 0));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">P&L Overview</h2>
      <p className="text-2xl text-green-600 font-semibold mb-4">
        ₹{pnl !== null ? pnl.toFixed(2) : "Loading..."}
      </p>
      <div className="space-x-4 text-sm font-medium mb-4">
        {["All", "Trader", "Sub-broker", "Admin"].map((role) => (
          <label key={role}>
            <input
              type="radio"
              value={role}
              checked={filter === role}
              onChange={() => setFilter(role)}
              className="mr-1"
            />
            {role}
          </label>
        ))}
      </div>
      <div className="text-gray-600">More dashboard features coming soon...</div>
    </div>
  );
};

export default DashboardCard;
