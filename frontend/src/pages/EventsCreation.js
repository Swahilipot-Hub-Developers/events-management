// EventCreationForm.js
import { useState } from 'react';
import axios from 'axios';


const EventCreationForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventOrganizer, setEventOrganizer] = useState('');
  const [eventBanner, setEventBanner] = useState(null);


 const handleEventBannerUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setEventBanner(file);
    }
  };
 
  const handleSubmit =async (e) => {
    e.preventDefault();

    if (!eventName || !eventDate || !eventDescription || !eventVenue || !eventOrganizer || !eventBanner) {
      alert('Please fill in all fields and upload an event banner.');
      return;
    }

  // Prepare form data
  const formData = new FormData();
  formData.append('name', eventName);
  formData.append('date', eventDate);
  formData.append('description', eventDescription);
  formData.append('venue', eventVenue);
  formData.append('organizer', eventOrganizer);
  formData.append('banner', eventBanner);

  try {
    // Make a POST request to create an event
    const response = await axios.post('http://localhost:8000/api/create-event/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Event created successfully:', response.data);
    // Handle success or navigate to another page
  } catch (error) {
    console.error('Error creating event:', error);
    // Handle error
  }
};
     return (
    <div className="background-container">
      <div className="content-container">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="mb-3 text-primary">
            <label htmlFor="eventName" className="form-label">
              Event Name
            </label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div className="mb-3 text-primary">
            <label htmlFor="eventDate" className="form-label">
              Event Date
            </label>
            <input
              type="Date"
              className="form-control"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
    
          <div className="mb-3 text-primary">
            <label htmlFor="eventDescription" className="form-label">
              Event Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>
  
          <div className="mb-3 text-primary">
            <label htmlFor="eventName" className="form-label">
              Event Venue
            </label>
            <input
              type="text"
              className="form-control"
              id="eventVenue"
              value={eventVenue}
              onChange={(e) => setEventVenue(e.target.value)}
            />
          </div>
       
          <div className="mb-3 text-primary">
            <label htmlFor="eventName" className="form-label">
              Event Organizer
            </label>
            <input
              type="text"
              className="form-control"
              id="eventOrganizer"
              value={eventOrganizer}
              onChange={(e) => setEventOrganizer(e.target.value)}
            />
          </div>
             {/* Event Banner Input */}
    {/* Event Banner Input */}
    <div className="mb-3 text-primary">
            <label htmlFor="eventBanner" className="form-label">
              Event Banner
            </label>
            <div className="input-group">
              <input
                type="file"
                accept="image/*"
                className="form-control"
                id="eventBanner"
                onChange={handleEventBannerUpload}
              />
            </div>
      {eventBanner && <p className="mt-2">Selected: {eventBanner.name}</p>}
          </div>

          {/* Loading State */}
          

          {/* ... (other form elements) */}

          {/* ... (other form elements) */}

          <button type="submit" className="btn btn-primary">
            Create Event
          </button>
    </form>
  </div>
 </div>
  );
};

   

export default EventCreationForm;
