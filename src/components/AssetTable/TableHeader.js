import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import {IsNumber} from '../../utils/string';

class TableHeader extends React.Component {
	createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

	formatText(val) {
		return val.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
	}
	render() {
		let reg = new RegExp(/[A-Z]/);
		const { order, orderBy} = this.props;
		return(
			<TableHead>
				<TableRow>
			{
				this.props.headings.map( label => {
					return(
						<TableCell className="head-cell" sortDirection={orderBy === label ? order : false}>
							<Tooltip
                  title="Sort"
                  placement={'right'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === label}
                    direction={order}
                    onClick={this.createSortHandler(label)}
                  >
                    {this.formatText(label)}
                  </TableSortLabel>
                </Tooltip>
							</TableCell> 
						)
				})
			}
				</TableRow>
			</TableHead>
		)
	}
}
export default TableHeader;