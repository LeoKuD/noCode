import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { collectJsonValues } from '../../../helpers/collectJsonValues';

import classes from './SubtitleWithRow.module.css';

const StyledDiv = styled.div.attrs(({ properties }) => properties)`
  ${({ styles }) => styles}
`;
function SubtitleWithRow({ props, children }) {
  const { properties, style } = props;
  const jsonStyles = collectJsonValues(style);
  const jsonProperties = collectJsonValues(properties);

  return (
    <StyledDiv styles={jsonStyles} properties={jsonProperties} className={classes.container}>
      {children}
    </StyledDiv>
  );
}

SubtitleWithRow.propTypes = {
  props: PropTypes.object.isRequired,
  properties: PropTypes.array,
  style: PropTypes.array,
  children: PropTypes.array,
};

export default SubtitleWithRow;
