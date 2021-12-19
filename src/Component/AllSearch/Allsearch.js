import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import styles from './style';
import { COLORS, icons, images } from '../../Constants/index';

const AllSearch = ({ navigation }) => {

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

    const [bestplaceList, setBestPlaceList] = useState([{ id: 1, image: images.Location2 },
    { id: 2, image: images.Location3 },
    { id: 3, image: images.Location4 }, { id: 4, image: images.Location5 }]);



    return (

        <SafeAreaView style={styles.SafeAreaViewstyle}>


            <View style={styles.button}>
                <View style={styles.buttonbg}>
                    <Text style={styles.nearYou}>People</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.ViewAll}>View All</Text>
                </TouchableOpacity>
            </View>
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

            <View style={styles.button}>
                <View style={styles.buttonbg}>
                    <Text style={styles.nearYou}>Event</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.ViewAll}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={bestplaceList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <View style={styles.eventcontainer}>
                        <Image style={styles.imageStyle} resizeMode={'cover'} source={item.image} />

                        <View style={styles.afterimageevent}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity>
                                    <Text style={{ color: COLORS.white, fontSize: 10 }}> Date 27-02-2021 </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.imageTextContainer}>
                            <View >
                                <View>
                                    <Text style={styles.locationdistance}>
                                        Best Place Name
                                    </Text>
                                </View>
                                <View style={styles.bestPlaceDesc}>
                                </View>
                                <Text style={styles.locationdistance}>
                                    this is the best tiriout place this is the best turioie placr
                                </Text>
                            </View>

                        </View>
                    </View>
                )}
            />


            <View style={styles.button}>
                <View style={styles.buttonbg}>
                    <Text style={styles.nearYou}>Ride </Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.ViewAll}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={Notifications}
                scrollEnabled={false}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.rideContainer}>
                        <Image source={item.image} resizeMode={'cover'} style={styles.ridebackground} />
                        <View style={styles.rideimagecontainerposition}>
                            <View style={styles.sendreqContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%', alignItems: "center" }}>
                                    <View style={{ borderColor: COLORS.white, borderWidth: 1.5, marginTop: 10, width: 40, height: 1, backgroundColor: COLORS.white }} />
                                    <Image source={icons.place} style={[styles.inputicon, { tintColor: COLORS.white }]} />
                                    <View style={{ borderColor: COLORS.white, borderWidth: 1.5, marginTop: 10, width: 40, height: 1, backgroundColor: COLORS.white }} />
                                    <Image source={icons.place} style={[styles.inputicon, { tintColor: COLORS.white }]} />
                                    <View style={{ borderColor: COLORS.white, borderWidth: 1.5, marginTop: 10, width: 40, height: 1, backgroundColor: COLORS.white }} />
                                    <Image source={icons.flag} style={[styles.inputicon, { tintColor: COLORS.white }]} />
                                    <View style={{ borderColor: COLORS.white, borderWidth: 1.5, marginTop: 10, width: 30, height: 1, marginRight: 20, backgroundColor: COLORS.white }} />
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.sendRequestbg} onPress={() => navigation.navigate('Notifications')}>
                                        <Text style={styles.sendreqbuttontext}>Send Request</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.RealNameContainer}>
                                <View>
                                    <View>
                                        <Text style={styles.name}>Real Namew</Text>
                                        <View>
                                            <Text style={styles.RealNameDesc1}>
                                                ghghg hghgh ghghgh hghg njdfjd
                                                fhdjfjd fdgfhjdf dfdjhfd fdjfd</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                        <View style={styles.memberBudgetRow}>
                                            <Text style={styles.RealName1} >MEMBER - </Text>
                                            <Text style={[styles.RealName1, { color: COLORS.primary }]}>25</Text>
                                        </View>
                                        <View style={styles.memberBudgetRow}>
                                            <Text style={styles.RealName1}>   BUDGET -</Text>
                                            <Text style={[styles.RealName1, { color: COLORS.primary }]}>15000</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.rideimagebg}>
                                    <Image source={images.Startride}
                                        style={styles.resImage} />
                                </View>
                            </View>

                        </View>
                    </View>
                )}
            />

        </SafeAreaView >
    );
};

export default AllSearch;