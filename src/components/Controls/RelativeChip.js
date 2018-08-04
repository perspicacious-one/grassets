import React from 'react';
import Chip from '@material-ui/core/Chip';
import RemoveIcon from '@material-ui/icons/Remove';
import { Mutation } from 'react-apollo';
import DataMap from '../common/Mapping';
import { QueryContext, FormContext } from '../common/Contexts';
import { GetDisplayName } from '../../utils/string';

export const RelativeChip = (props) => {
  if (props.relativeType && props.relative) {
    return (
      <QueryContext.Consumer>
        {context => (
          <FormContext.Consumer>
            {formContext => (
              <Mutation
                mutation={
                  DataMap[context.typeName].mutate.removeRelative[
                    props.relativeType
                  ]
                }
                variables={{
                  parentId: formContext.state.id,
                  childId: props.relative.id,
                }}
              >
                {(unlink, { data }) => (
                  <Chip
                    id={props.relative.id}
                    key={props.relative.id}
                    label={GetDisplayName(props.relative)}
                    onDelete={e => unlink().then(
                      formContext.unlinkAction(
                        props.relative,
                        props.relativeType,
                        e,
                      ),
                    )
                    }
                  />
                )}
              </Mutation>
            )}
          </FormContext.Consumer>
        )}
      </QueryContext.Consumer>
    );
  }
};

export function Chips(type, val) {
  if (!val || !type) {
    return null;
  }
  if (Array.isArray(val)) {
    const chips = val.map(chip => <RelativeChip relativeType={type} relative={chip} />);
    return chips;
  }
  return <RelativeChip relativeType={type} relative={val} />;
}
