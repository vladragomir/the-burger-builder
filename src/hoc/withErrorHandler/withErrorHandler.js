import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const WithErrorHandler = (WrappedComponent, axios) => {
  const [error, errorConfirmedHandler] = useHttpErrorHandler(axios);

  return (props) => {
    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default WithErrorHandler;
