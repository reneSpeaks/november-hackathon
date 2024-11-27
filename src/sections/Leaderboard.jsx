import { Link } from 'react-router-dom';

const Leaderboard = () => {

  const employees = [
    {
      user : {
        user_id: 1,
        username: "Rene",
        email: "rene@example.com",
        user_avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        user_country: "Germany",
        team_name: "Zemlak, Daniel and Leannon",
        job_name: "Desktop Support Technician",
      },
      total_points: 12345678,
    },
    {
      user: {
        user_id: 2,
        user_name: "Biernard",
        email: "biernard@example.com",
        user_avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
        user_country: "Brazil",
        team_name: "Carroll Group",
        job_name: "Tax Accountant",
      },
      total_points: 12345677,
    },
    {
      user: {
        user_id: 3,
        user_name: "Tim",
        email: "biernard@example.com",
        user_avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
        user_country: "Brazil",
        team_name: "Carroll Group",
        job_name: "Organizational Talent",
      },
      total_points: 12345676,
    },
    {
      user: {
        user_id: 4,
        user_name: "Choncha",
        user_avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
        user_country: "Thailand",
        team_name: "Wyman-Ledner",
        job_name: "Community Outreach Specialist",
      },
      total_points: 12345675,
    },
    {
      user: {
        user_id: 5,
        user_name: "Farbod",
        user_avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
        user_country: "Germany",
        team_name: "Carroll Group",
        job_name: "Office Assistant I",
      },
      total_points: 12345674,
    },
  ];

  return (
    <section id="leaderboard" className="hero">
      <div className="hero-content text-center flex-col w-full">
        <h3 className="text-2xl font-semibold">TOP CONTRIBUTORS THIS MONTH</h3>
        <div className="max-w-screen-xl w-full bg-base-200 min-h-80 rounded-xl border-2 border-primary">
          <div className="overflow-x-auto">
            <table className="table bg-white">
              {/* head */}
              <thead>
              <tr className="hover:bg-green-200">
                <th>Name</th>
                <th className="hidden md:block">Job</th>
                <th>Total Points</th>
              </tr>
              </thead>
              <tbody>
              {/* row 1 */}
              {employees && (employees.map((employee) => (
                <tr key={employee.user.user_id} className="hover:bg-green-200">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={employee.user.user_avatar}
                            alt={employee.user.username} />
                        </div>
                      </div>
                      <div>
                        <Link to="#" className="font-bold cursor-pointer hover:underline">{employee.user.username}</Link>
                        <div className="text-sm opacity-50">{employee.user.user_country}</div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:block">
                    {employee.user.team_name} <br /> <span className="badge badge-primary badge-sm">{employee.user.job_name}</span>
                  </td>
                  <td>{employee.total_points}</td>
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
