import gql from 'graphql-tag';

export const ADD_SAAP = gql`
  mutation createSaaP(
    $name: String!
    $qty: Int
    $key: String
    $maintenance: Boolean
    $adminEmail: String
    $adminPassword: String
    $adminPortal: String
    $notes: String
  ) {
    createSaaP(
      name: $name
      qty: $qty
      key: $key
      maintenance: $maintenance
      adminEmail: $adminEmail
      adminPassword: $adminPassword
      adminPortal: $adminPortal
      notes: $notes
    ) {
      id
      name
      qty
      key
      maintenance
      adminEmail
      adminPassword
      adminPortal
      notes
    }
  }
`;
export const UPDATE_SAAP = gql`
  mutation updateSaaP(
    $id: ID!
    $name: String!
    $qty: Int
    $key: String
    $maintenance: Boolean
    $adminEmail: String
    $adminPassword: String
    $adminPortal: String
    $notes: String
  ) {
    updateSaaP(
      id: $id
      name: $name
      qty: $qty
      key: $key
      maintenance: $maintenance
      adminEmail: $adminEmail
      adminPassword: $adminPassword
      adminPortal: $adminPortal
      notes: $notes
    ) {
      id
      name
      qty
      key
      maintenance
      adminEmail
      adminPassword
      adminPortal
      notes
    }
  }
`;
export const DELETE_SAAP = gql`
  mutation deleteSaaP($id: ID!) {
    deleteSaaP(id: $id) {
      id
    }
  }
`;
export const ADD_SAAS = gql`
  mutation createSaaS(
    $name: String!
    $qty: Int
    $cost: Int
    $expiration: DateTime
    $renewalTerm: RenewalTerm
    $adminEmail: String
    $adminPassword: String
    $adminPortal: String
    $notes: String
  ) {
    createSaaS(
      name: $name
      qty: $qty
      cost: $cost
      expiration: $expiration
      renewalTerm: $renewalTerm
      adminEmail: $adminEmail
      adminPassword: $adminPassword
      adminPortal: $adminPortal
      notes: $notes
    ) {
      id
      name
      cost
      qty
      expiration
      renewalTerm
      adminEmail
      adminPassword
      adminPortal
      notes
    }
  }
`;
export const DELETE_SAAS = gql`
  mutation deleteSaaS($id: ID!) {
    deleteSaaS(id: $id) {
      id
    }
  }
`;
export const UPDATE_SAAS = gql`
  mutation updateSaaS(
    $id: ID!
    $name: String!
    $qty: Int
    $cost: Int
    $expiration: DateTime
    $renewalTerm: RenewalTerm
    $adminEmail: String
    $adminPassword: String
    $adminPortal: String
    $notes: String
  ) {
    updateSaaS(
      id: $id
      name: $name
      qty: $qty
      cost: $cost
      expiration: $expiration
      renewalTerm: $renewalTerm
      adminEmail: $adminEmail
      adminPassword: $adminPassword
      adminPortal: $adminPortal
      notes: $notes
    ) {
      id
      name
      cost
      qty
      expiration
      renewalTerm
      adminEmail
      adminPassword
      adminPortal
      notes
    }
  }
`;

export const ADD_HARDWARE = gql`
  mutation createEmployee(
    $drivers: String
    $hardwareType: HardwareType
    $maker: String
    $model: String
    $location: Office
    $details: String
  ) {
    createHardware(
      maker: $maker
      model: $model
      drivers: $drivers
      hardwareType: $hardwareType
      location: $location
      details: $details
    ) {
      id
      maker
      model
      drivers
      hardwareType
      location
    }
  }
`;

export const UPDATE_HARDWARE = gql`
  mutation updateHardware(
    $id: ID!
    $drivers: String
    $hardwareType: HardwareType
    $maker: String
    $model: String
    $employeeId: ID
    $location: Office
    $details: String
  ) {
    updateHardware(
      id: $id
      maker: $maker
      model: $model
      drivers: $drivers
      hardwareType: $hardwareType
      location: $location
      details: $details
      employeeId: $employeeId
    ) {
      id
      maker
      model
      drivers
      hardwareType
      location
      details
    }
  }
`;

