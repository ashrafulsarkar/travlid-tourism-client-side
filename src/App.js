import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About/About";
import AddService from "./components/pages/AddService/AddService";
import AllOrder from "./components/pages/AllOrder/AllOrder";
import AllServices from "./components/pages/AllServices/AllServices";
import Checkout from "./components/pages/Checkout/Checkout";
import Contact from "./components/pages/Contact/Contact";
import Home from './components/pages/Home/Home';
import Login from "./components/pages/Login/Login/Login";
import PrivateRoute from "./components/pages/Login/PrivateRoute/PrivateRoute";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import MyOrder from "./components/pages/MyOrder/MyOrder";
import NotFound from "./components/pages/NotFound/NotFound";
import Thankyou from "./components/pages/Thankyou/Thankyou";
import UpdateService from "./components/pages/UpdateService/UpdateService";
import Footer from './components/sections/Footer/Footer';
import Header from './components/sections/Header/Header';
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/home">
					<Home></Home>
				</Route>
				<Route path="/about">
					<About></About>
				</Route>
				<Route path="/contact">
					<Contact></Contact>
				</Route>
				<PrivateRoute exact path="/myaccount">
					<MyAccount></MyAccount>
				</PrivateRoute>
				<PrivateRoute path="/myaccount/myorder">
					<MyOrder></MyOrder>
				</PrivateRoute>
				<PrivateRoute path="/myaccount/addservice">
					<AddService></AddService>
				</PrivateRoute>
				<PrivateRoute path="/myaccount/allservices">
					<AllServices></AllServices>
				</PrivateRoute>
				<PrivateRoute path="/myaccount/allorder">
					<AllOrder></AllOrder>
				</PrivateRoute>
				<PrivateRoute path="/myaccount/update/:id">
					<UpdateService></UpdateService>
				</PrivateRoute>
				<PrivateRoute path="/checkout/:id">
					<Checkout></Checkout>
				</PrivateRoute>
				<PrivateRoute path="/thankyou">
					<Thankyou></Thankyou>
				</PrivateRoute>
				<Route path="/login">
					<Login></Login>
				</Route>
				<Route path="*">
					<NotFound></NotFound>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	</AuthProvider>
  );
}

export default App;
