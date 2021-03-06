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
class HardwareFields extends React.Component {
  renderFormFields(context) {
    const {
      id,
      maker,
      model,
      drivers,
      details,
      hardwareType,
      location,
      employee,
      software,
    } = context.state;
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <TextField
            required
            id="maker"
            label="Manufacturer"
            placeholder="e.g. - Dell"
            fullWidth
            value={maker || ''}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="model"
            label="Model"
            placeholder="e.g. - Precision T7600"
            fullWidth
            value={model || ''}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="drivers"
            label="Files"
            placeholder="Link to drivers, manuals, etc..."
            fullWidth
            value={drivers || ''}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="details"
            label="Details"
            multiline
            placeholder="Additional hardware details"
            fullWidth
            value={details || ''}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            id="location"
            label="Office Location"
            fullWidth
            value={location || ''}
            onChange={event => context.onChange(event, 'location')}
          >
            <MenuItem id="Edmonds" key="Edmonds" value="Edmonds">
              Edmonds
            </MenuItem>
            <MenuItem id="Hanoi" key="Hanoi" value="Hanoi">
              Hanoi
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            id="hardwareType"
            label="Category"
            fullWidth
            value={hardwareType || ''}
            onChange={event => context.onChange(event, 'hardwareType')}
          >
            <MenuItem id="Laptop" key="Laptop" value="Laptop">
              Laptop
            </MenuItem>
            <MenuItem id="Desktop" key="Desktop" value="Desktop">
              Desktop
            </MenuItem>
            <MenuItem id="Display" key="Display" value="Display">
              Display
            </MenuItem>
            <MenuItem
              id="Accessories"
              key="Accessories"
              value="Accessories"
            >
              Accessories
            </MenuItem>
          </TextField>
        </Grid>
        {id && (
          <React.Fragment>
            <ChipContainer title="Used By">
              {Chips('employee', employee)}
            </ChipContainer>
            <ChipContainer title="Installed Software">
              {Chips('software', software)}
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

export default HardwareFields;
