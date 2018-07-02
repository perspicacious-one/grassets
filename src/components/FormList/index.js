import RelationList from '../Controls/RelationList';
import { compose, graphql } from 'react-apollo';
import DataMap from '../common/Mapping';

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