import React from 'react';
import Loading from '../common/Loading';
import DataMap from '../common/DataSource';
import { GetDisplayName } from '../../utils/string';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {InactiveRelativeItem} from './ListItem';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import { Query, compose, graphql } from 'react-apollo';
import Typography from '@material-ui/core/Typography';

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
		marginBottom: '20px',
		paddingLeft: '20px',
		paddingRight: '20px',
		backgroundColor: theme.palette.tonalOffset
	}
});

class RelationList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activeRelatives: this.props.relatives
		}
		this.objName = this.props.dataSource.refName;
		this.relationName = this.props.dataSource.relativeTypes;
		this.Link = this.Link.bind(this);
		this.unLink = this.unLink.bind(this);
		this.renderRelativeChip = this.renderRelativeChip.bind(this);
	}

	// link relative and update state to trigger ui update
	Link(data, e) {
		e.preventDefault;
		const { parentId } = this.props;
		this.props.addRelative({
			variables: { parentId, childId: data.id }
		}).then(
			this.setState({
				activeRelatives: [data].concat(this.state.activeRelatives)
			})
		)
		this.props.callback(data, e)
	}
	// unlink a relative and update state to trigger ui update
	unLink(id, e) {
		e.preventDefault;
		const { parentId } = this.props;
		this.props.removeRelative({
			variables: { parentId, childId: id }
		}).then(
		this.setState({
			activeRelatives: this.state.activeRelatives.filter(employee => employee.id !== id)
			})
		)
	}
	// render the chip object for each active relative
	renderRelativeChip() {
		const { activeRelatives } = this.state

		if(!activeRelatives || !activeRelatives[0]) {return null}

		let chips = activeRelatives.filter(index => index != undefined).map(relative => {
			if(!relative.id || !relative) {console.log('Can not add invalid relative'); return null}
			return (<Chip id={relative.id} key={relative.id} label={GetDisplayName(relative)}	onDelete={(e) => this.unLink(relative.id, e) }/>)
		});
		if(!chips) {return null}

		return chips
	}
	render() {
		const { dataSource, parentId} = this.props;
		const listQuery = DataMap[(dataSource.relativeTypes)].query.allBasic
    return (
			<Query query={listQuery}>
				{({ loading, error, data, refetch }) => {
					if (loading) return ( <Loading />	);
					if (error) return `Error! ${error.message}`;
					if (data) return( 
						<React.Fragment>
							<Grid item xs={12} style={styles.linkedList}>
								{	this.renderRelativeChip() }
							</Grid>
							<Grid item xs={12}>
								<ExpansionPanel style={styles.linkedList}>
									<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
										<Typography variant='subheading'>Link New: {dataSource.relativeTypes}</Typography>
									</ExpansionPanelSummary>
									<List style={styles.queryList}>
										{( Object.values(data)[0].map(record => <InactiveRelativeItem data={record} handleLink={this.Link} /> ) ) } 			
									</List>
								</ExpansionPanel>
							</Grid>					
						</React.Fragment>
					)
				}}
			</Query>
		)
  }
}
export const HardwareRelationsList = compose(
	graphql(DataMap.hardware.mutate.removeRelative.employee, {
		name : 'removeRelative',
		refetchQueries: [DataMap.hardware.query.all]
	}),
	graphql(DataMap.hardware.mutate.addRelative.employee, {
		name : 'addRelative',
		refetchQueries: [DataMap.hardware.query.all]
	}),

)(RelationList);

export const EmployeeRelationsList = (type) => compose(
	graphql(DataMap.employee.mutate.removeRelative[type], {
		name : 'removeRelative',
		refetchQueries: [DataMap.employee.query.all]
	}),
	graphql(DataMap.employee.mutate.addRelative[type], {
		name : 'addRelative',
		refetchQueries: [DataMap.employee.query.all]
  }),
)(RelationList);

export const SaasRelationsList = compose(
	graphql(DataMap.saas.mutate.removeRelative.employee, {
		name : 'removeRelative',
		refetchQueries: [DataMap.saas.query.all]
	}),
	graphql(DataMap.saas.mutate.addRelative.employee, {
		name : 'addRelative',
		refetchQueries: [DataMap.saas.query.all]
  }),
)(RelationList);

export const SaapRelationsList = compose(
	graphql(DataMap.saap.mutate.removeRelative.employee, {
		name : 'removeRelative',
		refetchQueries: [DataMap.saap.query.all]
	}),
	graphql(DataMap.saap.mutate.addRelative.employee, {
		name : 'addRelative',
		refetchQueries: [DataMap.saap.query.all]
  }),
)(RelationList);