import React from 'react';
import { Query } from 'react-apollo';
import Loading from '../common/Loading';
import { DrawerContext, QueryContext } from '../common/Contexts';
import DataMap from '../common/Mapping';
import FormContainer from './FormContainer';

class FormProvider extends React.Component {
  renderForm(context) {
    if (!context.state.selection) {
      return (
        <QueryContext.Consumer>
          {queryContext => (
            <FormContainer empty>
              {DataMap[queryContext.typeName].fields}
            </FormContainer>
          )}
        </QueryContext.Consumer>
      );
    }
    return (
      <QueryContext.Consumer>
        {queryContext => (
          <Query
            query={DataMap[queryContext.typeName].query.byId}
            variables={{ id: context.state.selection }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Loading />;
              if (error) return `Error! ${error.message}`;
              return (
                <FormContainer data={data}>
                  {DataMap[queryContext.typeName].fields}
                </FormContainer>
              );
            }}
          </Query>
        )}
      </QueryContext.Consumer>
    );
  }

  render() {
    return (
      <DrawerContext.Consumer>
        {drawerContext => this.renderForm(drawerContext)}
      </DrawerContext.Consumer>
    );
  }
}

export default FormProvider;
