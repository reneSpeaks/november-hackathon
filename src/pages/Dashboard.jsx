import { FaTasks } from "react-icons/fa"
import { RiTeamFill } from "react-icons/ri"
import { IoMdSettings } from "react-icons/io"
import { GrProjects } from "react-icons/gr"
import { CgProfile } from "react-icons/cg"
import { IoInformationCircleOutline, IoLogOutOutline } from "react-icons/io5"

const Dashboard = () => {
  return (
    <section
      id="hero"
      className="hero relative bg-base-200 min-h-screen px-4"
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
          <div className="top bg-gray-200 rounded-lg p-3 flex justify-between">
            <div className="w-[50%] flex gap-5 items-center">
              <div className="text-3xl">
                <CgProfile />
              </div>
              <div>
                <h4>Name</h4>
                <h4>Occupation</h4>
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
            <div className="bg-gray-200 rounded-lg w-[30%] p-3 flex justify-center items-end">
              <iframe
                src="https://copilotstudio.microsoft.com/environments/Default-0c758bb3-2645-4674-badb-e7e0f5c2b86d/bots/Default_ecoOfficeGuide/webchat?__version__=2"
                frameborder="0"
                className="h-full w-full rounded-lg shadow-xl"
              ></iframe>
            </div>
            <div className="flex flex-col gap-10 w-[70%]">
              <div className="bg-gray-200 rounded-lg p-3">
                <h1>TEAM</h1>
              </div>
              <div className="bg-gray-200 rounded-lg p-3">
                <h1>PROJECT PROGRESS?</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
