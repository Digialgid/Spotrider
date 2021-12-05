
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, CreateRide, } from '../Component';
import { AddEvent } from '../Component';
import { AddLocation } from '../Component';
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreateRide" component={CreateRide} options={{ headerShown: false }} />
                <Stack.Screen name="AddEvent" component={AddEvent} options={{ headerShown: false }} />
                <Stack.Screen name="AddLocation" component={AddLocation} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;