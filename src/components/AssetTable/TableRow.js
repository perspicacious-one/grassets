import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

class CustomTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.renderCell = this.renderCell.bind(this);
    this.matchValues = this.matchValues.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  matchValues() {
    const result = this.props.meta.map((key) => {
      const match = this.props.entry[key];
      if (match === undefined) {
        return '';
      }
      return match;
    });
    return result;
  }

  toggleDrawer(active, id, type) {
    this.props.toggleMethod(active, id, type);
  }

  renderCell(val) {
    const regUrl = new RegExp(
      /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/,
    );
    const regDate = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d))/);

    switch (true) {
      case val == null:
        return <TableCell />;
      case regUrl.test(val):
        return (
          <TableCell>
            <a href={val || '#'} target="_blank">
              <OpenInNewIcon />
            </a>
          </TableCell>
        );
      case typeof val === 'object':
        return (
          <TableCell>
            {`${val.firstName} ${val.lastName}`}
          </TableCell>
        );
      case regDate.test(val):
        const date = val.match(regDate);
        return (
          <TableCell>
            {date[0]}
          </TableCell>
        );

      default:
        return (
          <TableCell>
            {val.toString()}
          </TableCell>
        );
    }
  }

  render() {
    const cells = this.matchValues();
    return (
      <TableRow
        hover
        selected
        key={this.props.entry.id}
        onClick={() => this.toggleDrawer(true, this.props.entry.id, this.props.typename)
        }
      >
        <TableCell component="th" scope="row">
          {cells[0]}
        </TableCell>
        {cells.slice(1).map(cell => this.renderCell(cell))}
      </TableRow>
    );
  }
}
export default CustomTableRow;
