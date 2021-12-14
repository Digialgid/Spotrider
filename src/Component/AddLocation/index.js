import React from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import Border from './inputBorder';
import styles from './style';
import { COLORS,FONTS, icons, images } from '../../Constants';
const Addlocation = ({navigation}) => {
    return (
        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.Addbg}>
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


                        <View style={styles.inputView}>
                            <View style={styles.inputView1}>
                                <TouchableOpacity>
                                    <Image source={icons.place} style={styles.inputicon} />
                                </TouchableOpacity>
                                <TextInput
                                    style={[styles.input]}
                                    placeholderTextColor={COLORS.white}
                                    placeholder="Type Location here"
                                />
                            </View>

                            <TouchableOpacity>
                                <Image source={icons.location} style={styles.inputicon} />
                            </TouchableOpacity>
                        </View>
                        <Border />
                        <View style={styles.inputView}>
                            <View style={styles.inputView1}>
                                <TouchableOpacity>
                                    <Image source={icons.place} style={styles.inputicon} />
                                </TouchableOpacity>
                                <TextInput
                                    style={[styles.input]}
                                    placeholderTextColor={COLORS.white}
                                    placeholder="Location Name"
                                />
                            </View>
                        </View>
                        <Border />

                        <View style={styles.datetimeinput}>
                            <View style={{ width: '50%', }}>
                                <View
                                    style={styles.StartDateTime}>
                                    <TextInput
                                        style={styles.input1}
                                        placeholderTextColor={COLORS.white}
                                        placeholder="State Name"
                                    />

                                </View>
                                <View style={styles.timeborder} />
                            </View>
                            <View style={{ width: '50%', }}>
                                <View
                                    style={styles.StartDateTime} >
                                    <TextInput
                                        style={styles.input1}
                                        placeholderTextColor={COLORS.white}
                                        placeholder="District Name"
                                    />

                                </View>
                                <View style={styles.timeborder} />
                            </View>
                        </View>
                        <View style={styles.descriptionView}>
                            <Text style={{ color: COLORS.white, ...FONTS.textInput, marginStart: 5 }}>Description</Text>
                            <TextInput
                                style={styles.descriptiontext}
                                placeholderTextColor={COLORS.white}
                                multiline={true}
                            />
                        </View>
                        <View style={styles.uploadimagefolder}>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>UPLOAD IMAGE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonBg} onPress={() => navigation.navigate('Followers')} >
                        <Text style={styles.buttonText}>DONE</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Addlocation;