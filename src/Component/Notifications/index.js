import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import styles from './style';
import { COLORS, SIZES, icons, images } from '../../Constants/index';


const Notifications = ({ navigation }) => {

    const [Notifications, setNotificationsList] = useState([
        { id: 1, image: images.bg1, Heading: 'Event Name', discription: "lorem ipsum  lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum" },
        { id: 2, image: images.bg2, Heading: 'Ride Name', discription: "lorem ipsumlorem ipsum" },
        { id: 3, image: images.bg3, Heading: 'Ride Name', discription: "lorem ipsumlorem  dyreyteyteytyet euytueytueute ejuteuitet etuyeutie etyueytue aq-w0q980q :Lxpllaklsplz dj  ipsumlorem  ipsum" }])


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
                                <Text style={styles.NotificationsHeading}>Notifications</Text>
                            </TouchableOpacity>
                        </View>
                        {Notifications && Notifications.map((item, index) => (
                            <View style={styles.NotificationsContainer} key={index}>
                                <View style={{ width: '35%', }}>
                                    <Image source={item.image} style={{ width: '100%' , minHeight:'10%', borderBottomLeftRadius:10,borderTopLeftRadius:10,}} />
                                </View>
                                <View>
                                    <View style={{ width: '65%', margin: '1%',marginStart:10 }}>
                                        <Text style={styles.EventName}>
                                            {item.Heading}
                                        </Text>
                                        <Text style={styles.Discription}>
                                            {item.discription}
                                        </Text>
                                        <View style={{ flexDirection: 'row',marginTop:10,marginBottom:10 }}>
                                            <TouchableOpacity style={styles.buttonbg}>
                                                <Text style={styles.buttontext}>Declin</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.buttonbg,{marginStart:10}]}>
                                                <Text style={styles.buttontext}>Accept</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notifications;