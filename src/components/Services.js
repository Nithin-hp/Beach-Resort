import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "the bistro downstairs, while Ryan Casey’s elegant cocktails flow in all of the hotel’s bars,including the Living Room lobby bar.Citrus Club, the rooftop bar"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Time to lace up your hiking boots! Maybe a strenuous trek up a mighty peak is what you’re after.Get ready, adventure awaits"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Pick Up (and Drop Off) Service. A hotel employee will be there in the arrival area with your name ready to take you to the hotel. On your departure,you will be taken back to the airport and left just outside the Departure terminal buildings."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "guests can sip beer made from an ancient recipe created in 1352(!) by Augustinian monks, eat pork chops braised in homemade beer and head to the spa for a St. Thomas Beer Body Ritual."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
