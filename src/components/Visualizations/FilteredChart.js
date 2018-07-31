import React, { Component } from "react";
import { Query } from "react-apollo";
import Grid from "@material-ui/core/Grid";
import Loading from "../common/Loading";
import SimpleBarChart from "./BarChart";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = {
  center: {
    margin: "auto",
    padding: "15px"
  },
  gridItemCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "25px",
    paddingRight: "25px"
  },
  gridItemLeft: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "20px"
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
};

export default class FilteredChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Monthly"
    };
  }
  normalizeData(data) {
    let result = Object.values(data)[0];
    return result;
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { query } = this.props;
    return (
      <Grid spacing={12} style={styles.center}>
        <Grid item xs style={styles.gridItemCenter}>
          <Typography variant="title" gutterBottom>
            {this.props.title}
          </Typography>
          <FormControl component="fieldset" required>
            <RadioGroup
              aria-label="renewal"
              name="renewalTerm"
              value={this.state.value}
              onChange={this.handleChange}
              style={styles.radioGroup}
            >
              <FormControlLabel
                value="Annually"
                control={<Radio />}
                label="Annualy"
              />
              <FormControlLabel
                value="Monthly"
                control={<Radio />}
                label="Monthly"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs style={styles.center}>
          <Divider light />
        </Grid>
        <Grid item xs style={styles.gridItemCenter}>
          <Query query={query}>
            {({ loading, error, data }) => {
              if (loading) return <Loading />;
              if (error) return `Error! ${error.message}`;
              return (
                <SimpleBarChart
                  barKey="cost"
                  xAxisKey="name"
                  data={data}
                  filter={this.state.value}
                />
              );
            }}
          </Query>
        </Grid>
      </Grid>
    );
  }
}
