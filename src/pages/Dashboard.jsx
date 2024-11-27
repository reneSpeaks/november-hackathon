import { FaTasks } from "react-icons/fa"
import { RiTeamFill } from "react-icons/ri"
import { IoMdSettings } from "react-icons/io"
import { GrProjects } from "react-icons/gr"
import { CgProfile } from "react-icons/cg"
import { IoInformationCircleOutline, IoLogOutOutline } from "react-icons/io5"

const data = [
  {
    activity_id: "57699b72-c16c-4c7a-a1bd-1fbb9d26c441",
    id: "3f2996ad-ad6b-460e-837c-190f52a9c909",
    user_id: "d0a45ea8-15eb-42b5-9215-9415eebc59b7",
    user_name: "John Doe",
    photo_profile:
      "https://picsum.photos/seed/d0a45ea8-15eb-42b5-9215-9415eebc59b7/100",
    activity: {
      name: "Turn on lights in unused rooms",
      points: -10,
      progress: 20,
      id: "57699b72-c16c-4c7a-a1bd-1fbb9d26c441",
    },
  },
  {
    activity_id: "ea672b1a-7c12-43e4-83c4-4f6cf8f36a6c",
    id: "247bdee2-769d-47a9-8c7e-c80d6eed39ee",
    user_id: "d0a45ea8-15eb-42b5-9215-9415eebc59b7",
    user_name: "Johnny Bravo",
    photo_profile:
      "https://picsum.photos/seed/d0a45ea8-15eb-42b5-9215-9415eebc59b7/100?random=2",
    activity: {
      name: "Turn off lights in unused rooms",
      points: 1000,
      progress: 50,
      id: "ea672b1a-7c12-43e4-83c4-4f6cf8f36a6c",
    },
  },
  {
    activity_id: "12345abc-c16c-4c7a-a1bd-1fbb9d26abcd",
    id: "56789def-ad6b-460e-837c-190f52a9efgh",
    user_id: "b1b25ea8-20cd-11eb-9215-9467eebc1234",
    user_name: "Jane Smith",
    photo_profile:
      "https://picsum.photos/seed/b1b25ea8-20cd-11eb-9215-9467eebc1234/100",
    activity: {
      name: "Recycle paper waste",
      points: 50,
      progress: 90,
      id: "12345abc-c16c-4c7a-a1bd-1fbb9d26abcd",
    },
  },
]

const Dashboard = () => {
  return (
    <section
      id="hero"
      className="w-full h-full bg-base-200 min-h-screen px-4"
      style={{ backgroundImage: "url(https://picsum.photos/1280/900)" }}
    >
      <div className="container p-10 h-screen mt-7 flex gap-5">
        <div className="lefside w-[25%] bg-white opacity-85 border rounded-xl shadow-lg mr-8 p-4 flex flex-col gap-5 place-items-center place-content-between">
          <div>
            <h1>LOGO</h1>
          </div>
          <div className="flex flex-col justify-between items-center gap-5">
            <a className="flex justify-center items-center gap-3" href="#">
              <GrProjects />
              Projects
            </a>

            <a className="flex justify-center items-center gap-3" href="#">
              <FaTasks />
              Tasks
            </a>

            <a className="flex justify-center items-center gap-3" href="#">
              <RiTeamFill />
              Team
            </a>
            <a className="flex justify-center items-center gap-3" href="#">
              <IoMdSettings />
              Settings
            </a>
          </div>
          <div>
            <div className="flex justify-center items-center gap-3 text-sm">
              <IoInformationCircleOutline />
              Help & Information
            </div>
            <div className="flex justify-center items-center gap-3 text-sm">
              <IoLogOutOutline />
              Log out
            </div>
          </div>
        </div>
        <div className="rightside w-[75%] bg-white opacity-95 border rounded-xl shadow-lg p-4 flex flex-col gap-6">
          <div className="bg-gray-200 rounded-lg p-3 flex justify-between">
            <div className="w-[50%] flex gap-5 items-center">
              <div className="text-3xl">
                <CgProfile />
              </div>
              <div>
                <div className="font-semibold">Name</div>
                <div className="text-sm">Occupation</div>
              </div>
            </div>
            <div className="w-[50%] place-content-center">
              <input
                className="rounded-2xl w-80 p-2 outline-none"
                type="search"
                name=""
                id=""
                placeholder="Search"
              />
            </div>
          </div>
          <div className="bottom h-screen flex gap-10">
            <div className=" w-[30%] p-3 flex justify-center items-end">
              <iframe
                src="https://copilotstudio.microsoft.com/environments/Default-0c758bb3-2645-4674-badb-e7e0f5c2b86d/bots/Default_ecoOfficeGuide/webchat?__version__=2"
                frameborder="0"
                className="h-full w-full rounded-lg shadow-xl"
              ></iframe>
            </div>
            <div className="flex flex-col gap-10 w-[70%]">
              <div className="bg-gray-200 rounded-lg p-3">
                <h1>User Progress</h1>
              </div>
              <div className="bg-gray-200 rounded-lg p-3">
                <h1>Activities</h1>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2  bg-gray-200 rounded-lg">
                {data.map((data) => (
                  <div className="flex gap-5 m-3 p-4" id={data.user_id}>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <img
                        className="rounded-full"
                        src={data.photo_profile}
                        alt={data.user_name}
                      />
                      <p className="text-sm">{data.user_name}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p>
                        Points: <b>{data.activity.points}</b>
                      </p>
                      <p>Activity: {data.activity.name}</p>
                      <progress
                        className="progress progress-success w-45"
                        value={data.activity.progress}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
