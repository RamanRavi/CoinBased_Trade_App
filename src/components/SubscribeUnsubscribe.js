import React, { useState } from "react";
import MatchView from "./MatchView";

const SubscribeUnsubscribe = () => {
  const [subscriptions, setSubscriptions] = useState({
    "BTC-USD": false,
    "ETH-USD": false,
    "XRP-USD": false,
    "LTC-USD": false,
  });
  const staticPriceData = {
    "BTC-USD": { bids: [["40000", "0.5"]], asks: [["40010", "0.3"]] },
    "ETH-USD": { bids: [["3000", "1.2"]], asks: [["3010", "0.8"]] },
    "XRP-USD": { bids: [["0.9", "500"]], asks: [["1.0", "450"]] },
    "LTC-USD": { bids: [["200", "2"]], asks: [["205", "1.5"]] },
  };

  const handleSubscription = (product, action) => {
    setSubscriptions((prev) => ({
      ...prev,
      [product]: action === "subscribe",
    }));
  };
  return (
    <div className="row float-left justify-content-center">
      <h3>Subscribe/Unsubscribe</h3>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          {Object.keys(subscriptions).map((product) => (
            <table class="table">
              <thead>
                <tr>
                  <th>{product}</th>
                  <td>
                    <p
                      className={`h2 ${
                        subscriptions[product] ? "text-success" : "text-danger"
                      }`}
                    >
                      {subscriptions[product] ? "Subscribed" : "Unsubscribed"}
                    </p>
                  </td>
                  <th>
                    <button
                      className={`btn ${
                        subscriptions[product] ? "btn-danger" : "btn-success"
                      }`}
                      onClick={() =>
                        handleSubscription(
                          product,
                          subscriptions[product] ? "unsubscribe" : "subscribe"
                        )
                      }
                    >
                      {subscriptions[product] ? "Unsubscribe" : "Subscribe"}
                    </button>
                  </th>
                </tr>
              </thead>
            </table>
          ))}
        </div>
      </div>

      {/* PRICE VIEW */}
      <div className="row mt-4">
        <h2>Price View</h2>
        <hr></hr>
        {Object.keys(staticPriceData).map((product) =>
          subscriptions[product] ? (
            <div className="col-2">
              <div key={product}>
                <h3>{product}</h3>
                <div>
                  <h4>Bids</h4>
                  <ul>
                    {staticPriceData[product].bids.map((bid, index) => (
                      <li key={index}>
                        Price: {bid[0]}, Size: {bid[1]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Asks</h4>
                  <ul>
                    {staticPriceData[product].asks.map((ask, index) => (
                      <li key={index}>
                        Price: {ask[0]}, Size: {ask[1]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* MATCH VIEW */}
      <div className="row">
        <MatchView subscriptions={subscriptions} />
      </div>

      {/* STATUS VIEW */}
      <div className="row">
        <h2>System Status</h2>
        <hr></hr>
        <ul>
          {Object.keys(subscriptions).map((product, index) =>
            subscriptions[product] ? <li key={index}>{product}</li> : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default SubscribeUnsubscribe;
