import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';
import { collectJsonValues } from '../../../helpers/collectJsonValues';

const StyledLinearProgress = styled(LinearProgress).attrs((props) => props.properties)`
  ${(props) => props.styles}
`;

function ProgressBar({ props }) {
  const { properties, style } = props;
  const jsonProperties = collectJsonValues(properties);
  const jsonStyles = collectJsonValues(style);

  return (
    <>
      <StyledLinearProgress properties={jsonProperties} styles={jsonStyles} />
    </>
  );
}

ProgressBar.propTypes = {
  props: PropTypes.object.isRequired,
  properties: PropTypes.array,
  style: PropTypes.array,
};

export default ProgressBar;
