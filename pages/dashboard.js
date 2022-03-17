import React from 'react';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardDetails, setDashboardDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/dashboard`);
      const data = await res.json();
      console.log(data);
      setDashboardDetails(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Dashboard</h1>
      <h1>Posts--{dashboardDetails.posts}</h1>
      <h1>Followers--{dashboardDetails.followers}</h1>
      <h1>Following--{dashboardDetails.following}</h1>
    </>
  );
};
export default Dashboard;