export const DELETE_HARDWARE = gql`
  mutation deleteHardware($id: ID!) {
    deleteHardware(id: $id) {
      id
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation createEmployee(
    $firstName: String!
    $lastName: String
    $email: String
  ) {
    createEmployee(firstName: $firstName, lastName: $lastName, email: $email) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee(
    $id: ID!
    $firstName: String
    $lastName: String
    $email: String
  ) {
    updateEmployee(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;
export const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($id: ID!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`;
export const ADD_EMPLOYEE_TO_HARDWARE = gql`
  mutation addToEmployeeHardware($parentId: ID!, $childId: ID!) {
    addToEmployeeHardware(
      hardwaresHardwareId: $parentId
      employeeEmployeeId: $childId
    ) {
      employeeEmployee {
        id
        firstName
        lastName
      }
      hardwaresHardware {
        id
        maker
        model
      }
    }
  }
`;
export const REMOVE_EMPLOYEE_FROM_HARDWARE = gql`
  mutation removeFromEmployeeHardware($parentId: ID!, $childId: ID!) {
    removeFromEmployeeHardware(
      hardwaresHardwareId: $parentId
      employeeEmployeeId: $childId
    ) {
      employeeEmployee {
        id
        firstName
        lastName
      }
      hardwaresHardware {
        id
        maker
        model
      }
    }
  }
`;
export const ADD_EMPLOYEE_TO_SAAS = gql`
  mutation addToEmployeeSaasApps($parentId: ID!, $childId: ID!) {
    addToEmployeeSaasApps(
      subscriptionSaaSId: $parentId
      userEmployeeId: $childId
    ) {
      userEmployee {
        id
        firstName
        lastName
      }
      subscriptionSaaS {
        id
        name
      }
    }
  }
`;
export const REMOVE_EMPLOYEE_FROM_SAAS = gql`
  mutation removeFromEmployeeSaasApps($parentId: ID!, $childId: ID!) {
    removeFromEmployeeSaasApps(
      subscriptionSaaSId: $parentId
      userEmployeeId: $childId
    ) {
      userEmployee {
        id
        firstName
        lastName
      }
      subscriptionSaaS {
        id
        name
      }
    }
  }
`;
export const ADD_EMPLOYEE_TO_SAAP = gql`
  mutation addToSoftware($parentId: ID!, $childId: ID!) {
    addToSoftware(saapSaaPId: $parentId, userEmployeeId: $childId) {
      userEmployee {
        id
        firstName
        lastName
      }
      saapSaaP {
        id
        name
      }
    }
  }
`;
export const REMOVE_EMPLOYEE_FROM_SAAP = gql`
  mutation removeFromSoftware($parentId: ID!, $childId: ID!) {
    removeFromSoftware(saapSaaPId: $parentId, userEmployeeId: $childId) {
      userEmployee {
        id
        firstName
        lastName
      }
      saapSaaP {
        id
        name
      }
    }
  }
`;

export const ADD_SAAP_TO_HARDWARE = gql`
  mutation addToSoftware($parentId: ID!, $childId: ID!) {
    addToClientSoftware(
      softwareSaaPId: $parentId
      hardwareHardwareId: $childId
    ) {
      hardwareHardware {
        id
        maker
        model
      }
      softwareSaaP {
        id
        name
      }
    }
  }
`;
export const REMOVE_SAAP_FROM_HARDWARE = gql`
  mutation removeFromSoftware($parentId: ID!, $childId: ID!) {
    removeFromClientSoftware(
      softwareSaaPId: $parentId
      hardwareHardwareId: $childId
    ) {
      hardwareHardware {
        id
        firstName
        lastName
      }
      softwareSaaP {
        id
        name
      }
    }
  }
`;
