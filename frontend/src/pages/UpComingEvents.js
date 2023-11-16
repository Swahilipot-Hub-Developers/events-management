import Link from 'next/link';
import eventsData from './eventsData';
import Event1Details from './eventsdetails/events/1';


// Dummy data for events

const EventsPage = () => {
    
  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="events-container">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <Link href={`/events/${event.id}`}>
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
