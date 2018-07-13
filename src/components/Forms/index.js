import React from 'react';
import Loading from '../common/Loading';
import {DrawerContext, QueryContext} from '../common/Contexts';
import { Query } from 'react-apollo'
import DataMap from '../common/Mapping'
import FormContainer from './FormContainer';
import FieldLoader from './FieldLoader';

// const NoQueryForm = () => {

// 	return(
// 		<QueryContext.Consumer>
// 		{ queryContext =>
// 			<FormContainer empty>
// 				<FieldLoader context={queryContext} />
// 			</FormContainer>
// 		}
// 		</QueryContext.Consumer>
// 	)
// }
// class QueryForm extends React.Component {
// 	render() {	
// 	 return(
// 		<Query query={this.props.query} variables={{ id: this.props.id }}>
// 			{({ loading, error, data }) => {
// 				if (loading) return ( <Loading />	);
// 				if (error) return `Error! ${error.message}`;
// 				return( 
// 					<FormContainer data={data}>
// 						{ this.props.children }
// 					</FormContainer>
// 				)
// 				}
// 			}
// 		</Query>
// 	)
//  }
// }

class FormProvider extends React.Component {

	renderForm(context) {
		if(!context.state.selection) {
			return(
				<QueryContext.Consumer>
				{ queryContext =>
					<FormContainer empty>
						{ DataMap[queryContext.typeName].fields }
					</FormContainer>
				}
				</QueryContext.Consumer>
			)
		}
		else {
			return(
				<QueryContext.Consumer>
				{ queryContext =>
					<Query query={DataMap[queryContext.typeName].query.byId} variables={{ id: context.state.selection }}>
						{({ loading, error, data }) => {
							if (loading) return ( <Loading />	);
							if (error) return `Error! ${error.message}`;
							return( 
								<FormContainer data={data}>
									{ DataMap[queryContext.typeName].fields }
								</FormContainer>
							)
							}
						}
					</Query>
				}
				</QueryContext.Consumer>
			)
		}
	}
	render() {
		return(
					<DrawerContext.Consumer>
						{ drawerContext => (this.renderForm(drawerContext))	}
					</DrawerContext.Consumer>
		)
	}
}

export default FormProvider