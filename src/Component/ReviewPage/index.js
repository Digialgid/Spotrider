import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, TextInput, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import styles from './style';
import { COLORS, SIZES, icons, images, FONTS } from '../../Constants/index';


const ReviewPage = ({ navigation }) => {
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [defaultRating, setDefaultRating] = useState(2);

    const [Notifications, setNotificationsList] = useState([
        { id: 1, image: images.bg1, Heading: 'Event Name', discription: "lorem ipsum lorem" },
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
                                <Text style={styles.NotificationsHeading}>Rate</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.starimagecontainer}>
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
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Submit</Text>
                        </TouchableOpacity>
                        <View style={styles.descriptionView}>
                            <Text style={{ color: COLORS.white, ...FONTS.textInput, marginStart: 5 }}>Description</Text>
                            <TextInput
                                style={styles.descriptiontext}
                                placeholderTextColor={COLORS.white}
                                // placeholder="Add Review Comment here..."
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity style={styles.arrwoeiconbg}>
                            <Text style={styles.NotificationsHeading}>Reviews</Text>
                        </TouchableOpacity>
                        <FlatList
                            data={Notifications}
                            scrollEnabled={false}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.ReviewContainer}>
                                    <Text style={styles.ReviewHeading}>Review -1 </Text>
                                    <Text style={styles.reviewDescription}>is simply dummy text of the printing and typesetting industry. L
                                        orem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s, when an unknown printer took a galley of type and scrambled it to </Text>
                                </View>
                            )}
                        />

                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ReviewPage;