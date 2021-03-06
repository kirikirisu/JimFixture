import { createStackNavigator } from 'react-navigation-stack';

import Option from './Setting';
import Contact from './Contact';
import Rule from './Rule';
import PrivacyPolicy from './PrivacyPolicy';

const SettingRoute = createStackNavigator(
  {
    Options: { screen: Option },
    Contact: { screen: Contact },
    Rule: { screen: Rule },
    PrivacyPolicy: { screen: PrivacyPolicy },
  },
  {
    initialRouteName: 'Options',
    defaultNavigationOptions: {
      title: '設定',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'rgb(57, 62, 70)',
      headerTitleStyle: {
        fontSize: 23,
      },
    },
  },
);

export default SettingRoute;
