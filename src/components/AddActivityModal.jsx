import { useEffect, useState } from 'react';
import axios from 'axios';
import { getLocalStorage, saveLocalStorage } from '../utils/storage.js';
import { toast } from 'react-toastify';

const AddActivityModal = () => {
  const [activites, setActivites] = useState([
    {
      id: 1,
      name: 'Turn off Lights in unused rooms.',
    },
    {
      id: 2,
      name: 'Taking your glasses off looking cool.',
    },
    {
      id: 3,
      name: 'Making a video of the contestants',
    },
  ]);
  const [selectedElement, setSelectedElement] = useState(null);

  const localStorage = getLocalStorage('userStorage');


  useEffect(() => {
    const options = {
      url: 'https://render-fastapi-bff.onrender.com/' + 'data/activity/all',
      config: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + localStorage[0].token.access_token,
        },
      },
    };

    axios.get(options.url, options.config)
    .then((response) => {
      setActivites(response.data.items);
    })
    .catch((error) => {
      toast.error('There has been an error.', error);
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();

    setSelectedElement(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(selectedElement);

    const options = {
      url: 'https://render-fastapi-bff.onrender.com/' + 'data/tracking/add',
      data: {
        activity_id: selectedElement,
      },
      config: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + localStorage[0].token.access_token,
        },
      },
    };

    axios.post(options.url, options.data, options.config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      // toast.error('There has been an error.', error);
    });
  };

  return (
    <dialog id="add-activity-modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">ACTIVITY TRACKER</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <select className="select w-full" onChange={handleChange}>
            <option disabled selected>Pick an activity to add</option>
            {activites && (activites.map((activity) => (
              <option key={activity.id} value={activity.id}>{activity.name}</option>
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
