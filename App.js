// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import ViewSurvey from './pages/ViewSurvey/ViewSurvey';
// import Dashboard from './pages/Dashboard/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Form" component={Form}/>
        <Stack.Screen name="ViewSurvey" component={ViewSurvey} options={{headerShown: false}}/>
        {/* <Stack.Screen name="Dashboard" component={Dashboard}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;