import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await axios.get("https://api.freeapi.app/api/v1/public/randomusers?page=" + page);

      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="text-xl font-bold text-green-400">Random Users App</div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 flex-wrap mb-6">
          <button
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-green-600 transition disabled:opacity-40"
            disabled={!users?.previousPage || loading}
            onClick={() => setPage(prev => prev - 1)}
          >
            Prev
          </button>

          <span className="text-lg font-semibold">Page {users?.page}</span>

          <button
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-green-600 transition disabled:opacity-40"
            disabled={!users?.nextPage || loading}
            onClick={() => setPage(prev => prev + 1)}
          >
            Next
          </button>
        </div>

        {/* Users cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users?.data?.map(user => (
            <div
              key={user.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <img src={user.picture.large} alt={user.name.first} className="w-full h-52 object-cover" />

              {/* Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {user.name.title} {user.name.first} {user.name.last}
                </h2>

                <p className="text-sm text-gray-400 mt-1">📧 {user.email}</p>

                <p className="text-sm text-gray-400 mt-1">🌍 {user.location.country}</p>

                <p className="text-sm text-gray-400 mt-1">📞 {user.phone}</p>

                <p className="text-xs text-gray-500 mt-2">Age: {user.dob.age}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loader */}
        {loading && <p className="text-center mt-6 text-gray-400">Loading users...</p>}
      </div>
    </div>
  );
}

export default App;
