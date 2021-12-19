import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import styles from './style';
import { COLORS, icons, images } from '../../Constants/index';
import AllSearch from "./Allsearch";
import Event from './Event';
import People from './People';
import Ride from './Ride';
import LinearGradient from 'react-native-linear-gradient';

const App = ({ navigation }) => {
    const header = [{ id: 1, name: "All" }, { id: 2, name: "People" }, { id: 3, name: "Event" }, { id: 4, name: "Ride" }]
    const [tabindex, settabindex] = useState(1)

    const headerTabBar = (e) => {
        console.log("e,", e);
        settabindex(e);
    }

    return (

        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.Locationbg}>
                    <View style={styles.viewafterimagebg}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ marginStart: 10, marginTop: 10 }}>
                                <Image source={icons.leftArrow} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={styles.menuiconstyle}>
                                    <Image source={icons.search} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuiconstyle}>
                                    <Image source={icons.location} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuiconstyle}>
                                    <Image source={icons.menu} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', width: '100%', }}>
                            {header.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => headerTabBar(item.id)} >
                                    {item.id === tabindex ? (
                                        <LinearGradient
                                            colors={['#5691ad', '#37587c', '#1d3c5f']}
                                            start={{ x: 0, y: 0 }} end={{ x: 1, y: .8 }}
                                            style={styles.LinearGradiant}
                                        >
                                            <Text style={[styles.RealName1, { fontSize: 15 }]}>{item.name}</Text>
                                        </LinearGradient>
                                    ) :
                                        <LinearGradient
                                            colors={['#5691ad', '#37587c', '#1d3c5f']}
                                            start={{ x: 0, y: 0 }} end={{ x: 0, y: 0 }}
                                            style={styles.LinearGradiant}
                                        >
                                            <Text style={[styles.RealName1, { fontSize: 15 }]}>{item.name}</Text>
                                        </LinearGradient>}
                                </TouchableOpacity>

                            ))}
                        </View>
                        {tabindex === 1 ? (
                            <AllSearch />
                        ) : null}

                        {tabindex === 2 ? (
                            <People />
                        ) : null}


                        {tabindex === 3 ? (
                            <Event />
                        ) : null}

                        {tabindex === 4 ? (
                            <Ride />
                        ) : null}

                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView >
    );
};

export default App;