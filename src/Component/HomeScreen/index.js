import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TouchableOpacityBase, TextInput, TouchableOpacity, FlatList } from "react-native";
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, icons, images } from '../../Constants/index';

const HomeScreen = ({ navigation }) => {

    const [defaultRating, setDefaultRating] = useState(2);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [NearByList, setNearBy] = useState([{ image: images.bg1, rating: 5, km: 150 },
    { image: images.bg2, rating: 5, km: 150 },]);
    

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
                        <View style={{ display: 'flex', flexDirection: 'row', margin: 20 }}>
                            {NearByList && NearByList.map((item, index) => (
                                <View style={{ width: '80%', height: 250, alignSelf: 'center', }}>
                                    <Image style={styles.imageStyle} resizeMode={'cover'} source={images.bg1} />

                                    <View style={{ position: 'absolute', right: 10, top: 10, height: 50, width: '20%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <TouchableOpacity>
                                                <Image source={icons.share} style={[styles.inputicon,]} />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Image source={icons.heart} style={[styles.inputicon,]} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.imageTextContainer}>
                                        <View>
                                            <Text style={{ color: COLORS.white, fontSize: 14 }}>
                                                Location Name
                                            </Text>

                                            <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-evenly' }}>
                                                {maxRating.map((item, key) => {
                                                    return (
                                                        <TouchableOpacity
                                                            activeOpacity={0.7}
                                                            key={item}
                                                            onPress={() => setDefaultRating(item)}>

                                                            <Image
                                                                style={styles.starImageStyle}
                                                                source={item <= defaultRating ? (icons.star) : (icons.empty)}
                                                            />
                                                        </TouchableOpacity>
                                                    );
                                                })}
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{ color: COLORS.white, fontSize: 14 }}>3.5 of 5</Text>
                                            <Text style={{ color: COLORS.white, fontSize: 14 }}>125 km </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                            )}

                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;