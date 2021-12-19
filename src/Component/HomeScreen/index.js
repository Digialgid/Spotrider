import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, TextInput, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import styles from './style';
import { COLORS, icons, images } from '../../Constants/index';
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = ({ navigation }) => {

    const [defaultRating, setDefaultRating] = useState(2);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [NearByList, setNearBy] = useState([{ image: images.bg, rating: 5, km: 150 },
                                              { image: images.bg2, rating: 5, km: 150 },]);
    const imagesss = [
        images.sliderhome1,
        images.sliderhome2,
        images.sliderhome1,
        images.sliderhome2,
    ]
    const [currentIndex, setcurrentindex] = useState(0);
    const [populatlocationList, setPopolarlocationlist] = useState([{ id: 1, image: images.Location2 },
    { id: 2, image: images.Location3 },
    { id: 3, image: images.Location4 },
    { id: 4, image: images.Location5 }]);

    const [bestplaceList, setBestPlaceList] = useState([{ id: 1, }, { id: 2 }, { id: 3 }, { id: 4 }]);

    const desc = ["Most Polular places for trip",
        "Most Polular places for",
        "best Places ",
        "Most Polular places for "]

    return (

        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.Locationbg}>
                    <View style={styles.viewafterimagebg}>
                        <View
                            style={styles.inputView}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={COLORS.white}
                                placeholder="Search"
                            />
                            <TouchableOpacity >
                                <Image source={icons.search} style={[styles.inputicon, { marginRight: 20 }]} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: 200, height: 250 }}>
                            <SliderBox images={imagesss} sliderBoxHeight={250}
                                paginationBoxStyle={{
                                    alignSelf: "flex-start",
                                    width: 10,
                                    height: 10,
                                    marginLeft: 20,
                                }} title={desc} currentImageEmitter={i => setcurrentindex(i)}
                            />
                            <Text style={styles.slideetext}>{desc[currentIndex]}</Text>
                        </View>

                        <View style={styles.button}>
                            <View style={styles.buttonbg}>
                                <Text style={styles.nearYou}>Near You</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.ViewAll}>View All</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={populatlocationList}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ width: 300, height: 200, alignSelf: 'center', margin: 10 }}>
                                    <Image style={styles.imageStyle} resizeMode={'cover'} source={item.image} />

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
                                            <Text style={styles.locationdistance}>
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
                                            <Text style={styles.locationdistance}>3.5 of 5</Text>
                                            <Text style={styles.locationdistance}>125 km </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />


                        <View style={styles.button}>
                            <View style={styles.buttonbg}>
                                <Text style={styles.nearYou}>Best Places</Text>
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

                                <View style={{ width: 350, height: 240, alignSelf: 'center', margin: 10,marginBottom:50 }}>
                                    <Image style={styles.imageStyle} resizeMode={'cover'} source={images.bg2} />

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
                                        <View >
                                            <View>
                                                <Text style={styles.locationdistance}>
                                                    Best Place Name
                                                </Text>
                                            </View>
                                            <View style={{ borderColor: '#fff', borderWidth: 1, width: '20%', marginTop: 3 }}>
                                            </View>
                                            <Text style={styles.locationdistance}>
                                                this is the best tiriout place this is the best turioie placr
                                            </Text>
                                        </View>

                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView >
    );
};

export default HomeScreen;