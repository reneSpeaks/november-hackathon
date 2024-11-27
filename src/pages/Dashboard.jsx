const Dashboard = () => {
  return (
    <section
      id="hero"
      className="hero relative bg-base-200 min-h-screen px-4"
      style={{ backgroundImage: "url(https://picsum.photos/1280/900)" }}
    >
      <div className="container p-10 h-screen mt-7 flex gap-5">
        <div className="lefside w-[25%] bg-white opacity-85 border rounded-xl mr-8 p-4">
          <h1>SIDEBAR</h1>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="rightside w-[75%] bg-white opacity-95 border rounded-xl p-4 flex flex-col gap-6">
          <div className="top border ">
            <h1>TOP PART</h1>
          </div>
          <div className="bottom h-screen flex gap-10">
            <div className="bg-gray-200 rounded-lg w-[30%] p-3">
              <h1>CHAT</h1>
            </div>
            <div className="flex flex-col gap-10 w-[70%]">
              <div className="bg-gray-200 rounded-lg p-3">
                <h1>TEAM</h1>
              </div>
              <div className="bg-gray-200 rounded-lg p-3">
                <h1>PROJECT ONBOARDING</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
