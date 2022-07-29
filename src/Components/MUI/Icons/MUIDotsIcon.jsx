import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { collectJsonValues } from 'helpers/collectJsonValues';

const StyledMUIMoreVertIcon = styled(MoreVertIcon).attrs(({ properties }) => properties)`
  ${({ styles }) => styles}
`;

export function MUIDotsIcon({ props }) {
  const { style, properties } = props;

  const jsonStyles = collectJsonValues(style);
  const jsonProperties = collectJsonValues(properties);

  return <StyledMUIMoreVertIcon styles={jsonStyles} properties={jsonProperties} />;
}

MUIDotsIcon.propTypes = {
  props: PropTypes.object,
  style: PropTypes.array,
  properties: PropTypes.object,
};
