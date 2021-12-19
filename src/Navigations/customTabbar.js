import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FocusedGradient = ['#4c669f', '#3b5998', '#192f6a'];
const NotFocusedGradient = ['#ffffff', '#ffffff'];

function CustomTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <LinearGradient style={{
            flexDirection: 'row', borderTopWidth: 0, justifyContent: "space-between",backgroundColor:'red',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }} colors={['#5691ad', '#37587c', '#1d3c5f']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: .8 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (

                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            minHeight: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: isFocused ? 'white' : '#222' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>

                );
            })}
        </LinearGradient>
    );
}

export default CustomTabBar;