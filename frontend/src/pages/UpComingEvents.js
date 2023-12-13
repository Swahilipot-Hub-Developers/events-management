import Link from 'next/link';
import eventsData from '../components/eventsData';

// Dummy data for events

const EventsPage = () => {
    
  return (
    <div>
      <h1>Events Venues</h1>
      <Link className="events-container " data-bs-toggle="modal" href="/portfolioModal1">
      
                  {/* <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
      */}
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
          </Link>
           </div>
          
      //   </div>
      // </div>
    
  );
};

export default EventsPage;
