import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Main from './components/Main';
import Options from './components/Options';
import TranslationHistory from './components/TranslationHistory';
import Help from './components/Help';
import Payment from './components/Payment';
import Settings from './components/Settings';
import TranslateForTranslo from './components/TranslateForTranslo';
import Legal from './components/Legal';
import ScheduleTime from './components/ScheduleTime';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Copyright from './components/Copyright';
import LocationInformation from './components/LocationInformation';
import QReportIssue from './components/QReportIssue';
import QTranslatorReview from './components/QTranslatorReview';
import QAccountPayment from './components/QAccountPayment';
import QTransloGuide from './components/QTransloGuide';
import QAccessibility from './components/QAccessibility';
import QTranslatingForTranslo from './components/QTranslatingForTranslo';
import TranslatorSignUp from './components/TranslatorSignUp';
import AddTranslator from './components/AddTranslator';
import RemoveTranslator from './components/RemoveTranslator';
import EditEmail from './components/EditEmail';
import EditPassword from './components/EditPassword';
import WelcomeScreen from './components/WelcomeScreen';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="welcome" component={WelcomeScreen} title="Welcome" initial />
					<Scene key="login" component={LoginForm} title="Login" />
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
					<Scene key="translationHistory" component={TranslationHistory} title="History" />
					<Scene key="help" component={Help} title="Help" />
					<Scene key="payment" component={Payment} title="Payment" />
					<Scene key="settings" component={Settings} title="Settings" />
					<Scene key="translateForTranslo" component={TranslateForTranslo} title="Translate" />
					<Scene key="legal" component={Legal} title="Legal" />
					<Scene key="scheduleTime" component={ScheduleTime} title="Schedule a Time" />
					<Scene key="termsConditions" component={TermsConditions} title="Terms & Conditions" />
					<Scene key="privacyPolicy" component={PrivacyPolicy} title="Privacy Policy" />
					<Scene key="copyright" component={Copyright} title="Copyright" />
					<Scene 
						key="locationInformation" 
						component={LocationInformation} 
						title="Location Info" 
					/>
					<Scene key="qReportIssue" component={QReportIssue} title="Report Issue" />
					<Scene key="qTranslatorReview" component={QTranslatorReview} title="Translator Review" />
					<Scene key="qAccountPayment" component={QAccountPayment} title="Account & Payment" />
					<Scene key="qTransloGuide" component={QTransloGuide} title="Translo Guide" />
					<Scene key="qAccessibility" component={QAccessibility} title="Accessibility" />
					<Scene 
						key="qTranslatingForTranslo" 
						component={QTranslatingForTranslo} 
						title="Translating for Translo" 
					/>
					<Scene key="translatorSignUp" component={TranslatorSignUp} title="Translator Sign Up" />
					<Scene key="addTranslator" component={AddTranslator} title="Add Translator" />
					<Scene key="removeTranslator" component={RemoveTranslator} title="Remove Translator" />
					<Scene key="editEmail" component={EditEmail} title="Edit Email" />
					<Scene key="editPassword" component={EditPassword} title="Edit Password" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
