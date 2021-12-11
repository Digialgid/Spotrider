import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, icons, images, SIZES, } from "../Constants";
import HomeScreen from '../Component/HomeScreen';


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{

                headerShown: false,

                style: {
                    background: 'red',
                    paddingBottom: 3,
                    activeBackgroundColor: '#c4461c',
                    inactiveBackgroundColor: '#b55031',
                }
            }}>
            <Tab.Screen name="Location1" component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ ...FONTS.h5, color: focused ? COLORS.primary : COLORS.lightGray1 }}>Home </Text>),
                    tabBarIcon: ({ focused }) => (

                        <Image
                            source={icons.place}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.lightGray1
                            }}
                        />
                    ),

                }} />

            <Tab.Screen name="Event" component={HomeScreen}
                options={{
                    // tabBarLabel: 'My Event',
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ ...FONTS.h5, color: focused ? COLORS.primary : COLORS.lightGray1 }}>Event </Text>),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.calendar}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.lightGray1
                            }}
                        />
                    ),

                }} />
            <Tab.Screen name="Ride" component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ ...FONTS.h5, color: focused ? COLORS.primary : COLORS.lightGray1 }}> Ride </Text>),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.motorcycle}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.lightGray1
                            }}
                        />
                    ),

                }} />
            <Tab.Screen name="Profile" component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ ...FONTS.h5, color: focused ? COLORS.primary : COLORS.lightGray1 }}>Profile</Text>),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.lightGray1
                            }}
                        />
                    ),

                }} />

        </Tab.Navigator>
    );
}
