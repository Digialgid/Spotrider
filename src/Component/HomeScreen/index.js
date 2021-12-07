import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TouchableOpacityBase, TextInput, TouchableOpacity } from "react-native";
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, icons, images } from '../../Constants/index';

const HomeScreen = ({ navigation }) => {

    const [locationlist, setLocationList] = useState([{}])

    return (

        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.Addlocationbg}>
                    <View style={styles.viewafterimagebg}>
                        <View style={{ backgroundColor: '#000000c0', width: '20%', padding: 10, borderRadius: 30, }}>
                            <Text style={{ color: COLORS.white, }}>Near You</Text>
                        </View>
                        <View style={{ width: '80%', height: 100 }}>
                            <Image source={images.Addlocationbg} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', backgroundColor: "#000000c0", position: 'absolute' }}>
                                <View>
                                    <Text style={{ color: COLORS.white, fontSize: 10 }}>
                                        Location Name
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: COLORS.white, fontSize: 10 }}>3.5 of 5</Text>
                                    <Text style={{ color: COLORS.white, fontSize: 10 }}>125 km </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;