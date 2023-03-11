/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "gRPC Kafka Messaging System 🎉",
    description:
      "gRPC-based messaging system built using NestJS and Apache Kafka. The project provides a simple and scalable solution for communicating between different services in a distributed system. It uses gRPC for reliable and efficient communication between services. ",
    url: "https://github.com/Tu-Code/Nestjs-Kafka",
  },
  {
    title: "P2P Paystack Wallet API",
    description:
      "The P2P wallet system is a fast, secure and easy way to make use of this web application; it enables users fund their personal accounts and transfer to other users within the system. This application utilizes the PayStack API.",
    url: "https://github.com/Tu-Code/P2P-Wallet.git ",
  },
  {
    title: " User Management CRUD API with UI",
    description:
      " User Management CRUD API with Front-end UI for easier User Experience. Tools used: MongoDB, Mongoose, Node.js, Express, Vue.js, HTML, CSS, Bootstrap.",
    url: "https://github.com/Tu-Code/User-Management ",
  },
  {
    title: "ILuvCoffee CRUD API",
    description:
      "It allows users to Create, Read, Update, and Delete (CRUD) coffee data using gRPC, a high-performance open-source RPC framework. The project aims to provide a simple and efficient solution for managing coffee data in a distributed system.",
    url: "https://github.com/Tu-Code/Iluvcoffee",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
