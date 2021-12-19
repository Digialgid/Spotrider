import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TextInput, PermissionsAndroid,TouchableOpacity } from "react-native";
import Border from './inputBorder';
import styles from './style';
import { COLORS, FONTS, icons, images } from '../../Constants';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';


const Addlocation = ({ navigation }) => {

    const [filePath, setFilePath] = useState("");
    const [Profilephoto, setProfilephoto] = React.useState("");
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };


    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchImageLibrary(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
                let result = response.assets[0].uri
                setProfilephoto(result)
            });
        }
    };
    return (
        <SafeAreaView style={styles.SafeAreaViewstyle}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode="cover"
                    source={images.Addbg}>
                    <View style={styles.viewafterimagebg}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ marginStart: 10, marginTop: 10 }}>
                                <Image source={icons.leftArrow} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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


                        <View style={styles.inputView}>
                            <View style={styles.inputView1}>
                                <TouchableOpacity>
                                    <Image source={icons.place} style={styles.inputicon} />
                                </TouchableOpacity>
                                <TextInput
                                    style={[styles.input]}
                                    placeholderTextColor={COLORS.white}
                                    placeholder="Type Location here"
                                />
                            </View>

                            <TouchableOpacity>
                                <Image source={icons.location} style={styles.inputicon} />
                            </TouchableOpacity>
                        </View>
                        <Border />
                        <View style={styles.inputView}>
                            <View style={styles.inputView1}>
                                <TouchableOpacity>
                                    <Image source={icons.place} style={styles.inputicon} />
                                </TouchableOpacity>
                                <TextInput
                                    style={[styles.input]}
                                    placeholderTextColor={COLORS.white}
                                    placeholder="Location Name"
                                />
                            </View>
                        </View>
                        <Border />

                        <View style={styles.datetimeinput}>
                            <View style={{ width: '50%', }}>
                                <View
                                    style={styles.StartDateTime}>
                                    <TextInput
                                        style={styles.input1}
                                        placeholderTextColor={COLORS.white}
                                        placeholder="State Name"
                                    />

                                </View>
                                <View style={styles.timeborder} />
                            </View>
                            <View style={{ width: '50%', }}>
                                <View
                                    style={styles.StartDateTime} >
                                    <TextInput
                                        style={styles.input1}
                                        placeholderTextColor={COLORS.white}
                                        placeholder="District Name"
                                    />

                                </View>
                                <View style={styles.timeborder} />
                            </View>
                        </View>
                        <View style={styles.descriptionView}>
                            <Text style={{ color: COLORS.white, ...FONTS.textInput, marginStart: 5 }}>Description</Text>
                            <TextInput
                                style={styles.descriptiontext}
                                placeholderTextColor={COLORS.white}
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity onPress={() => captureImage('photo')}>
                            {Profilephoto ? (
                                <View style={styles.uploadimagefolder}>
                                   <Image  source={ ({ uri: Profilephoto })} 
                                    style={{width:'100%',height:'100%',resizeMode:'cover',borderRadius:5}}/>
                                </View>
                            ) : (
                                 <View style={styles.uploadimagefolder} >
                                 <Text style={styles.buttonText}>UPLOAD IMAGE</Text>
                             </View>
                            )}
                           
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={styles.buttonBg} onPress={() => navigation.navigate('Followers')} >
                        <Text style={styles.buttonText}>DONE</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Addlocation;