import React from "react";

const SubscriptionCard = ({ title, price, features }) => {
  return (
    <div class="subscription-card">
      <h2 class="subscription-title">{title}</h2>
      <div class="subscription-price">${price}/month</div>
      <ul class="subscription-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button class="subscribe-button">Subscribe</button>
    </div>
  );
};

const SubscriptionGrid = () => {
  const subscriptions = [
    {
      title: "Silver",
      price: 9.99,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Gold",
      price: 19.99,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Platinum",
      price: 29.99,
      features: ["Unlimited Minutes", "Feature 2", "Feature 3"],
    },
  ];
  return (
    <div class="subscription-grid">
      {subscriptions.map((subscription, index) => (
        <SubscriptionCard key={index} {...subscription} />
      ))}
    </div>
  );
};
const HomePage = () => {
  return (
    <div class="home-page">
      <center>
        <h1>Welcome to our Real-Time Video App</h1>
      </center>
      <SubscriptionGrid />
    </div>
  );
};

export default HomePage;
