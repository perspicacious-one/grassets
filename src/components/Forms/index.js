import React from 'react';
import Loading from '../common/Loading';
import {DrawerContext, QueryContext} from '../common/Contexts';
import EmployeeMutationForm from '../Mutations/EmployeeMutationForm';
import DetailForm from './DetailForm';
import HardwareFields from './HardwareFields';
import SoftwareFields from './SoftwareFields';
import SubscriptionFields from './SubscriptionFields';
import { Query } from 'react-apollo'
import DataMap from '../common/Mapping'

const NoQueryForm = (props) => {

	return(
			<DetailForm empty>
				{ props.children }
			</DetailForm>
	)
}
const QueryForm = (props) => {
	return(
		<Query query={props.query} variables={{ id: props.id }}>
			{({ loading, error, data }) => {
				if (loading) return ( <Loading />	);
				if (error) return `Error! ${error.message}`;
				return( 
					<DetailForm data={data}>
						{ props.chidren }
					</DetailForm>
				)
				}
			}
		</Query>
	)
}
const FormProvider = () => {
	return(
		<QueryContext.Consumer>
			{ queryContext =>
				<DrawerContext.Consumer>
					{ drawerContext =>
						{
							!drawerContext.state.selection && ( <NoQueryForm>{DataMap[QueryContext.typeName].fields}</NoQueryForm> )
							drawerContext.state.selection && ( 
								<QueryForm 
									query={DataMap[queryContext.typeName].query.byId} 
									id={drawerContext.state.selection}
									>
										{DataMap[QueryContext.typeName].fields}
									</QueryForm> 
							)
						}
					}
				</DrawerContext.Consumer>
			}
		</QueryContext.Consumer>
	)
}

export default FormProvider