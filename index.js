/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);

import App from './storybook';

AppRegistry.registerComponent(appName, () => App);
