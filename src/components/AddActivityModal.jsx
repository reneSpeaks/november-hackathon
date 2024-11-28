import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const AddActivityModal = () => {
  const [activites, setActivites] = useState([]);

  function handleActivities() {
    const options = {
      url: import.meta.env.VITE_BACKEND + '/data/activity/all',
      data: {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZW5lIiwiZXhwIjoxNzM1MzgzMTM5fQ.YCtjJkmctc0Z4B96_C8BMWLwN7YmybupybMep4krJVI',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      },
    };

    axios.get(options.url, options.data)
    .then((response) => {
      toast.success('Successfull got the activities');
      console.log(options.url)
      console.log("blub");
      console.log(response.data);
      // setActivities();
    })
    .catch((error) => {
      toast.error('Things failed, woops!!', error);
    });
  }

  useEffect(() => {
    handleActivities();
  }, []);

  const handleChange = () => {

  };

  return (
    <dialog id="add-activity-modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3><select className="select w-full max-w-xs">
        <option disabled selected>Pick an activity to add</option>
        <option>Turn off Lights in unused rooms.</option>
        <option>Taking your glasses off looking cool.</option>
        <option>Making a video of the contestants</option>
      </select>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddActivityModal;