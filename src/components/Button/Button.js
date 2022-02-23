import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { Timeline } from '@knight-lab/timelinejs';
// import '@knight-lab/timelinejs/dist/css/timeline.css';
import { log } from '../../utils';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useRemark } from 'react-remark';
import showdown from 'showdown';

const options = {
  // height: '1000px',
  // width: '1000px',
  // default_bg_color: 'white',
  // scale_factor: 2,
  // initial_zoom: 5,
  // timenav_position: 'bottom', //'top'
};

function Button({ text, onClick }) {
  log('test');
  const [events, setEvents] = React.useState([]);
  const [reactContent, setMarkdownSource] = useRemark();

  const timelineEl = React.useRef(null);
  React.useEffect(() => {
    axios
      .get('https://git.door43.org/BSA/ru_timeline/raw/branch/master/kings.tsv')
      .then((axiosRes) => {
        const data = axiosRes.data;
        const dataList = data
          .split('\n')
          .map((el) => el.split('\t'))
          .slice(1);
        const _events = [];
        dataList.forEach((element) => {
          const [startYear, startMonth, startDay] = element[1].split('.');
          let start_date;
          if (startYear) {
            start_date = {
              year: startYear,
              month: startMonth ?? '1',
              day: startDay ?? '1',
            };
          }
          const [endYear, endMonth, endDay] = element[2].split('.');
          const converter = new showdown.Converter();
          _events.push({
            start_date,
            end_date: {
              year: endYear,
              month: endMonth ?? '1',
              day: endDay ?? '1',
            },
            text: {
              headline: element[3],
              text: converter.makeHtml(element[4].replaceAll('\\n', '\n')),
            },
          });
        });
        setEvents(_events);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    if (timelineEl.current) {
      new Timeline(timelineEl.current, { events, options });
    }
  }, [timelineEl.current]);

  return (
    <>
      <div style={{ height: '600px' }} ref={timelineEl}></div>
    </>
  );
}

Button.defaultProps = {
  text: 'Test',
};

Button.propTypes = {
  /** Title */
  text: PropTypes.string,
  /** Event by clicking on the button. */
  onClick: PropTypes.func,
};

export default Button;
