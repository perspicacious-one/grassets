import React from "react";
import DeleteButton from "../Controls/DeleteButton";
import { UpdateButton, CreateButton } from "../Controls/UpdateButton";
import { DrawerContext } from "../common/Contexts";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import { FormContext } from "../common/Contexts";
import PropTypes from "prop-types";
import DrawerList from "../Drawer/DrawerList";
import Divider from "@material-ui/core/Divider";
import { IsNumber, IsDate } from "../../utils/string";
import { getFirstObjectWithId } from '../../utils/traverse';

const styles = {
  root: {
    display: "flex",
    alignItems: "space-between",
    maxWidth: "100%",
    padding: "35px"
  },
  formActions: {
    marginTop: "20px",
    paddingTop: "10px"
  },
  footer: {
    alignSelf: "flex-end",
    width: "100%",
    marginLeft: "0",
    padding: "0",
    paddingTop: "10px",
    bottom: "0",
    right: "0",
    position: "fixed"
  }
};

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUnlink = this.handleUnlink.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }
  componentDidMount() {
    if (!this.props.data) {
      return;
    }
    const entries = Object.entries(Object.values(this.props.data)[0]);
    entries.forEach(entry => {
      this.setState({
        [entry[0]]: entry[1]
      });
    });
  }

  handleUnlink(data, typeName = null, event) {
    event.preventDefault();
    if (!this.state[typeName]) {
      return null;
    }
    if (Array.isArray(this.state[typeName])) {
      const relationList = this.state[typeName].filter(
        relative => relative.id !== data.id
      );
      this.setState({
        [typeName]: relationList
      });
    } else {
      if (Object.values(this.state[typeName]).includes(data.id))
        this.setState({
          [typeName]: ""
        });
    }
  }
  handleLink(data, typeName = null, event) {
    event.preventDefault();
    if (Object.values(this.state[typeName]).includes(data.id)) {
      return;
    }
    if (Array.isArray(this.state[typeName])) {
      this.setState(prevState => ({
        [typeName]: prevState[typeName].concat(data)
      }));
    } else {
      this.setState({
        [typeName]: Array.of(data)
      });
    }
  }
  handleChange(event, altId = null) {
    event.preventDefault();
    let value = event.target.value;
    if (IsNumber(value)) {
      value = parseInt(event.target.value);
    }
    if (!altId) {
      this.setState({
        [event.target.id]: value
      });
    } else {
      this.setState({
        [altId]: value
      });
    }
  }
  shouldRenderChildren() {
    const length = Object.keys(this.state).length;
    if (length <= 1 && this.props.empty) {
      return true;
    }
    if (length <= 1) {
      return false;
    }
    if (length > 1 && !this.props.empty) {
      return true;
    }
    return true;
  }
  render() {
    const children = this.shouldRenderChildren() ? this.props.children : null;
    return (
      <FormContext.Provider
        value={{
          state: this.state,
          onChange: this.handleChange,
          unlinkAction: this.handleUnlink,
          linkAction: this.handleLink
        }}
      >
        <Grid container spacing={16} style={styles.root}>
          <Grid container spacing={24} style={styles.form}>
            {this.props.children}
          </Grid>
          <Grid container spacing={16} style={styles.formActions}>
            <Divider />
            <DrawerContext.Consumer>
              {context => (
                <React.Fragment>
                  <Grid item xs={6}>
                    {!this.state.id ? (
                      <CreateButton
                        variables={this.state}
                        callback={context.toggle}
                      />
                    ) : (
                      <UpdateButton
                        variables={this.state}
                        callback={context.toggle}
                      />
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    {this.state.id && (
                      <DeleteButton
                        id={this.state.id}
                        callback={context.toggle}
                      />
                    )}
                  </Grid>
                </React.Fragment>
              )}
            </DrawerContext.Consumer>
          </Grid>
        </Grid>
        <div style={styles.footer}>
          <DrawerList />
        </div>
      </FormContext.Provider>
    );
  }
}

FormContainer.defaultProps = {
  empty: false
};

export default FormContainer;
