import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Camera from './screens/Camera';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './screens/Settings';
import HuntInfo from './screens/HuntInfo';
import ObjectInfo from './screens/ObjectInfo';
// import Task from './screens/Task';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Camera" component={Camera} />
          <Tab.Screen name="Hunt" component={HuntInfo} />
          <Tab.Screen name="Info" component={ObjectInfo} />
          {/*<Tab.Screen name="Task" component={Task} />*/}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
