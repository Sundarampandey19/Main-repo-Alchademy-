import React from 'react';

const VimeoEmbed = () => {
  return (
    <div className='w-1/2 m-auto'>
    <div style={{ padding: '55.99% 0 0 0', position: 'relative' }}>
      <iframe
        src="https://player.vimeo.com/video/922584351?badge=0&autopause=0&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        title="Video_1"
      />
    </div>

    <div>
        <h1 className='m-auto mt-4'>Lecture-1</h1>
        <p>Intro to Matter and Surroundings</p>
    </div>
    </div>
  );
};

export default VimeoEmbed;
