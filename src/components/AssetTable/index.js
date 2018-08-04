import React from 'react';
import AssetTable from './AssetTable.js';
import DataMap from '../common/Mapping';
import Loading from '../common/Loading';
import { QueryContext } from '../common/Contexts';
import PaginatedTable from './PaginatedTable';

export function HardwareTable(props) {
  return (
    <PaginatedTable
      query={DataMap.hardware.query.allBasicPage}
      name="hardware"
      title="Hardware"
    />
  );
}

export function SaaSTable(props) {
  return (
    <PaginatedTable
      query={DataMap.saas.query.allBasicPage}
      name="saas"
      title="Subscriptions"
    />
  );
}

export function SaaPTable(props) {
  return (
    <PaginatedTable
      query={DataMap.saap.query.allBasicPage}
      name="saap"
      title="Desktop Software"
    />
  );
}
export function EmployeeTable(props) {
  return (
    <PaginatedTable
      query={DataMap.employee.query.allBasicPage}
      name="employee"
      title="Employees"
    />
  );
}
