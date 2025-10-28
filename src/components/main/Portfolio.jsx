import React from 'react';
import ImageSlider from '../sub/ImageSlider.jsx';

const Portfolio = () => {
  const projects = [
    {
      Name: "Streamify-Chat",
      URLs: [
        "Projects Streamify-Chat IMG_0591.PNG",
        "Projects Streamify-Chat IMG_0592.PNG",
        "Projects Streamify-Chat IMG_0594.PNG",
        "Projects Streamify-Chat IMG_0596.PNG",
        "Projects Streamify-Chat IMG_0597.PNG",
        "Projects Streamify-Chat IMG_0598.PNG",
        "Projects Streamify-Chat IMG_0599.PNG"
      ],
      Description:
        "Developed a chatting platform with video call features, using GetStream supports for handling calls and messages. User details and everything are stored in the backend using MongoDB and Node.js."
    },
    {
      Name: "Netflix-Clone",
      URLs: [
        "Projects Netflix-Clone IMG_0600.PNG",
        "Projects Netflix-Clone IMG_0601.PNG",
        "Projects Netflix-Clone IMG_0602.PNG",
        "Projects Netflix-Clone IMG_0603.PNG",
        "Projects Netflix-Clone IMG_0604.PNG",
        "Projects Netflix-Clone IMG_0606.PNG",
        "Projects Netflix-Clone IMG_0607.PNG",
        "Projects Netflix-Clone IMG_0608.PNG",
        "Projects Netflix-Clone IMG_0609.PNG",
        "Projects Netflix-Clone IMG_0610.PNG",
        "Projects Netflix-Clone IMG_0611.PNG",
        "Projects Netflix-Clone IMG_0612.PNG"
      ],
      Description:
        "Developed a Netflix clone using ReactJS for frontend with TMDB API for fetching movie data, and built APIs with MongoDB for storing user data. Implemented features like user authentication, movie search, search history and responsive design."
    },
    {
      Name: "E-Commerce",
      URLs: [
        "Projects E-Commerce IMG_0615.PNG",
        "Projects E-Commerce IMG_0616.PNG",
        "Projects E-Commerce IMG_0618.PNG",
        "Projects E-Commerce IMG_0619.PNG",
        "Projects E-Commerce IMG_0620.PNG",
        "Projects E-Commerce IMG_0621.PNG",
        "Projects E-Commerce IMG_0622.PNG",
        "Projects E-Commerce IMG_0623.PNG",
        "Projects E-Commerce IMG_0624.PNG",
        "Projects E-Commerce IMG_0625.PNG",
        "Projects E-Commerce IMG_0626.PNG",
        "Projects E-Commerce IMG_0627.PNG",
        "Projects E-Commerce IMG_0628.PNG",
        "Projects E-Commerce IMG_0629.PNG",
        "Projects E-Commerce IMG_0630.PNG"
      ],
      Description:
        "Developed a full-stack shopping cart website using React and integrating the payment gateway. User details, product details, orders and everything are stored in the backend using MongoDB and Node.js."
    }
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-10 gap-10">
      <h1 className="text-3xl font-bold text-center">My Portfolio,</h1>
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {projects.map((proj, idx) => (
          <ImageSlider key={idx} data={proj} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
