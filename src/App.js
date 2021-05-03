import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Students from "./pages/Students";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "./redux/actions/userActions";
import Dashboard from "./pages/Dashboard";
import Spinner from "./components/Spinner";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(isAuthenticated());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Router>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/students" component={Students} />
          <Route exact path="/login" component={LoginForm} />
        </Router>
      )}
    </>
  );
};

export default App;
