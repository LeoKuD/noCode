import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Link } from '@mui/material';
import { collectJsonValues } from './../../../helpers/collectJsonValues';

import classes from './LinkTextCustom.module.css';

const StyledLink = styled(Link).attrs((props) => props.properties)`
  ${(props) => props.styles}
`;
function LinkTextCustom({ props, children }) {
  const { properties, style } = props;
  const jsonStyles = collectJsonValues(style);
  const jsonProperties = collectJsonValues(properties);
  const { lefticon, righticon, label } = jsonProperties;

  return (
    <div className={classes.wrapper}>
      {lefticon && children[0]}
      <StyledLink properties={jsonProperties} styles={jsonStyles}>
        {label}
      </StyledLink>
      {righticon && children[1]}
    </div>
  );
}

LinkTextCustom.propTypes = {
  props: PropTypes.object.isRequired,
  globalId: PropTypes.number.isRequired,
  style: PropTypes.array,
  label: PropTypes.string,
  properties: PropTypes.array,
  children: PropTypes.array,
};

export default LinkTextCustom;
