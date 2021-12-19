import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import styles from './style';
import { COLORS, icons, images } from '../../Constants/index';

const People = ({ navigation }) => {

    const header = [{ id: 1, name: "All" }, { id: 2, name: "People" }, { id: 3, name: "Event" }, { id: 4, name: "Ride" }]
    const [Notifications, setNotificationsList] = useState([
        {
            id: 1, image: images.bg1, Heading: 'Event Name',
            discription: "lorem ipsum  lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        },
        { id: 2, image: images.bg2, Heading: 'Ride Name', discription: "lorem ipsumlorem ipsum" },
        {
            id: 3, image: images.bg3, Heading: 'Ride Name',
            discription: "lorem ipsumlorem   :Lxpllaklsplz dj  ipsumlorem  ipsum"
        },
        {
            id: 4, image: images.bg3, Heading: 'Ride Name',
            discription: "lorem ipsumlorem   :Lxpllaklsplz dj  ipsumlorem  ipsum"
        }])


    return (

        <FlatList
            data={Notifications}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id} q
            renderItem={({ item }) =>
            (
                <View style={styles.NotificationsContainer} >
                    <View style={{ width: '35%', height: 150 }}>
                        <Image source={item.image} style={styles.nicknameimage} />
                    </View>
                    <View style={{ width: '65%', marginStart: 10 }}>
                        <View style={styles.nickNameContainer}>
                            <Text style={styles.nickName}>Nick Name</Text>
                            <View>
                                <TouchableOpacity style={styles.buttonbgfollow}
                                    onPress={() => navigation.navigate('Notifications')}>
                                    <Text style={styles.followtext}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <Text style={styles.RealName}>Real Namew</Text>
                            <View>
                                <Text style={styles.RealNameDesc}> njdfjd fhdjfjd fdgfhjdf dfdjhfd fdjfd</Text>
                            </View>
                        </View>


                        <View style={styles.Followercontainer}>
                            <View style={styles.folowercount}>
                                <Text style={styles.nickName} > 250 </Text>
                                <Text style={styles.followers} >Followers</Text>
                            </View>
                            <View style={styles.folowercount}>
                                <Text style={styles.nickName}> 250 </Text>
                                <Text style={styles.followers}>Following</Text>
                            </View>
                        </View>

                    </View>
                </View>
            )
            }
        />


    );
};

export default People;