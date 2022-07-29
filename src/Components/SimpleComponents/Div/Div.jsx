import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { collectJsonValues } from '../../../helpers/collectJsonValues';

const StyledDiv = styled.div.attrs(({ properties }) => properties)`
  ${({ styles }) => styles}
`;
export function Div({ props, children }) {
  const { style, properties } = props;

  const jsonStyles = collectJsonValues(style);
  const jsonProperties = collectJsonValues(properties);
  const { text } = jsonProperties;

  return (
    <StyledDiv styles={jsonStyles} properties={jsonProperties}>
      {text}
      {children}
    </StyledDiv>
  );
}

Div.propTypes = {
  props: PropTypes.object,
  style: PropTypes.array,
  children: PropTypes.array,
  properties: PropTypes.object,
};
