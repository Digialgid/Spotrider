import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity,FlatList } from "react-native";
import styles from './style';
import { COLORS, SIZES, icons, images } from '../../Constants/index';


const Notifications = ({ navigation }) => {

    const [Notifications, setNotificationsList] = useState([
        { id: 1, image: images.bg1, Heading: 'Event Name', discription: "lorem ipsum lorem ipsum loremi psum lorem ipsumlorem ipsumlorem ipsum" },
        { id: 2, image: images.bg2, Heading: 'Ride Name', discription: "lorem ipsumlorem ipsum" },
        { id: 3, image: images.bg3, Heading: 'Ride Name', discription: "lorem ipsumlorem:Lxpllaklsplz djipsumlorem  ipsum" },
        { id: 4, image: images.bg3, Heading: 'Ride Name', discription: "lorem ipsumlorem:Lxpllaklsplz djipsumlorem  ipsum" }])


    return (

        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.notificationbg}>
                    <View style={styles.viewafterimagebg}>
                        <View>
                            <TouchableOpacity style={styles.arrwoeiconbg}>
                                <Image source={icons.leftArrow} style={styles.ArrowIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.arrwoeiconbg}>
                                <Text style={styles.NotificationsHeading}>Notifications</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={Notifications}
                            scrollEnabled={false}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.NotificationsContainer}>
                                    <View style={{ width: '35%'}}>
                                        <Image source={item.image} style={{
                                            width: '100%', height: '100%',
                                            borderBottomLeftRadius: 10, borderTopLeftRadius: 10,
                                        }} />
                                    </View>
                                    <View>
                                        <View style={{ width: '65%', margin: '1%', marginStart: 10, }}>
                                            <Text style={styles.EventName}>
                                                {item.Heading}
                                            </Text>
                                            <Text style={styles.Discription}>
                                                {item.discription}
                                            </Text>
                                            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                                <TouchableOpacity style={styles.declinebuttton}>
                                                    <Text style={styles.buttontext}>Decline</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.buttonbg, { marginStart: 10 }]} onPress={() => navigation.navigate('Location')}>
                                                    <Text style={styles.buttontext}>Accept</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notifications;