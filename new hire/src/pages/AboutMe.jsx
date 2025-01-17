import React from 'react';

const AboutMe = () => {
  return (
    <section style={aboutMeStyle}>
      <h2>About Me</h2>
      <img src="/" alt="/" style ={imageStlye}/>
      <p>Hi, my name is Nkechi. I am an asipring web developer who likes to be challenged on new things!</p>
    </section>
  );
}

const aboutMeStyle = {
  textAlign: 'center',
  padding: '2rem',
};

const imageStyle = {
  borderRadius: '50%',
  width: '150px',
  height: '150px',
};

export default AboutMe;