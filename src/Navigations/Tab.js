import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, icons, images, SIZES, } from "../Constants";
import HomeScreen from '../Component/HomeScreen';
import LinearGradient from 'react-native-linear-gradient';
import AllSearch   from '../Component/AllSearch';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#5d9ad0',
                    position: 'absolute',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
            })}

        >
            <Tab.Screen name="Location1" component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ ...FONTS.h5, color: focused ? COLORS.white : COLORS.lightGray1 ,}}>Home </Text>),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.place}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.lightGray1
                            }}
                        />
                    ),
                }} />

            <Tab.Screen name="AllSearch" component={AllSearch}
                options={{
                    // tabBarLabel: 'My Event',
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ ...FONTS.h5, color: focused ? COLORS.white : COLORS.lightGray1 }}>Event </Text>),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.calendar}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.lightGray1
                            }}
                        />
                    ),

                }} />
            <Tab.Screen name="Ride" component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ ...FONTS.h5, color: focused ? COLORS.white : COLORS.lightGray1 }}> Ride </Text>),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.motorcycle}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.lightGray1
                            }}
                        />
                    ),

                }} />
            <Tab.Screen name="Profile" component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ ...FONTS.h5, color: focused ? COLORS.white : COLORS.lightGray1 }}>Profile</Text>),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.lightGray1
                            }}
                        />
                    ),

                }} />

        </Tab.Navigator>
    );
}
export default Tabs