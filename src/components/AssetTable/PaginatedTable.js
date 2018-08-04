import React from "react";
import { Query } from "react-apollo";
import Paper from "@material-ui/core/Paper";
import Loading from "../common/Loading";
import { QueryContext } from "../common/Contexts";
import AssetTable from "./AssetTable.js";
import Typography from "@material-ui/core/Typography";
import Pagination from "./Pagination";

const styles = {
  paper: {
    maxWidth: 1180,
    margin: "auto"
  },
  heading: {
    paddingTop: "15px",
    textAlign: "center"
  }
};
export default class PaginatedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 10,
      page: 0
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { query, name, title } = this.props;
    const { rowsPerPage, page } = this.state;
    const skip = rowsPerPage * page;
    return (
      <Paper style={styles.paper}>
        <div style={styles.heading}>
          <Typography variant="display1" gutterBottom>
            {title}
          </Typography>
        </div>
        <Query
          query={query}
          variables={{
            skip: skip,
            first: rowsPerPage
          }}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) return <Loading />;
            if (error) return `Error! ${error.message}`;
            return (
              <QueryContext.Provider
                value={{
                  refetch: () => refetch(),
                  typeName: name,
                  query: query
                }}
              >
                <AssetTable
                  assets={Object.values(data)[0]}
                  typename={name}
                  refresh={() => refetch()}
                >
                  <Pagination
                    rowsPerPage={rowsPerPage}
                    page={page}
                    typename={name}
                    handleChangePage={this.handleChangePage}
                    handleChangeRowsPerPage={this.handleChangeRowsPerPage}
                  />
                </AssetTable>
              </QueryContext.Provider>
            );
          }}
        </Query>
      </Paper>
    );
  }
}
