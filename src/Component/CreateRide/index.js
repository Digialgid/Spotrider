import React, { useState } from "react";
import {
  SafeAreaView, View, Image, Text, ScrollView,
  PermissionsAndroid, ImageBackground, TextInput, TouchableOpacity
} from "react-native";
import Border from './inputBorder';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, icons, images } from '../../Constants/index';
import moment from "moment";
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';


const CreateEvent = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const [time, settime] = useState('');
  const [show, setShow] = useState(false);
  const [filePath, setFilePath] = useState("");
  const [Profilephoto, setProfilephoto] = React.useState("");

  const showDatepicker = (e) => {
    setMode('date');
    setShow(true);
  };


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    if (mode == "date") {
      console.log(mode)
      setDate(moment(currentDate).format("DD-MM-YYYY "));
    }
    else {
      console.log(currentDate.toString())
      console.log(moment(currentDate).format("hh:mm a"));
      settime(moment(currentDate).format("hh:mm a"));
      // console.log("time",time);
    }
  };

  const showTimepicker = () => {
    setMode('time');
    setShow(true);
  };


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
          source={images.CreaterideBG}>
          <View style={styles.viewafterimagebg}>
            <View>
              <TouchableOpacity style={{ marginStart: 10, marginTop: 10 }}>
                <Image source={icons.leftArrow} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
              </TouchableOpacity>
            </View>

            {/* <View
              style={styles.inputView}> */}
            {/* <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Profile Image"
                value={filePath}
              />
              <TouchableOpacity onPress={() => captureImage('photo')}>
                <Image source={icons.paperClip} style={styles.inputicon} />
              </TouchableOpacity> */}
            <View style={{ alignItems: 'center', marginTop: '1%', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => captureImage('photo')}>
                <Image
                  source={Profilephoto === "" ? images.bg2 : ({ uri: Profilephoto })}
                  style={{ height: 100, width: 100, borderRadius: 50, }}
                />
                <View style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 5,

                }}>
                  <Image source={icons.edit}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: COLORS.white
                    }} />
                </View>
              </TouchableOpacity>
              <Text style={{ color: COLORS.white, fontSize: 16 }}>Profile Image</Text>
            </View>

            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Kilometers"
                keyboardType={"numeric"}
              />
              <TouchableOpacity>
                <Image source={icons.edit} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />

            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Budget"
                keyboardType={"numeric"}
              />
              <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
                <Image source={icons.edit} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />

            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Comment"
              />
              <TouchableOpacity>
                <Image source={icons.comment} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />

            <View style={styles.datetimeinput}>
              <View style={{ width: '50%', }}>
                <View style={styles.StartDateTime}>
                  <TextInput
                    style={styles.input1}
                    value={date}
                    placeholderTextColor={COLORS.white}
                    placeholder="Start Date"
                  />
                  <TouchableOpacity onPress={showDatepicker}>
                    <Image source={icons.calendar} style={styles.inputicon1} />
                  </TouchableOpacity>
                </View>
                <View style={styles.timeborder} />
              </View>
              <View style={{ width: '50%', }}>
                <View
                  style={styles.StartDateTime} >
                  <TextInput
                    style={styles.input1}
                    placeholderTextColor={COLORS.white}
                    placeholder="Start Time"
                    value={time}
                  />
                  <TouchableOpacity onPress={showTimepicker} >
                    <Image source={icons.clock} style={[styles.inputicon1, { marginStart: 10 }]} />
                  </TouchableOpacity>
                </View>
                <View style={styles.timeborder} />
              </View>
            </View>
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Add Location"
              />
              <TouchableOpacity>
                <Image source={icons.place} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Search Member"
              />
              <TouchableOpacity >
                <Image source={icons.search} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />


          </View>
          <TouchableOpacity style={styles.buttonBg} onPress={() => navigation.navigate('AddEvent')}>
            <Text style={styles.buttonText}>Save and Send Request </Text>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}


        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEvent;