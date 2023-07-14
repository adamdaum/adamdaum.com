import React from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <Grid columns={9} stackable centered>

        <Grid.Column textAlign='center'>
          <a href='https://www.linkedin.com/in/adam-daum-70673b7' target='_blank' rel='noopener noreferrer'>
            <Icon color='blue' name='linkedin' size='big' className='social-icon' />
          </a>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <a href='https://github.com/adamdaum' target='_blank' rel='noopener noreferrer'>
            <Icon color='grey' name='github' size='big' className='social-icon' />
          </a>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <a href='mailto:adam@adamdaum.com'>
            <Icon color='teal' name='mail' size='big' className='social-icon' />
          </a>
        </Grid.Column>

    </Grid>
  );
};

export default SocialIcons;