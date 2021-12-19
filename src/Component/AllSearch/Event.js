import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import styles from './style';
import { COLORS, icons, images, SIZES } from '../../Constants/index';

const Event = ({ navigation }) => {

    const [Event, setEventlist] = useState([
        {
            id: 1, image: images.bg4, Heading: 'Event Name',
            discription: "lorem ipsum  lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        },
        { id: 2, image: images.bg5, Heading: 'Ride Name', discription: "lorem ipsumlorem ipsum" },
        {
            id: 3, image: images.bg3, Heading: 'Ride Name',
            discription: "lorem ipsumlorem   :Lxpllaklsplz dj  ipsumlorem  ipsum"
        },
        {
            id: 4, image: images.bg8, Heading: 'Ride Name',
            discription: "lorem ipsumlorem   :Lxpllaklsplz dj  ipsumlorem  ipsum"
        }])

    const [GridShow, setGridShow] = useState(true)

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
            <FlatList
                data={Event}
                horizontal={false}
                // numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <>
                        <View style={{ width: 200, height: 250, margin: 4 }}>
                            <Image style={styles.imageStyleEvent} resizeMode={'cover'} source={item.image} />

                            <View style={styles.afterimageevent}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: COLORS.white, fontSize: 10 }}> Date 27-02-2021 </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.imageTextContainerEvent}>
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
                    </>
                )}
            />

            <FlatList
                data={Event}
                horizontal={false}
                // numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <>
                        <View style={{ width: 200, height: 200, margin: 4 }}>
                            <Image style={styles.imageStyleEvent} resizeMode={'cover'} source={item.image} />

                            <View style={styles.afterimageevent}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: COLORS.white, fontSize: 10 }}> Date 27-02-2021 </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.imageTextContainerEvent}>
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
                    </>
                )}
            />
        </View>
    );
};

export default Event;