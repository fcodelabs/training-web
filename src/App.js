import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AllDiary from "./components/pages/AllDiary";
import Layout from "./components/layout/Layout";
import DiaryHome from "./components/pages/DiaryHome";
import LoginPage from "./views/login/pages/LoginPage";
import { Redirect } from "react-router";
import AuthContext from "./components/util/authContext";
import Cookies from "js-cookie";

function App() {
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };
  useEffect(() => {
    readCookie();
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Layout>
        <Switch>
          <ProtectRouteLogin
            path="/"
            auth={auth}
            exact={true}
            component={LoginPage}
          >
            {/*<LoginPage/>*/}
          </ProtectRouteLogin>
          <ProtectRoute path="/all-diary" auth={auth} component={AllDiary}>
            {/*<AllDiary/>*/}
          </ProtectRoute>
          <ProtectRoute path="/add-diary" auth={auth} component={DiaryHome}>
            {/*<DiaryHome/>*/}
          </ProtectRoute>
        </Switch>
      </Layout>
    </AuthContext.Provider>
  );
}

const ProtectRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/" />)}
    />
  );
};

const ProtectRouteLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/all-diary" />)}
    />
  );
};

export default App;
