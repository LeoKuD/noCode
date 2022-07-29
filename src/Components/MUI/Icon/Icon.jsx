import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as Icons from '@mui/icons-material';

import { collectJsonValues } from './../../../helpers/collectJsonValues';

function Icon({ props }) {
  const [hover, setHover] = useState(false);
  const handleHoverOn = () => {
    setHover(true);
  };
  const handleHoverOff = () => {
    setHover(false);
  };
  const { properties, style } = props;
  const jsonStyles = collectJsonValues(style);
  const jsonProperties = collectJsonValues(properties);

  return (
    <>
      {React.createElement(
        jsonProperties.iconNameHover
          ? Icons[hover ? jsonProperties.iconNameHover : jsonProperties.iconName]
          : Icons[jsonProperties.iconName],
        {
          sx: {
            cursor: 'pointer',
            ...jsonStyles,
            '&.MuiSvgIcon-root:hover': {
              fill: jsonStyles.hover,
            },
          },
          onMouseEnter: handleHoverOn,
          onMouseLeave: handleHoverOff,
        },
      )}
    </>
  );
}

Icon.propTypes = {
  props: PropTypes.object,
  properties: PropTypes.array,
  style: PropTypes.array,
};

export default Icon;
