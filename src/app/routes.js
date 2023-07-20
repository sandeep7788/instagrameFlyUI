import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LoginForm } from "../pages/login";
import { Register } from "../pages/register";
import MainDashboard from "../pages/dashboard/main_dashboard";
import UserListDashBoard from "../pages/dashboard/user_list_dashBoard";
// import { MainDashboard } from "../pages/dashboard/main_dashboard";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />

        
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* ternary opretor */}

        <Route path="/login" exact={true} element={<LoginForm />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/home" element={<MainDashboard/>} />
        <Route path="/list"  element={<UserListDashBoard />} />

        <Route path="*"  element={<Home />} />
        
        
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c" >
      <AnimatedRoutes />
      {/* <Socialicons /> */}
    </div>
  );
}

export default AppRoutes;
