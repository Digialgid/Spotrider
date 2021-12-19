import React, { useState } from "react";
import { SafeAreaView, View, Image, FlatList, Text, ScrollView, ImageBackground, TouchableOpacity, } from "react-native";
import styles from './style';
import { COLORS, icons, SIZES, images } from '../../Constants/index';

const HomeScreen = ({ navigation }) => {

    const [defaultRating, setDefaultRating] = useState(2);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [SlidetList, setSliderList] = useState([
        { id: 1, image: images.bg7 },
        { id: 2, image: images.bg8 },
        { id: 3, image: images.bg9 },
        { id: 4, image: images.bg10 }]);
    const [text, setText] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])

    return (

        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.Locationbg}>
                    <View style={styles.viewafterimagebg}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <TouchableOpacity style={{ marginStart: 10, marginTop: 10 }} onPress={()=>navigation.navigate('HomeScreen')}>
                                <Image source={icons.HomeIcon} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-evenly' }}>
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

                        <FlatList
                            data={SlidetList}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={[styles.sliderContainer]}>
                                    <Image style={styles.imageStyle} resizeMode={'cover'} source={item.image} />
                                    <Text style={styles.imagesliderText}>place   near </Text>
                                </View>
                            )}
                        />

                        <View style={{ width: '95%', height: 200, alignSelf: 'center', }}>
                            <Image style={styles.imageStyle} resizeMode={'cover'} source={images.bg8} />
                            <View style={styles.imageTextContainer}>
                                <View>
                                    <Text style={styles.locationName1}>Location Name</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                        <Text style={styles.locationName1}>District Name:</Text>
                                        <Text style={styles.locationName1}>  State Name:</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.card1ratingImage}>
                                        <Text style={{ color: COLORS.white }}>Rating -</Text>
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
                                    <Text style={styles.locationName1}>Distance - 125 km  </Text>
                                </View>
                            </View>
                        </View>

                        <FlatList
                            data={text}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.card2Container}>
                                    <Image style={styles.imageStyle} resizeMode={'cover'} source={images.bg8} />
                                    <View style={styles.imageTextContainer}>
                                        <View>
                                            <Text style={styles.locationName2}>Location Name</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                <Text style={styles.locationName2}>District Name:</Text>
                                                <Text style={styles.locationName2}>  State Name:</Text>
                                            </View>
                                            <View style={styles.card2ratingImage}>
                                                <Text style={styles.locationName2}>Distance - 125 km | </Text>
                                                <Text style={styles.locationName2}>Rating -</Text>
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

export default HomeScreen;