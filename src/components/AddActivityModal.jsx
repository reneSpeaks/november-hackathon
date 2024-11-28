import { useEffect, useState } from 'react';

const AddActivityModal = () => {
  const [activites, setActivites] = useState([
    {
      id: 1,
      title: 'Turn off Lights in unused rooms.',
    },
    {
      id: 2,
      title: 'Taking your glasses off looking cool.',
    },
    {
      id: 3,
      title: 'Making a video of the contestants',
    },
  ]);


  useEffect(() => {
  }, []);

  const handleChange = () => {

  };

  return (
    <dialog id="add-activity-modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">ACTIVITY TRACKER</h3>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          <select className="select w-full">
            <option disabled selected>Pick an activity to add</option>
            {activites && (activites.map((activity) => (
              <option key={activity.id} value={activity.title}>{activity.title}</option>
            )))}
          </select>
          <button className="btn btn-primary">Submit</button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddActivityModal;
