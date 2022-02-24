import React from 'react';
import { log } from '../../utils';
import PropTypes from 'prop-types';
import Timeline from '../Timeline';
import { Card as CardData } from 'translation-helps-rcl';
import { Manifest } from '..';
import path from 'path';

const server = 'https://git.door43.org/';
function Card({ username, repository }) {
  const [project, setProject] = React.useState();
  const [tlLink, setTlLink] = React.useState();
  const uri = path.join(username, repository, 'raw/branch', 'master', './manifest.yaml');
  log({ uri, project });
  React.useEffect(() => {
    if (project) {
      const _tlLink = path.join(
        username,
        repository,
        'raw/branch',
        'master',
        project.path
      );
      setTlLink(_tlLink);
    }
  }, [project]);
  return (
    <>
      <CardData
        closeable={true}
        disableFilters={true}
        disableNavigation={true}
        disableSettingsButton={true}
        itemIndex={0}
        setItemIndex={0}
        markdownView={true}
        title={'Test Card Timeline'}
        hideMarkdownToggle={true}
        showSaveChangesPrompt={false}
      >
        <Manifest setProject={setProject} link={server + uri} />
        {project && (
          <Timeline
            link={
              server +
              path.join(username, repository, 'raw/branch', 'master', project.path)
            }
            type={project.categories[0]}
          />
        )}
      </CardData>
    </>
  );
}

Card.defaultProps = {
  text: 'Test',
};

Card.propTypes = {
  /** Title */
  text: PropTypes.string,
  /** Event by clicking on the Card. */
  onClick: PropTypes.func,
};

export default Card;
