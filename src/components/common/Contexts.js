import React from 'react';

export const QueryContext = React.createContext();
// QueryContext values:
// refetch: () => refetch(),
// typeName: --> Matches the mapping key

export const DrawerContext = React.createContext();
// DrawerContext values:
// toggle: this.toggleDrawer,
// state: this.state --> selection id & drawer state

export const FormContext = React.createContext();
// FormContext values:
// state: this.state, --> values from query byId
// onChange: this.handleChange,
// linkAction: this.handleLinkChange

export const RelativeContext = React.createContext();
