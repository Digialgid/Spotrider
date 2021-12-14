import React, { useState } from "react";
import {
    SafeAreaView, View, Image, Text, ScrollView,
    PermissionsAndroid, ImageBackground, TextInput, TouchableOpacity
} from "react-native";
import styles from './style';
import { COLORS, icons, images, SIZES } from '../../Constants/index';

const CreateEvent = ({ navigation }) => {
    const [Budgetlist, setBudgetList] = useState([{ type: "petrol", price: "1000", }, { type: "Room", price: "2000", }]);

    return (
        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.budgerbackground}>
                    <View style={styles.viewafterimagebg}>
                        <View>
                            <TouchableOpacity style={{ marginStart: 10, marginTop: 10 }}>
                                <Image source={icons.leftArrow} style={[styles.inputicon, { tintColor: COLORS.lightOrange }]} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: SIZES.height / 3 }}>
                            <View style={styles.rowcontainer}>
                                <View style={styles.rowborder1}>
                                    <Text style={styles.budgetfontstyle}>Activities</Text>
                                </View>
                                <View style={styles.rowborder2}>
                                    <Text style={styles.budgetfontstyle}>Amount</Text>
                                </View>
                            </View>
                            {Budgetlist && Budgetlist.map((item, index) => (
                                <View style={styles.rowcontainer} key={index}>
                                    <View style={styles.rowborder1}>
                                        <Text style={{ fontSize: 20, color: COLORS.white }}>{item.type}</Text>
                                    </View>
                                    <View style={styles.rowborder2}>
                                        <Text style={styles.budgetfontstyle}>{item.price}</Text>
                                    </View>

                                </View>
                            ))}
                            <View style={styles.rowcontainer}>
                                <View style={[styles.rowborder1, { backgroundColor: COLORS.darkOrange }]}>
                                    <Text style={styles.budgetfontstyle}>Total</Text>
                                </View>
                                <View style={[styles.rowborder2, { backgroundColor: COLORS.darkOrange }]}>
                                    <Text style={styles.budgetfontstyle}>27000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateEvent;