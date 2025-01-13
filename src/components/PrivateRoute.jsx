import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!document.cookie.match(/^(.*;)?\s*token\s*=\s*[^;]+(.*)?$/);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
}

export default PrivateRoute;