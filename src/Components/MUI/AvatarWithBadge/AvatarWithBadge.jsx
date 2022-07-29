import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Badge } from '@mui/material';
import { avatarWithBadgeStyles } from './avatarWithBadgeStyles';

import { collectJsonValues } from '../../../helpers/collectJsonValues';

import styled from 'styled-components';

const StyledBadge = styled(Badge)(avatarWithBadgeStyles);
const StyledAvatar = styled(Avatar).attrs(({ properties }) => ({
  src: properties.src,
}))`
  ${({ styles }) => styles}
`;
function AvatarWithBadge({ props }) {
  const { style, properties } = props;
  const jsonStyles = collectJsonValues(style);
  const jsonProperties = collectJsonValues(properties);

  return (
    <div>
      {Boolean(jsonProperties.isbadge) && (
        <StyledBadge overlap='circular' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} variant='dot'>
          <StyledAvatar properties={jsonProperties} styles={jsonStyles} />
        </StyledBadge>
      )}
      {!jsonProperties.isbadge && <StyledAvatar properties={jsonProperties} styles={jsonStyles} />}
    </div>
  );
}

AvatarWithBadge.propTypes = {
  props: PropTypes.object.isRequired,
  style: PropTypes.array,
  properties: PropTypes.array,
};

export default AvatarWithBadge;
