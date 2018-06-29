import React from 'react';
import Loading from '../common/Loading';
import DataMap from '../common/DataSource';
import { GetDisplayName } from '../../utils/string';
import { normalizeResult, getRelationKey } from '../../utils/traverse';
import {InactiveRelativeItem} from './ListItem';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import { Query, compose, graphql } from 'react-apollo';

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
			activeRelatives: this.props.relatives
		}
		this.objName = this.props.dataSource.refName;
		this.relationName = this.props.dataSource.relativeTypes;
		this.Link = this.Link.bind(this);
		this.unLink = this.unLink.bind(this);
	}


	Link(data, e) {
		const { parentId } = this.props;
		this.props.addRelative({
			variables: { parentId, childId: data.id }
		}).then(
			this.setState({
				activeRelatives: this.state.activeRelatives.splice(0, data)
			})
		)
		this.props.callback
	}
	unLink(e) {
		e.preventDefault();
		const { parentId } = this.props;
		this.props.removeRelative({
			variables: { parentId, childId: e.target.id }
		}).then(
		this.setState({
			activeRelatives: this.state.activeRelatives.filter(employee => employee.id !== e.target.id)
			})
		)
		this.props.callback
	}

	render() {
		const { dataSource, parentId} = this.props;
		const { activeRelatives } = this.state
		const listQuery = DataMap[(dataSource.relativeTypes)].query.allBasic
    return (
			<Query query={listQuery}>
				{({ loading, error, data, refetch }) => {
					if (loading) return ( <Loading />	);
					if (error) return `Error! ${error.message}`;
					if (data) return( 
						<React.Fragment>
						{
							!activeRelatives[0] ? null : (
							activeRelatives.map(relative => (<Chip id={relative.id} key={relative.id} label={GetDisplayName(relative)}	onDelete={(e) => this.unLink(e) }/>))
							)
						}					
						<List style={styles.queryList}>
							{( Object.values(data)[0].map(record => <InactiveRelativeItem data={record} handleLink={this.Link} /> ) ) } 			
						</List>
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

export const EmployeeRelationsList = (props) => compose(
	graphql(DataMap.employee.mutate.removeRelative[props.relation], {
		name : 'removeRelative',
		refetchQueries: [DataMap.employee.query.all]
	}),
	graphql(DataMap.employee.mutate.addRelative[props.relation], {
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