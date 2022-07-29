import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';
import { collectJsonValues } from './../../../helpers/collectJsonValues';
import styled from 'styled-components';

const TagMui = styled(Chip).attrs((props) => props.properties)`
  ${(props) => props.styles}
`;
const Close = styled(CloseIcon)({
  '&.MuiSvgIcon-root': {
    width: '18px',
  },
});
function TagCustom({ props }) {
  const [hover, setHover] = useState(false);
  const { properties, style } = props;
  const jsonStyles = collectJsonValues(style);
  const jsonProperties = collectJsonValues(properties);

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const handleClick = () => {
    console.info('You clicked the Tag.');
  };

  const handleHoverOn = () => {
    setHover(true);
  };
  const handleHoverOff = () => {
    setHover(false);
  };

  return (
    <>
      <TagMui
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        onClick={handleClick}
        onDelete={handleDelete}
        properties={jsonProperties}
        styles={jsonStyles}
        deleteIcon={
          <Close
            sx={
              hover
                ? { fill: jsonProperties.iconhover }
                : jsonProperties.isrightccon
                ? { fill: jsonStyles.color }
                : { fill: jsonStyles.color, opacity: 0 }
            }
          />
        }
      />
    </>
  );
}

TagCustom.propTypes = {
  props: PropTypes.object.isRequired,
  globalId: PropTypes.number.isRequired,
  style: PropTypes.array,
  properties: PropTypes.array,
};

export default TagCustom;
