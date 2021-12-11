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
                        <View style={{marginStart:20}}>
                            <Text style={{color:'#fff',textTransform:'capitalize',fontSize:40}}>Most </Text>
                            <Text style={{color:'#fff',textTransform:'capitalize',fontSize:35}}>Popular </Text>
                            <Text style={{color:'#fff',textTransform:'capitalize',fontSize:25}}>places for trip</Text>
                        </View>
                        <View style={{ backgroundColor: '#000000c0', width: '20%', padding: 10, borderRadius: 30, margin:'4%'}}>
                            <Text style={{ color: COLORS.white, }}>Near You</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: '90%', height: 200, alignSelf: 'center', }}>
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
                        </View>
                        <View style={{ backgroundColor: '#000000c0', width: '30%', padding: 10, borderRadius: 30, margin:'4%'}}>
                            <Text style={{ color: COLORS.white, }}>Best Places</Text>
                        </View>
                        <View style={{ alignItems: 'center',marginTop:10 }}>
                            <View style={{ width: '90%', height: 250, alignSelf: 'center', }}>
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
                                        <Text style={{ color: COLORS.white, fontSize: 15 }}>
                                            Best Place Name 
                                        </Text>
                                         </View> 
                                         <View style={{borderColor:'#fff',borderWidth:1,width:'20%',marginTop:3}}>
                                          </View>     
                                        <Text style={{ color: COLORS.white, fontSize: 10,}}>
                                            this is the best tiriout place this is the best turioie placr 
                                        </Text>
                                    </View>
                                   
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;