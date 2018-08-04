import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHeader from "./TableHeader";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CustomTableRow from "./TableRow";
import AddIcon from "@material-ui/icons/Add";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import DataMap from "../common/Mapping";
import { DrawerContext } from "../common/Contexts";
import FormProvider from "../Forms";
import IconButton from "@material-ui/core/IconButton";
import sortBy from "lodash.sortby";

const styles = {
  paper: {
    maxWidth: 1180,
    margin: "auto",
    minHeight: "400px"
  },
  buttonLeft: {
    margin: "20px",
    position: "fixed",
    bottom: "0",
    right: "0"
  },
  buttonRight: {
    margin: "20px",
    float: "right"
  },
  drawer: {
    maxWidth: "860px",
    minWidth: "720px",
    flexShrink: "1",
    padding: "0",
    margin: "0"
  },
  drawerContent: {
    padding: "0 28px 0 28px",
    margin: "0",
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1
  }
};

class AssetTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      selection: "",
      subType: "",
      order: "asc",
      orderBy: "id"
    };
    this.typename = this.props.typename;
    this.labels = Object.keys(this.props.assets[0]).filter(
      label => !["__typename", "id"].includes(label)
    );
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleRequestSort = this.handleRequestSort.bind(this);
  }
  sortedData = () => {
    if (this.state.order === "asc") {
      return sortBy(this.props.assets, [
        o => {
          return o[this.state.orderBy];
        }
      ]);
    } else {
      return sortBy(this.props.assets, [
        o => {
          return o[this.state.orderBy];
        }
      ]).reverse();
    }
  };
  toggleDrawer = (open = false, id = null, type) => {
    this.setState({
      active: open,
      selection: id,
      subType: type
    });
    this.props.refresh();
  };
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { order, orderBy, active } = this.state;
    const data = this.sortedData();
    return (
      <React.Fragment>
        <Table>
          <TableHeader
            headings={this.labels}
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            {data.map(n => (
              <CustomTableRow
                typename={this.typename}
                key={n.id}
                entry={n}
                meta={this.labels}
                toggleMethod={this.toggleDrawer}
              />
            ))}
          </TableBody>
        </Table>
        <Drawer
          anchor="right"
          open={active}
          elevation={6}
          style={styles.drawer}
        >
          <div tabIndex={0} style={{ padding: "10px" }}>
            <IconButton
              aria-label="add"
              onClick={() => this.toggleDrawer(false, null, "")}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <DrawerContext.Provider
            value={{
              toggle: this.toggleDrawer,
              state: this.state
            }}
          >
            <FormProvider />
          </DrawerContext.Provider>
        </Drawer>
        {this.props.children}
        <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          style={styles.buttonRight}
          onClick={() => this.toggleDrawer(true, null, this.typename)}
        >
          <AddIcon />
        </Button>
      </React.Fragment>
    );
  }
}

export default AssetTable;
