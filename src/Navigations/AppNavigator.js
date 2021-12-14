
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, CreateRide, AddEvent, AddLocation, HomeScreen, Followers, Notifications, Location,Budget } from '../Component'
import Tabs from '../Navigations/Tab';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreateRide" component={CreateRide} options={{ headerShown: false }} />
                <Stack.Screen name="AddEvent" component={AddEvent} options={{ headerShown: false }} />
                <Stack.Screen name="AddLocation" component={AddLocation} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="Followers" component={Followers} options={{ headerShown: false }} />
                <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
                <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
                <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;