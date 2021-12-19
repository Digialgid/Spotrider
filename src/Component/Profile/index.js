import React, { useState } from 'react'
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TextInput,
     PermissionsAndroid, TouchableOpacity, FlatList } from "react-native";
import styles from './style';
import { COLORS, FONTS, icons, images } from '../../Constants';
import {
    launchCamera,
    launchImageLibrary
  } from 'react-native-image-picker';
  
const App = ({ navigation }) => {
    const [savedLocation, setsavedLocation] = useState([{ id: 1, image: images.bg2, },
    { id: 2, image: images.bg2, },
    { id: 3, image: images.bg2, },
    { id: 4, image: images.bg2, }, { id: 5, image: images.bg2, }, { id: 6, image: images.bg2, }])
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
          launchCamera(options, (response) => {
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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <TouchableOpacity style={{ marginStart: 10, marginTop: 10 }} onPress={() => navigation.navigate('HomeScreen')}>
                                <Image source={icons.HomeIcon} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-evenly' }}>
                                {/* <TouchableOpacity style={styles.menuiconstyle}>
                                    <Image source={icons.search} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                                </TouchableOpacity> */}
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image source={icons.location} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image source={icons.Setting} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row',justifyContent:'space-around',alignItems:'center',paddingBottom:20,}}>
                            <View style={{flexDirection:"column",justifyContent:'space-around',height:160}}>
                                <TouchableOpacity onPress={() => captureImage('photo')}>
                                    <Image
                                        source={Profilephoto === "" ? images.bg2 : ({ uri: Profilephoto })}
                                        style={{ height: 100, width: 100, borderRadius: 50, }}
                                    />
                                    <View style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 20,
                                        borderRadius:100,
                                        backgroundColor:COLORS.darkOrange,
                                        padding:5,
                                        borderColor:COLORS.white,
                                        borderWidth:.6

                                    }}>
                                        <Image source={icons.edit}
                                            resizeMode="contain"
                                            style={{
                                                width: 10,
                                                height: 10,
                                                tintColor: COLORS.white,
                                            }} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ color: COLORS.white, fontSize: 16,alignSelf:'center' }}>250 Following</Text>

                            </View>
                            <View style={{width:'60%',flexDirection:"column",justifyContent:'space-around',height:150}}>
                                <Text style={{ color: COLORS.white, fontSize: 13 }}>Nick Name</Text>
                                <Text style={{ color: COLORS.white,  fontSize: 13  }}>real Name</Text>

                                <Text style={{ color: COLORS.white,  fontSize: 13  }}>uryuyr ryuryt rtyuryt rtyur rtyrutr rtyrur ryruytum </Text>
                                <TouchableOpacity style={{backgroundColor:COLORS.blue,width:100,height:25,borderRadius:5,
                                    justifyContent:'center',alignItems:'center'}}>
                                    <Text  style={{ color: COLORS.white,  fontSize: 13  }}>Follow</Text>
                                </TouchableOpacity>
                                <Text style={{ color: COLORS.white, fontSize: 16, }}>250 Following</Text>

                            </View>

                        </View>
                    </View>

                    <View style={{ backgroundColor: COLORS.white, flex: 3, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                        <View style={{ alignItems: 'center', marginTop: 30, }}>
                            <FlatList
                                data={savedLocation}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <View style={{ width: 100, height: 100, margin: 10 }}>
                                        <Image source={item.image} style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode='cover' />
                                    </View>
                                )}
                            />
                        </View>

                        <View >
                            <FlatList
                                data={savedLocation}
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
                        </View>
                    </View>


                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App;