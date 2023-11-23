// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import eventsData from '..//components/eventsData';

const Home = () => {
  const featuredEvents = [
    {
      id: 'event1',
      title: 'Summer Music Festival',
      date: 'June 15, 2023',
      venue: 'City Hall',
      image: '/event1.jpg',
    },
    // Add more featured events as needed
  ];

  const testimonials = [
    {
      id: 'testimonial1',
      author: 'John Doe',
      text: 'Attending events through this platform has been a great experience. Highly recommended!',
    },
    // Add more testimonials as needed
  ];

  const upcomingEvents = [
    {
      id: 'event2',
      title: 'Tech Conference 2023',
      date: 'July 5-7, 2023',
      venue: 'Convention Center',
      image: '/event2.jpg',
    },
    // Add more upcoming events as needed
  ];

  return (
    <div>
      <Head>
        <title>Event Management System</title>
        {/* Add meta tags, stylesheets, or other head elements as needed */}
      </Head>

      <div className="container">
        <section className="hero">
          <h1>Welcome to the Event Management System</h1>
          <p>Discover and attend the best events in town.</p>
          <Link href="/UpComingEvents">
            <div className="btn btn-primary">View All Events</div>
          </Link>
        </section>

        <section className="featured-events">
          <h2>Featured Events</h2>
          <div className="event-cards">
            {featuredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Venue: {event.venue}</p>
                <Link href={`/events/${event.id}`}>
                  <div className="btn btn-primary">Learn More</div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <h2>What People Are Saying</h2>
          <div className="testimonial-cards">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p>"{testimonial.text}"</p>
                <p className="author">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-cards">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Venue: {event.venue}</p>
                <Link href={`/events/${event.id}`}>
                  <div className="btn btn-primary">Learn More</div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

    
    </div>
  );
};

export default Home;
