import React from "react";
import MeetUpItem from "./MeetUpItem";




const MeetUpList = (props) => {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetUpList;
