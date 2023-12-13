// src/components/About.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const eventsData = [
  {
    date: "29 Dec - 30 Dec",
    title: "Pwani Developers Festival",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente...",
    imageUrl: "/images/event1.jpg", // Replace with actual image URL
    bookLink: "https://example.com/book-event1", // Replace with actual booking link
  },
  {
    date: "2 Dec - 8 Dec",
    title: "Pwani Innovation Week",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente...",
    imageUrl: "/images/img11.jpg", // Replace with actual image URL
    bookLink: "https://example.com/book-event2", // Replace with actual booking link
  },
  {
    date: "15 Jan - 20 Jan",
    title: "Tech Expo 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente...",
    imageUrl: "/images/img4.jpg", // Replace with actual image URL
    bookLink: "https://example.com/book-event3", // Replace with actual booking link
  },
  {
    date: "5 Feb - 10 Feb",
    title: "Digital Marketing Summit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente...",
    imageUrl: "/images/img8.jpg", // Replace with actual image URL
    bookLink: "https://example.com/book-event4", // Replace with actual booking link
  },
  // Add more events as needed
];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Set the duration for each slide in milliseconds (5 seconds in this example)
  };

  return (
    <section id="about" className="page-section">
      <div className="container-fluid mt-5">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Upcoming Events</h2>
          <h3 className="section-subheading text-muted">
            Be the first to book upcoming events.
          </h3>
        </div>

        <Slider {...sliderSettings}>
          {eventsData.map((event, index) => (
            <div key={index}>
              <div
                className="slider-item"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              >
                <div className="slider-content">
                  <h2 className="event-title">{event.title}</h2>
                  <p className="event-details">{event.description}</p>
                  <Link href="/Ticketing" className=" btn-primary">
                    Book Tickets
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default About;
