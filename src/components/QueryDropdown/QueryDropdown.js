// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import React from 'react';
// import { GET_EMPLOYEES_BASIC } from '../Queries/ListQueries';
// import { Query } from 'react-apollo'
// import Loading from '../common/Loading';
// import { ADD_EMPLOYEE_TO_HARDWARE } from '../Mutations';
// import { compose, graphql } from 'react-apollo'
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Chip from '@material-ui/core/Chip';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';

// function QueryField(WrappedComponent, selectData) {
//   // ...and returns another component...
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         data: selectData(DataSource, props)
//       };
//     }

//     componentDidMount() {
//       // ... that takes care of the subscription...
// 			this.labels = Object.keys(this.props.data);
// 			this.values = Object.values(this.props.data);
// 		}

//     componentWillUnmount() {
//       DataSource.removeChangeListener(this.handleChange);
//     }

//     handleChange() {
//       this.setState({
//         data: selectData(DataSource, this.props)
//       });
//     }

//     render() {
//       // ... and renders the wrapped component with the fresh data!
//       // Notice that we pass through any additional props
//       return <WrappedComponent data={this.state.data} {...this.props} />;
//     }
//   };
// }

// function ControlSelector(field) {
// 	switch (true) {
// 		case field == null:
// 			return <TextField></TextField>
// 		case regUrl.test(field):
// 			return (
// 				<TextField>
// 				<a href={field || '#'} target="_blank">
// 					<OpenInNewIcon />
// 				</a>
// 				</TextField>
// 			);
// 		case typeof field === 'object':
// 			return( MappingControl(field) )
// 				<TextField>
// 						{field.firstName + ' ' + field.lastName}
// 				</TextField>
// 			);
// 		case regDate.test(field):
// 			let date = field.match(regDate);
// 			return(<TextField>{date[0]}</TextField>);

// 		default:
// 			return( <TextField>{field.toString()}</TextField>);
// 	}
// }


// const MappingControl = (props) => {
// 	switch (true) {
// }


