import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { collectJsonValues } from '../../../helpers/collectJsonValues';
import VisibilityIcon from '@mui/icons-material/Visibility';

const StyledMUIVisibilityIcon = styled(VisibilityIcon).attrs(({ properties }) => properties)`
  ${({ styles }) => styles}
`;

export function MUIEyeIcon({ props }) {
  const { style, properties } = props;

  const jsonStyles = collectJsonValues(style);
  const jsonProperties = collectJsonValues(properties);

  return <StyledMUIVisibilityIcon styles={jsonStyles} properties={jsonProperties} />;
}

MUIEyeIcon.propTypes = {
  props: PropTypes.object,
  style: PropTypes.array,
  properties: PropTypes.object,
};
