import Button from "@material-ui/core/Button";
import React from "react";
import { graphql, compose, Mutation } from "react-apollo";
import DeleteIcon from "@material-ui/icons/Delete";
import DataMap from "../common/Mapping";
import { QueryContext } from "../common/Contexts";

function DeleteButton(props) {
  return (
    <QueryContext.Consumer>
      {context =>
        context && (
          <Mutation
            mutation={DataMap[context.typeName].mutate.delete}
            variables={{ id: props.id }}
          >
            {mutateRemove => (
              <Button
                variant="fab"
                color="secondary"
                aria-label="delete"
                style={{ float: "right" }}
                onClick={e => {
                  e.preventDefault();
                  mutateRemove().then(context.refetch);
                }}
              >
                <DeleteIcon />
              </Button>
            )}
          </Mutation>
        )
      }
    </QueryContext.Consumer>
  );
}
export default DeleteButton;
