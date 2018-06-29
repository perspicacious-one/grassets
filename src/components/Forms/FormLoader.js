import React from 'react';
import Loading from '../common/Loading';
import HardwareMutationForm from '../Mutations/HardwareMutations';
import SaasMutationForm from '../Mutations/SaasMutations';
import SaapMutationForm from '../Mutations/SoftwareMutationForm';
import EmployeeMutationForm from '../Mutations/EmployeeMutationForm';
import { Query } from 'react-apollo'
import { GET_HARDWARE,GET_SAAS,GET_SAAP, GET_EMPLOYEE } from '../Queries/SelectionQueries'


const FormLoader = (props) => {
		if(props.noQuery === true) {
			switch (props.typename) {
				case "Employee":
					return (<EmployeeMutationForm toggleMethod={props.toggleMethod}/>);
				// case "Billing":
				// 	return (GET_BILLING);
				case "SaaP":
				return (<SaapMutationForm toggleMethod={props.toggleMethod} />);
				case "SaaS":
					return (<SaasMutationForm toggleMethod={props.toggleMethod}/>);
				case "Hardware":
					return (<HardwareMutationForm toggleMethod={props.toggleMethod}/>);
				case "":
					return (null);
				default:
					return (null);
			}
			
		} else {
			switch (props.typename) {
				case "Employee":
					return (<Query query={GET_EMPLOYEE} variables={{ id: props.variable }}>
						{({ loading, error, data, refetch }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<EmployeeMutationForm data={data.Employee} toggleMethod={props.toggleMethod}/>
						)
						}
					}
					</Query>);
				// case "Billing":
				// 	return (GET_BILLING);
				case "SaaP":
					return (
					<Query query={GET_SAAP} variables={{ id: props.variable }}>
						{({ loading, error, data, refetch }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<SaapMutationForm data={data.SaaP} toggleMethod={props.toggleMethod} />
						)
						}
					}
					</Query>);
				case "SaaS":
					return (
						<Query query={GET_SAAS} variables={{ id: props.variable }}>
						{({ loading, error, data, refetch }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<SaasMutationForm data={data.SaaS} toggleMethod={props.toggleMethod}/>
						)
						}
					}
					</Query>);
				case "Hardware":
					return (
						<Query query={GET_HARDWARE} variables={{ id: props.variable }} notifyOnNetworkStatusChange>
						{({ loading, error, data, refetch }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<HardwareMutationForm data={data.Hardware} toggleMethod={props.toggleMethod} handleLinkChange={() => refetch()}/>
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