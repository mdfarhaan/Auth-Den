import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Auth from './Auth';
import Users from './Users';
import Stats from './Stats';
import { getUsers, getStats } from '../services';

const Home = () => {
  const [tab, setTab] = useState(0);
  const [userData, setUserData] = useState([]);
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { source } = router.query;

  const tabItems = ['Auth', 'Users', 'Stats'];

  useEffect(() => {
    handleUsers();
    handleStats();
    setLoading(false);
  }, []);

  const handleUsers = async () => {
    const response = await getUsers();
    if (response.success) {
      setUserData(response.data.users.data);
    }
  };

  const handleStats = async () => {
    const response = await getStats();
    if (response.success) {
      setStatsData(response.data);
    }
  };

  const renderTab = () => {
    switch (tab) {
      case 0:
        return <Auth />;
      case 1:
        return <Users data={userData} loading={loading} />;
      case 2:
        return <Stats data={statsData} loading={loading} />;
      default:
        return <Auth />;
    }
  };

  return (
    <>
      <div className="flex justify-center">
        {tabItems.map((item, index) => (
          <button
            key={item}
            onClick={() => setTab(index)}
            className={`border-b font-semibold mx-5 p-4 hover:text-blue-500 ${
              tab === index ? 'text-blue-500 border-blue-500' : 'text-gray-500'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid place-content-center my-5">{renderTab()}</div>
      {source && (
        <div className="absolute m-5 top-0 left-0">
          <p className="text-lg">
            Logged in with{' '}
            <span className="text-xl font-bold uppercase text-blue-500">
              {source}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
