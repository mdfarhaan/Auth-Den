const Users = ({ data, loading }) => {
  const headings = {
    Avatar: 'picture',
    Name: 'name',
    Email: 'email',
    Provider: 'provider',
    Posts: 'posts',
    Followers: 'followers',
    Following: 'following',
    'Created At': 'createdAt',
  };
  return (
    <>
      {data.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-gray-200 text-center">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                {Object.keys(headings).map((item) => (
                  <th
                    key={item}
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  {Object.keys(headings).map((key) => {
                    if (key === 'Avatar') {
                      return (
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          <img
                            src={item?.picture}
                            className="h-14 w-14 rounded-full"
                          />
                        </td>
                      );
                    } else {
                      return (
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item[headings[key]] ? item[headings[key]] : '-'}
                        </td>
                      );
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : loading ? (
        <h1>Loading..</h1>
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
};

export default Users;
