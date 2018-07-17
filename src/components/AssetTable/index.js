import React from 'react';
import AssetTable from './AssetTable.js';
import DataMap from '../common/Mapping';
import Loading from '../common/Loading';
import {QueryContext} from '../common/Contexts';
import PaginatedTable from './PaginatedTable';


export function HardwareTable(props) {
		return(
			<PaginatedTable query={DataMap.hardware.query.allBasicPage} name='hardware' />
		)
};

export function SaaSTable(props) {
	return(
		<PaginatedTable query={DataMap.saas.query.allBasicPage} name='saas' />
	)
};

export function SaaPTable(props) {
	return(
		<PaginatedTable query={DataMap.saap.query.allBasicPage} name='saap' />
	)
};
export function EmployeeTable(props) {
	return(
		<PaginatedTable query={DataMap.employee.query.allBasicPage} name='employee' />
	)
};
