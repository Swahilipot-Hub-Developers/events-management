// EventCreationForm.js
import { useState } from 'react';

const EventCreationForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventOrganizer, setEventOrganizer] = useState('');
  const [bannerPreview, setBannerPreview] = useState('');

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleEventVenueChange = (e) => {
    setEventVenue(e.target.value);
  };

  const handleEventOrganizerChange = (e) => {
    setEventOrganizer(e.target.value);
  };
  const handleBannerUpload = (e) => {
    const file =e.target.filest[0];
    if(file) {
        const reader =new FileReader();
        reader.onload =() =>{
            setBannerPreview(reader.result);
        };
        reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions on form submission (e.g., API call, data handling)
    console.log('Event Name:', eventName);
    console.log('Event Date:', eventDate);
    console.log('Event Description:', eventDescription);
    console.log('Event Venue:', eventVenue);
    console.log('Event Organizer:', eventOrganizer);
    // Reset form fields if needed
    setEventName('');
    setEventDate('');
    setEventDescription('');
    setEventVenue('');
    setEventOrganizer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 text-primary">
        <label htmlFor="eventName" className="form-label">
          Event Name
        </label>
        <input
          type="text"
          className="form-control"
          id="eventName"
          value={eventName}
          onChange={handleEventNameChange}
        />
      </div>
      <div className="mb-3 text-primary">
        <label htmlFor="eventDate" className="form-label">
          Event Date
        </label>
        <input
          type="date"
          className="form-control"
          id="eventDate"
          value={eventDate}
          onChange={handleEventDateChange}
        />
      </div>
     
      <div className="mb-3 text-primary">
        <label htmlFor="eventVenue" className="form-label">
          Event Venue
        </label>
        <input
          type="text"
          className="form-control"
          id="eventVenue"
          value={eventVenue}
          onChange={handleEventVenueChange}
        />
      </div>
      <div className="mb-3 text-primary">
        <label htmlFor="eventOrganizer" className="form-label">
          Event Organizer
        </label>
        <input
          type="text"
          className="form-control"
          id="eventOrganizer"
          value={eventOrganizer}
          onChange={handleEventOrganizerChange}
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
          rows="3"
          value={eventDescription}
          onChange={handleEventDescriptionChange}
        />
      </div>
      
      {bannerPreview && (
        <div style={{marginTop: '20px'}}>
        <h2>Banner setBannerPreview</h2>
        <img src={bannerPreview} alt='Banner Preview' style={{maxWidtth: '30px'}}/>
        
    </div>
    )}
    
      <button type="submit" className="btn btn-primary">
        Create Event
      </button>
    </form>
  );
};

export default EventCreationForm;
