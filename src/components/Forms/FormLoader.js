import React from 'react';
import Loading from '../common/Loading';
import HardwareMutationForm from '../Mutations/HardwareMutationForm';
import SaasMutationForm from '../Mutations/SaasMutationForm';
import SaapMutationForm from '../Mutations/SoftwareMutationForm';
import EmployeeMutationForm from '../Mutations/EmployeeMutationForm';
import { Query } from 'react-apollo'
import DataMap from '../common/Mapping'


const FormLoader = (props) => {
		if(props.noQuery === true) {
			switch (props.typename) {
				case "Employee":
					return (<EmployeeMutationForm toggleMethod={props.toggleMethod} refresh={props.refresh}/>);
				// case "Billing":
				// 	return (GET_BILLING);
				case "SaaP":
				return (<SaapMutationForm toggleMethod={props.toggleMethod} refresh={props.refresh}/>);
				case "SaaS":
					return (<SaasMutationForm toggleMethod={props.toggleMethod} refresh={props.refresh}/>);
				case "Hardware":
					return (<HardwareMutationForm toggleMethod={props.toggleMethod} refresh={props.refresh}/>);
				case "":
					return (null);
				default:
					return (null);
			}
			
		} else {
			switch (props.typename) {
				case "Employee":
					return (<Query query={DataMap.employee.query.byId} variables={{ id: props.variable }}>
						{({ loading, error, data }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<EmployeeMutationForm data={data.Employee} toggleMethod={props.toggleMethod} refresh={props.refresh}/>
						)
						}
					}
					</Query>);
				// case "Billing":
				// 	return (GET_BILLING);
				case "SaaP":
					return (
					<Query query={DataMap.saap.query.byId} variables={{ id: props.variable }}>
						{({ loading, error, data }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<SaapMutationForm data={data.SaaP} toggleMethod={props.toggleMethod} refresh={props.refresh}/>
						)
						}
					}
					</Query>);
				case "SaaS":
					return (
						<Query query={DataMap.saas.query.byId} variables={{ id: props.variable }}>
						{({ loading, error, data }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<SaasMutationForm data={data.SaaS} toggleMethod={props.toggleMethod} refresh={props.refresh}/>
						)
						}
					}
					</Query>);
				case "Hardware":
					return (
						<Query query={DataMap.hardware.query.byId} variables={{ id: props.variable }} notifyOnNetworkStatusChange>
						{({ loading, error, data }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<HardwareMutationForm data={data.Hardware} toggleMethod={props.toggleMethod} refresh={props.refresh}/>
						)
						}
					}
					</Query>);
				case "":
					return (null);
				default:
					return (null);
			}
		}
}
export default FormLoader