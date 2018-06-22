import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

class TableHeader extends React.Component {
	formatText(val) {
		return val.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
	}
	render() {
		let reg = new RegExp(/[A-Z]/);
		return(
			<TableHead>
				<TableRow>
			{
				this.props.headings.map( label => {
					return(<TableCell className="head-cell">{this.formatText(label)}</TableCell> )
				})
			}
				</TableRow>
			</TableHead>
		)
	}
}
export default TableHeader;