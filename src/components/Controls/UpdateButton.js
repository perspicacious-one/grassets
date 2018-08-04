import Button from '@material-ui/core/Button';
import React from 'react';
import { Mutation } from 'react-apollo';
import SaveIcon from '@material-ui/icons/Save';
import DataMap from '../common/Mapping';
import { QueryContext } from '../common/Contexts';

export function UpdateButton(props) {
  return (
    <QueryContext.Consumer>
      {context => context && (
      <Mutation
        mutation={DataMap[context.typeName].mutate.update}
        variables={props.variables}
      >
        {(mutateCreate, { data }) => (
          <Button
            variant="fab"
            aria-label="save"
            color="primary"
            style={{ float: 'left' }}
            onClick={(e) => {
              e.preventDefault();
              mutateCreate().then(props.callback(false, null));
            }}
          >
            <SaveIcon />
          </Button>
        )}
      </Mutation>
      )
      }
    </QueryContext.Consumer>
  );
}

export function CreateButton(props) {
  return (
    <QueryContext.Consumer>
      {context => context && (
      <Mutation
        mutation={DataMap[context.typeName].mutate.create}
        variables={props.variables}
      >
        {(mutateCreate, { data }) => (
          <Button
            variant="fab"
            aria-label="save"
            color="primary"
            style={{ float: 'left' }}
            onClick={(e) => {
              e.preventDefault();
              mutateCreate().then(props.callback(false, null));
            }}
          >
            <SaveIcon />
          </Button>
        )}
      </Mutation>
      )
      }
    </QueryContext.Consumer>
  );
}
