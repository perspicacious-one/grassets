import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DataMap from '../common/Mapping';
import { FormContext } from '../common/Contexts';
import { Chips } from '../Controls/RelativeChip';
import ChipContainer from '../Controls/ChipContainer';

const styles = {
  group: {
    padding: '12px',
    marginLeft: '10px',
    marginRight: '10px',
    backgroundColor: '#EEEEEE',
  },
};
export default class EmployeeFields extends React.Component {
  renderFormFields(context) {
    const {
      id,
      firstName,
      lastName,
      email,
      saap,
      hardware,
      subscription,
    } = context.state;
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            label="First Name"
            value={firstName || ''}
            fullWidth
            margin="normal"
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="lastName"
            label="Last Name"
            value={lastName || ''}
            fullWidth
            margin="normal"
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email || ''}
            fullWidth
            margin="normal"
            onChange={event => context.onChange(event)}
          />
        </Grid>
        {id && (
          <React.Fragment>
            <Grid item xs={12} style={styles.group}>
              <Typography varient="subtitle" gutterBottom>
                Hardware
              </Typography>
              {Chips('hardware', hardware)}
            </Grid>
            <Grid item xs={12} style={styles.group}>
              <Typography variant="subtitle" gutterBottom>
                Software
              </Typography>
              {Chips('saap', saap)}
            </Grid>
            <ChipContainer title="Hardware Used">
              {Chips('hardware', hardware)}
            </ChipContainer>
            <ChipContainer title="Installed Software">
              {Chips('software', saap)}
            </ChipContainer>
            <ChipContainer title="Subscriptions Used">
              {Chips('subscription', subscription)}
            </ChipContainer>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

  render() {
    return (
      <FormContext.Consumer>
        {context => this.renderFormFields(context)}
      </FormContext.Consumer>
    );
  }
}
