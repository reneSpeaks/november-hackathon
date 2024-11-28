import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getLocalStorage } from '../utils/storage.js';

const Leaderboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    const localStorage = getLocalStorage('userStorage');

    const options = {
      url: 'https://render-fastapi-bff.onrender.com/' + 'data/total_score/get',
      config:{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + localStorage[0].token.access_token,
        },
      },
    }

    axios.get(options.url, options.config)
    .then((response) => {
      setEmployees(response.data.users)
    })
    .catch((error) => {
      toast.error('There has been an error!', error)
    });
  }, []);

  return (
    <section id="leaderboard" className="hero">
      <div className="hero-content text-center flex-col w-full">
        <h3 className="text-2xl font-semibold">TOP CONTRIBUTORS THIS MONTH</h3>
        <div className="max-w-screen-xl w-full bg-base-200 min-h-80 rounded-xl border-2 border-primary">
          <div className="overflow-x-auto">
            <table className="table bg-white">
              <thead>
              <tr className="hover:bg-green-200">
                <th>Name</th>
                <th className="hidden md:block">Job</th>
                <th>Total Points</th>
              </tr>
              </thead>
              <tbody>
              {employees && (employees.map((user) => (
                <tr key={user.user.id} className="hover:bg-green-200">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.user.user_avatar}
                            alt={user.user.username} />
                        </div>
                      </div>
                      <div>
                        <Link to="#" className="font-bold cursor-pointer hover:underline">{user.user.username}</Link>
                        <div className="text-sm opacity-50">{user.user.user_country}</div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:block">
                    {user.user.team_name} <br /> <span className="badge badge-primary badge-sm">{user.user.job_name}</span>
                  </td>
                  <td>{user.total_score}</td>
                </tr>
              )))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
