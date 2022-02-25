import React from 'react';
import { Timeline as TimelineJs } from '@knight-lab/timelinejs';
// import '@knight-lab/timelinejs/dist/css/timeline.css';
import { log } from '../../utils';
import PropTypes from 'prop-types';
import axios from 'axios';
import showdown from 'showdown';

const options = {
  // height: '1000px',
  // width: '1000px',
  // default_bg_color: 'gray',
  // scale_factor: 2,
  // initial_zoom: 5,
  // timenav_position: 'bottom', //'top'
  use_bc: true,
  language: 'ru',
};

function HorizontalTimeline({ link }) {
  const [events, setEvents] = React.useState([]);

  const timelineEl = React.useRef(null);
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
          const converter = new showdown.Converter();
          newEvent.text = {
            headline: element[3],
            text: converter.makeHtml(element[4].replaceAll('\\n', '\n')),
          };
          _events.push(newEvent);
        });
        setEvents(_events);
      })
      .catch((err) => console.log(err));
  }, [link]);

  React.useEffect(() => {
    if (timelineEl.current) {
      new TimelineJs(timelineEl.current, { events }, options);
    }
  }, [timelineEl.current, events]);

  return (
    <>
      <div style={{ height: '600px' }} ref={timelineEl}></div>
    </>
  );
}

HorizontalTimeline.defaultProps = {
  text: 'Test',
};

HorizontalTimeline.propTypes = {
  /** Title */
  text: PropTypes.string,
  /** Event by clicking on the Timeline. */
  onClick: PropTypes.func,
};

export default HorizontalTimeline;
