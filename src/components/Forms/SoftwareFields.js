import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DataMap from "../common/Mapping";
import { FormContext } from "../common/Contexts";
import { Chips } from "../Controls/RelativeChip";
import ChipContainer from "../Controls/ChipContainer";

export default class SoftwareFields extends React.Component {
  renderFormFields(context) {
    const {
      id,
      name,
      qty,
      maintenance,
      key,
      user,
      hardware,
      adminEmail,
      adminPassword,
      adminPortal,
      notes
    } = context.state;

    return (
      <React.Fragment>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            label="Product"
            fullWidth
            value={name || ""}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="qty"
            fullWidth
            type="number"
            label="Quantity"
            value={qty || ""}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="key"
            label="Key"
            fullWidth
            value={key || ""}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="adminEmail"
            label="Admin Email"
            fullWidth
            value={adminEmail || ""}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="adminPassword"
            label="Admin Password"
            fullWidth
            type="password"
            value={adminPassword || ""}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="adminPortal"
            label="Portal Url"
            fullWidth
            value={adminPortal || ""}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="notes"
            label="Notes"
            multiline
            placeholder="Additional information"
            fullWidth
            value={notes || ""}
            onChange={event => context.onChange(event)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                id="maintenance"
                checked={maintenance}
                onChange={event => context.onChange(event)}
                value={maintenance || false}
                color="primary"
              />
            }
            label="Maintenance"
          />
        </Grid>
        {id && (
          <React.Fragment>
            <ChipContainer title="Used By">{Chips("user", user)}</ChipContainer>
            <ChipContainer title="Installed On">
              {Chips("hardware", hardware)}
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
