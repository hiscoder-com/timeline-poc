import React from 'react';
import VerticalTimeline from '../VerticalTimeline/VerticalTimeline';
import HorizontalTimeline from '../HorizontalTimeline/HorizontalTimeline';

function Timeline({ link, type }) {
  return (
    <>
      {type === 'horizontal' ? (
        <HorizontalTimeline link={link} />
      ) : (
        <VerticalTimeline link={link} />
      )}
    </>
  );
}

export default Timeline;
