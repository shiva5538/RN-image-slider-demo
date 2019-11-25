/**
 * @format
 */
import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';
import { Root } from 'native-base'

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillMount has been renamed',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated'
])

const RootApp = () => (
    <Root>
        <App />
    </Root>
)

AppRegistry.registerComponent(appName, () => RootApp);
