import React from 'react';
import Loading from '../common/Loading';
import HardwareMutationForm from '../Forms/HardwareMutations';
import SaasMutationForm from '../Forms/SaasMutations';
import SaapMutationForm from '../Forms/SoftwareMutationForm';
import { Query } from 'react-apollo'
import { GET_HARDWARE,GET_SAAS,GET_SAAP } from '../graphql/SelectionQueries'


const FormLoader = (props) => {
		if(props.noQuery === true) {
			switch (props.typename) {
				// case "Employee":
				// 	return (GET_EMPLOYEE);
				// case "Billing":
				// 	return (GET_BILLING);
				case "SaaP":
				return (<SaapMutationForm toggleMethod={props.toggleDrawer} />);
				case "SaaS":
					return (<SaasMutationForm toggleMethod={props.toggleDrawer}/>);
				case "Hardware":
					return (<HardwareMutationForm toggleMethod={props.toggleDrawer}/>);
				case "":
					return (null);
				default:
					return (null);
			}
			
		} else {
			switch (props.typename) {
				// case "Employee":
				// 	return (GET_EMPLOYEE);
				// case "Billing":
				// 	return (GET_BILLING);
				case "SaaP":
					return (
					<Query query={GET_SAAP} variables={{ id: props.variable }}>
						{({ loading, error, data }) => {
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
						{({ loading, error, data }) => {
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
						<Query query={GET_HARDWARE} variables={{ id: props.variable }}>
						{({ loading, error, data }) => {
						if (loading) return ( <Loading />	);
						if (error) return `Error! ${error.message}`;
						return( 
							<HardwareMutationForm data={data.Hardware} toggleMethod={props.toggleMethod}/>
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