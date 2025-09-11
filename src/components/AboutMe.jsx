import React from 'react';

// NOTE: Remember to replace the placeholder image URL with a link to your own photo.
const profileImageUrl = 'https://placehold.co/150x150/EFEFEF/333333?text=Your+Photo';

/**
 * A component that displays a professional photo and a short biography.
 */
function AboutMe() {
  return (
    <div className="about-me">
      <img
        src={profileImageUrl}
        alt="A professional headshot of Alex Doe"
        className="profile-picture"
      />
      <p>
        Hello! My name is Alex Doe, and I am a Software Development student currently
        in Trimester 7. I am passionate about creating clean and efficient user
        interfaces, and my favorite technologies to work with are React, JavaScript,
        and Node.js. After graduation, I am excited to pursue a full-stack developer
        role where I can contribute to innovative web applications. Outside of coding,
        I enjoy hiking, playing guitar, and exploring new coffee shops.
      </p>
    </div>
  );
}

export default AboutMe;
