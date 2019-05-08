import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Main from './components/Main';
import Options from './components/Options';
import Help from './components/Help';
import Payment from './components/Payment';
import Settings from './components/Settings';
import Legal from './components/Legal';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Copyright from './components/Copyright';
import LocationInformation from './components/LocationInformation';
import QReportIssue from './components/QReportIssue';
import QAccountPayment from './components/QAccountPayment';
import QTransloGuide from './components/QTransloGuide';
import QAccessibility from './components/QAccessibility';
import EditEmail from './components/EditEmail';
import EditPassword from './components/EditPassword';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login" initial />
					<Scene key="signup" component={SignUpForm} title="Translo" /> 
				</Scene>
				<Scene key="main">
					<Scene 
						leftTitle="Options"
						onLeft={() => Actions.options()}
						key="home" 
						component={Main} 
						title="Home" 
						initial 
					/>
					<Scene key="options" component={Options} title="Options" />
					<Scene key="help" component={Help} title="Help" />
					<Scene key="payment" component={Payment} title="Payment" />
					<Scene key="settings" component={Settings} title="Settings" />
					<Scene key="legal" component={Legal} title="Legal" />
					<Scene key="termsConditions" component={TermsConditions} title="Terms & Conditions" />
					<Scene key="privacyPolicy" component={PrivacyPolicy} title="Privacy Policy" />
					<Scene key="copyright" component={Copyright} title="Copyright" />
					<Scene 
						key="locationInformation" 
						component={LocationInformation} 
						title="Location Info" 
					/>
					<Scene key="qReportIssue" component={QReportIssue} title="Report Issue" />
					<Scene key="qAccountPayment" component={QAccountPayment} title="Account & Payment" />
					<Scene key="qTransloGuide" component={QTransloGuide} title="Translo Guide" />
					<Scene key="qAccessibility" component={QAccessibility} title="Accessibility" />
					
					<Scene key="editEmail" component={EditEmail} title="Edit Email" />
					<Scene key="editPassword" component={EditPassword} title="Edit Password" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
