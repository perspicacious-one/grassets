import React from 'react';
import Loading from '../common/Loading';
import DataMap from '../common/DataSource';
import { withStyles } from '@material-ui/core/styles';
import {InactiveRelativeItem} from './ListItem';
import List from '@material-ui/core/List';
import { AddIconButton } from './BaseControls';
import {RelationActionButton} from './RelationButton';
import { Query } from 'react-apollo';
import { WithQueryMutationChip } from '../Controls/RelationButton';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
	},
	linkedList: {
		marginTop: '20px',
		marginBottom: '10px'
	},
	linkedListRow: {
		backgroundColor: theme.palette.primary.light
	},
	queryList: {
		marginTop: '10px',
		marginBottom: '10px',
		backgroundColor: theme.palette.tonalOffset
	}
});

class RelationList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			relationList: []
		}
		this.renderListItem = this.renderListItem.bind(this);
		this.objName = this.props.dataSource.refName;
		this.relationName = this.props.dataSource.relativeTypes;
	}
	unLink() {

	}
	renderListItem(record) {
		const { dataSource, parentId } = this.props;
		let result = null;
		if(!record) {return;}
		if(this.props.relatives.includes({record}) === false) {
			const addButton = RelationActionButton(AddIconButton)({
				mutation: dataSource.mutate.addRelative.employee,
				parentId: parentId,
				childId: record.id,
				callback: this.props.callback
			})
			result = (<InactiveRelativeItem data={record} actionButton={addButton} />)
		}
		return result;
	}

	render() {
		const { dataSource, parentId} = this.props;
		const listQuery = DataMap[(dataSource.relativeTypes)].query.allBasic
    return (
					<React.Fragment>
						<WithQueryMutationChip context={dataSource.refName} mutation={dataSource.mutate.removeRelative[(this.relationName)]} id={parentId} />					
						<List style={styles.queryList}>
						{
							listQuery && (
								<Query 
									query={listQuery} 
									>
										{({ loading, error, data, refetch }) => {

										if (loading) return ( <Loading />	);
										if (error) return `Error! ${error.message}`;
										if (data ) return( Object.values(data)[0].map(record => this.renderListItem(record)) 	)	
									}	
								}
								</Query>
							)
						}
						</List>
					</React.Fragment>
			)
		}
  }


export default withStyles(styles)(RelationList);