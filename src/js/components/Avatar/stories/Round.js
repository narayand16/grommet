import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar, Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const Round = () => {
  const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';
  return (
    <Grommet theme={grommet}>
      <Box direction="row" alignContent="center" gap="small" pad="large">
        <Avatar src={src} round={false} />
        <Avatar src={src} round="xsmall" />
        <Avatar src={src} round="small" />
        <Avatar src={src} round="medium" />
        <Avatar src={src} round="large" />
        <Avatar src={src} />
      </Box>
    </Grommet>
  );
};

storiesOf('Avatar', module).add('Round', () => <Round />);
