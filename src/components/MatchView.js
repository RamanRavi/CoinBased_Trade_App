import React from "react";

const MatchView = ({ subscriptions }) => {
  // Static match data for demonstration
  const staticMatchData = [
    { timestamp: "2024-11-13T14:23:00Z", product: "BTC-USD", size: "0.1", price: "40000", side: "buy" },
    { timestamp: "2024-11-13T14:24:00Z", product: "ETH-USD", size: "1.5", price: "3000", side: "sell" },
    { timestamp: "2024-11-13T14:25:00Z", product: "XRP-USD", size: "500", price: "0.95", side: "buy" },
    { timestamp: "2024-11-13T14:26:00Z", product: "LTC-USD", size: "2", price: "210", side: "sell" },
  ];

  return (
    <div className="col-6 mt-4">
      <h2>Match View</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Product</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {staticMatchData
            .filter((match) => subscriptions[match.product]) // Only show matches for subscribed products
            .map((match, index) => (
              <tr key={index}>
                <td>{match.timestamp}</td>
                <td>{match.product}</td>
                <td>{match.size}</td>
                <td style={{ color: match.side === "buy" ? "green" : "red" }}>
                  {match.price}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchView;
