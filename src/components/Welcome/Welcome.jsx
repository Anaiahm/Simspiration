import React from 'react';

const Welcome = () => {
return (
<main>
<div className="video-container">
<iframe
  width="755"
  height="425"
  src="https://www.youtube.com/embed/cQ4RzUAgJoM?autoplay=1&loop=1&playlist=cQ4RzUAgJoM&controls=0&modestbranding=1&showinfo=0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
    </div>
</main>
      )
};

export default Welcome;
