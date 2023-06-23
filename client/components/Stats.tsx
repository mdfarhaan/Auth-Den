import React from 'react';

const Stats = ({ data, loading }) => {
  return (
    <>
      {data ? (
        <div className="gap-10">
          <p className="text-xl">
            Average Followers:{' '}
            <span className="font-bold text-blue-500">
              {data.averageFollowers.toFixed()}
            </span>
          </p>
          <p className="text-xl">
            Average Following:{' '}
            <span className="font-bold text-blue-500">
              {data.averageFollowing.toFixed()}
            </span>
          </p>
          <p className="text-xl">
            Average Posts:{' '}
            <span className="font-bold text-blue-500">
              {data.averagePosts.toFixed()}
            </span>
          </p>
          <h2 className="text-xl text-center font-medium mt-3">Providers</h2>
          {Object.keys(data.providers).map((item) => (
            <div key={item}>
              <p className="text-xl">
                {item.toUpperCase()}:{' '}
                <span className="font-bold text-blue-500">
                  {data.providers[item]}
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : loading ? (
        <h1>Loading..</h1>
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
};

export default Stats;
