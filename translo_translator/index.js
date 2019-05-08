if(__DEV__) {
  import('./src/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import {AppRegistry} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('translo_translator', () => App);
