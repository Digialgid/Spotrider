import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import styles from './style';
import { COLORS, icons, images } from '../../Constants/index';

const Followers = ({ navigation }) => {
    const [FollowerList, setFollowersList] = useState([
        { id: 1, image: images.bg1, realName: 'ranu Patidar', nickName: "Ranu" },
        { id: 2, image: images.bg2, realName: 'ranu Patidar', nickName: "Ranu Patidar" },
        { id: 3, image: images.bg3, realName: 'ranu Patidar', nickName: "Ranu" }])


    return (
        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.Addlocationbg}>
                    <View style={styles.viewafterimagebg}>
                        <View>
                            <TouchableOpacity style={styles.arrwoeiconbg}>
                                <Image source={icons.leftArrow} style={styles.ArrowIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.arrwoeiconbg}>
                                <Text style={styles.folllowerdHeading}>Followers</Text>
                            </TouchableOpacity>
                        </View>
                        {FollowerList && FollowerList.map((item, index) => (
                            <View style={styles.folowerrsRowContainer} key={index}>
                                <View style={styles.imageContainer}>
                                    <Image source={item.image} style={styles.followimage}></Image>
                                </View>
                                <View>
                                    <Text style={styles.Nickname}>{item.nickName}</Text>
                                    <Text style={styles.Realname}>{item.realName}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.buttonbg}>
                                        <Text styles={styles.followtext}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Followers;