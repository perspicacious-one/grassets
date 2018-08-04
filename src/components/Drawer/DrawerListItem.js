import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AddIcon from '@material-ui/icons/Add';
import { Mutation } from 'react-apollo';
import IconButton from '@material-ui/core/IconButton';
import DataMap from '../common/Mapping';
import { GetDisplayName } from '../../utils/string';
import { QueryContext, FormContext, RelativeContext } from '../common/Contexts';

const DrawerListItem = (props) => {
  function renderButton(outerContext, innerContext) {
    if (!outerContext || !innerContext) { return null; }
    const mutation = (DataMap[outerContext.typeName].mutate.addRelative[props.relativeType]);
    if (!mutation) { return null; }
    return (
      <RelativeContext.Consumer>
        { context => (
          <ListItemSecondaryAction>
            <Mutation
              mutation={mutation}
              variables={{ parentId: innerContext.state.id, childId: props.data.id }}
            >
              {(mutateAddRelative, { data }) => (
                <IconButton
                  aria-label="add"
                  style={{ float: 'right' }}
                  onClick={(e) => {
                    e.preventDefault();
                    mutateAddRelative().then(
					    innerContext.linkAction(props.data, props.relativeType, e),
					  );
                    context.toggle();
                  }}
                >
                  <AddIcon color="primary" />
                </IconButton>
              )}
            </Mutation>
          </ListItemSecondaryAction>
        )}
      </RelativeContext.Consumer>
    );
  }
  return (
    <QueryContext.Consumer>
      { queryContext => (
        <FormContext.Consumer>
          { formContext => (
            <ListItem key={props.data.id} role={undefined} divider button>
              <ListItemText primary={GetDisplayName(props.data)} />
              { renderButton(queryContext, formContext) }
            </ListItem>
          )}
        </FormContext.Consumer>
      )}
    </QueryContext.Consumer>
  );
};

export default DrawerListItem;
