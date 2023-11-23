// pages/events/event1.js

import eventsData from '../../../components/eventsData';// Import your events data or fetch it from an API
import EventsPage from '../../UpComingEvents';

const Event1Details = () => {
  // Find Event 1 in the eventsData array
  const event1 = eventsData.find((event) => event.id === 1); // Assuming Event 1 has an ID of 1

  if (!event1) {
    return <p>Event not found</p>;
  }

  return (
    <div>
      <h1>{event1.title}</h1>
      <img src={event1.image} alt={event1.title} />
      <p>Date: {event1.date}</p>
      <p>Location: {event1.location}</p>
      <p>Description: {event1.description}</p>
      {/* Add more event details specific to Event 1 */}
    </div>
  );
};

export default Event1Details;
