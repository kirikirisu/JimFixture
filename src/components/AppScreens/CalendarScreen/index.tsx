import { createStackNavigator } from 'react-navigation-stack';

import CalendarList from '../../../containers/CalendarList';
import DetailsScreen from '../../../containers/Details';

const RootStack = createStackNavigator(
  {
    Home: { screen: CalendarList },
    Details: { screen: DetailsScreen },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 23,
      },
    },
  },
);

export default RootStack;
