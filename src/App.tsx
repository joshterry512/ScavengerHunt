import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Camera from './screens/Camera';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from './screens/Settings';
import HuntInfo from './screens/HuntInfo';
import ObjectInfo from './screens/ObjectInfo';
import Task from './screens/Task';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Hunt" component={HuntInfo} />
          <Stack.Screen name="Info" component={ObjectInfo} />
          <Stack.Screen name="Task" component={Task} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
