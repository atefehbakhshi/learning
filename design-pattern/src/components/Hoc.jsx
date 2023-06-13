import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const items = [
  {
    name: "ati",
    price: "infinit",
    id: 1,
  },
  {
    name: "iman",
    price: "infinit",
    id: 2,
  },
];

// HOC for adding authentication to a component
function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent items={items} />;
  };
}

export default withAuth;
