import { Navigate } from 'react-router-dom';

function AuthRoute({ element, destination, reversed }) {
  const accessToken = localStorage.getItem('authToken');
  const isAuthorized = reversed ? !accessToken : accessToken;
  return isAuthorized ? element : <Navigate to={destination} />;
}

export default AuthRoute;
