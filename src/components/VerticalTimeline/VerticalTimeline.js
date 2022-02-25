import React, { useState } from 'react';
import { Timeline, Events, UrlButton, ImageEvent, TextEvent } from '@merc/react-timeline';
import axios from 'axios';

function VerticalTimeline({ link }) {
  const [events, setEvents] = useState([]);
  React.useEffect(() => {
    axios
      .get(link)
      .then((axiosRes) => {
        const data = axiosRes.data;
        const dataList = data
          .split('\n')
          .map((el) => el.split('\t'))
          .slice(1);
        const _events = [];
        dataList.forEach((element) => {
          let newEvent = {};
          if (element[1]) {
            const [year, month, day] = element[1].split('.');
            if (year) {
              newEvent.start_date = { year };
            }
            if (month) {
              newEvent.start_date.month = month;
            }
            if (day) {
              newEvent.start_date.day = day;
            }
          }
          if (element[2]) {
            const [year, month, day] = element[2].split('.');
            if (year) {
              newEvent.end_date = { year };
            }
            if (month) {
              newEvent.end_date.month = month;
            }
            if (day) {
              newEvent.end_date.day = day;
            }
          }
          newEvent.text = {
            headline: element[3],
            // text: element[4].replaceAll('\\n', '\n'),
          };

          _events.push(
            <TextEvent
              key={element[0]}
              date={
                element[1]
                  ? element[1] + (element[2] ? ' - ' + element[2] : '')
                  : element[3]
              }
              text={
                (element[1] ? '## ' + element[3] + '\n' : '') +
                ('' + element[4]).replaceAll('\\n', '\n')
              }
            />
          );
        });
        setEvents(_events);
      })
      .catch((err) => console.log(err));
  }, [link]);

  return (
    <Timeline opts={{ layout: 'inline-evts-inline-date' }}>
      <Events>{events}</Events>
    </Timeline>
  );
}

export default VerticalTimeline;
