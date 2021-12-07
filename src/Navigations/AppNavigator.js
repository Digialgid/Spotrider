
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, CreateRide, AddEvent, AddLocation,HomeScreen } from '../Component';
import Tabs from '../Navigations/Tab';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="CreateRide" component={CreateRide} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="AddEvent" component={AddEvent} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="AddLocation" component={AddLocation} options={{ headerShown: false }} /> */}
                <Stack.Screen name="HomeScreen" component={Tabs} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    ); ``
};

export default AppNavigator;