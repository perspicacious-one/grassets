import React from 'react';
import { Query } from 'react-apollo';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DataMap from '../common/Mapping';

export default class Pagination extends React.Component {
  render() {
    const { typename, rowsPerPage, page } = this.props;

    return (
      <React.Fragment>
        <TableFooter>
          <TableRow>
            {typename && (
              <Query query={DataMap[typename].query.meta} pollInterval={10000}>
                {({ loading, error, data }) => {
                  if (loading) {
                    return null;
                  }
                  if (error) {
                    return null;
                  }
                  if (data) {
                    return (
                      <TablePagination
                        colSpan={3}
                        count={Object.values(data)[0].count || 25}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{
                          'aria-label': 'Previous Page',
                        }}
                        nextIconButtonProps={{
                          'aria-label': 'Next Page',
                        }}
                        onChangePage={this.props.handleChangePage}
                        onChangeRowsPerPage={this.props.handleChangeRowsPerPage}
                      />
                    );
                  }
                }}
              </Query>
            )}
          </TableRow>
        </TableFooter>
      </React.Fragment>
    );
  }
}
