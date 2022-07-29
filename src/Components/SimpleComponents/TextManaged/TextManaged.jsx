import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { collectJsonValues } from './../../../helpers/collectJsonValues';

const TextManaged = ({ props }) => {
  const { properties, style } = props;
  const jsonStyles = collectJsonValues(style);
  const { textValue } = collectJsonValues(properties);

  return <div style={{ ...jsonStyles }}>{textValue}</div>;
};

TextManaged.propTypes = {
  children: PropTypes.array,
  properties: PropTypes.array,
  style: PropTypes.array,
  props: PropTypes.object,
};

export default TextManaged;
