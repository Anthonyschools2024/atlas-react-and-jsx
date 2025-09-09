import React from 'react';
import dayIcon from '../assets/day.svg';
import eveningIcon from '../assets/evening.svg';
import nightIcon from '../assets/night.svg';

function Greeting() {
  const currentHour = new Date().getHours();
  let greetingText;
  let iconSrc;

  if (currentHour >= 6 && currentHour < 12) {
    greetingText = 'Good Morning!';
    iconSrc = dayIcon;
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingText = 'Good Afternoon!';
    iconSrc = dayIcon;
  } else if (currentHour >= 17 && currentHour < 21) {
    greetingText = 'Good Evening!';
    iconSrc = eveningIcon;
  } else {
    greetingText = 'Good Night!';
    iconSrc = nightIcon;
  }

  return (
    <h1 className="greeting">
      <img src={iconSrc} alt="Time of day icon" />
      {greetingText}
    </h1>
  );
}

export default Greeting;
