import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';

import { sourses } from './JSONList';

function Root({ setComponent }) {
  const [current, setCurrent] = useState('');

  const clickButton = (component) => {
    setComponent(component);
    setCurrent(component.obj.components[0].obj.type);
  };

  return (
    <>
      {sourses.map((component, index) => {
        return (
          <Button
            key={index}
            variant={current === component.obj.components[0].obj.type ? 'contained' : 'text'}
            onClick={() => {
              clickButton(component);
            }}
          >
            {component.obj.components[0].obj.type}
          </Button>
        );
      })}
    </>
  );
}

Root.propTypes = {
  setComponent: PropTypes.func,
};

export default Root;
