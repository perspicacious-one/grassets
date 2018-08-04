import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Paper from '@material-ui/core/Paper';

const styles = {
  group: {
    padding: '12px',
    margin: '10px',
    backgroundColor: '#EEEEEE',
    borderRadius: '4px',
  },
  field: {
    padding: '12px',
    margin: '10px',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    backgroundColor: '#FAFAFA',
  },
};

export default class ChipContainer extends React.Component {
  render() {
    return (
      <Grid item xs={12} style={styles.group}>
        <Typography varient="subtitle" gutterBottom>
          {this.props.title}
        </Typography>
        <Paper elevation={0} style={styles.field}>
          {this.props.children}
        </Paper>
      </Grid>
    );
  }
}
