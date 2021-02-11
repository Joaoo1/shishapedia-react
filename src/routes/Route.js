/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Route } from 'react-router-dom';
import DefaultLayout from '../pages/_layouts/default';

function RouteWrapper({ component: Component, title, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component title={title} {...props} />
        </DefaultLayout>
      )}
    />
  );
}

export default RouteWrapper;
