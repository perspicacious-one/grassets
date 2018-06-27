import React from 'react';
import { GetDisplayName } from '../../utils/StringUtil';
import Loading from '../common/Loading';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { DeleteButton, AddButton } from './BaseControls';
import RelationActionButton from './RelationButton';
import { Query } from 'react-apollo'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class RelationList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			relationList: []
		}
	}
	componentDidMount() {
		this.setState({
			relationList: this.props.relatives
		})
	}
	renderListItem(record) {
		const { dataSource, id } = this.props;
		if(this.state.relationList.includes(record)) {
			return(
				<ListItem 
					key={record.id}
					role={undefined}
					dense
					button
				>
					<ListItemText primary={GetDisplayName(record)} />
					<ListItemSecondaryAction>
						{
							RelationActionButton(DeleteButton)({
							mutation: dataSource.mutate.removeRelative[0],
							parentId: id,
							childId: record.id,
						})
						}
					</ListItemSecondaryAction>
				</ListItem>
			)
		}
		if(!this.state.relationList.includes(record)) {
			return(
				<ListItem 
					key={record.id}
					role={undefined}
					dense
					button
				>
					<ListItemText primary={GetDisplayName(record)} />
					<ListItemSecondaryAction>
						{
							RelationActionButton(AddButton)({
							mutation: dataSource.mutate.addRelative[0],
							parentId: id,
							childId: record.id,
						})
						}
					</ListItemSecondaryAction>
				</ListItem>
			)
		}
	}
	render() {
		const { dataSource, id} = this.props
    return (
			<List subheader={<ListSubheader component="div">Related List</ListSubheader>}>
      <Query 
				query={dataSource.query.allBasic} 
				variables={{ id }}
				notifyOnNetworkStatusChange>
						{({ loading, error, data, refetch }) => {

						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						if (data ) return(
								data[dataSource.relativeTypes].map(record => this.renderListItem(record))
						)	
					}	
				}
			</Query>
			</List>

		)}
  }


export default withStyles(styles)(RelationList);