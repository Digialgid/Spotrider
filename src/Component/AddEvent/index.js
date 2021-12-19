import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, PermissionsAndroid } from "react-native";
import Border from './inputBorder';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, icons, images } from '../../Constants/index';
import Modal from "react-native-modal";
import moment from "moment";
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

const AddEvent = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const [time, settime] = useState('');
  const [show, setShow] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const [categoryList, setcategoryList] = useState(["Popular Location", "High range", "Water falls", "For You"]);
  const [filePath, setFilePath] = useState({});
  const [Profilephoto, setProfilephoto] = React.useState("");


  const showDatepicker = () => {
    setMode('date');
    setShow(true);
  };

  const openCategoryPop = () => {
    setisVisible(true);
  };

  const closeCategoryPop = () => {
    setisVisible(false);
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

  const setModalVisible = (visible) => {
    setisVisible(visible);
  }
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
          source={images.Eventaddbg}>
          <View style={styles.viewafterimagebg}>
            <View>
              <TouchableOpacity style={{ marginStart: 10, marginTop: 10 }}>
                <Image source={icons.leftArrow} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
              </TouchableOpacity>
            </View>
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Event Name"
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
                placeholder="Discription"
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
                placeholder="Image Upload"
                value={Profilephoto}
              />
              <TouchableOpacity onPress={() => captureImage('photo')} >
                <Image source={icons.paperClip} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />
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

            <View style={styles.datetimeinput}>
              <View style={{ width: '50%', }}>
                <View
                  style={styles.StartDateTime}>
                  <TextInput
                    style={styles.input1}
                    placeholderTextColor={COLORS.white}
                    placeholder="Start Date"
                    value={date}
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
                    style={[styles.input1,]}
                    placeholderTextColor={COLORS.white}
                    placeholder="Number of Date"
                    value={date}
                  />
                  <TouchableOpacity onPress={showDatepicker} >
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
                placeholder="Time"
                value={time}
              />
              <TouchableOpacity onPress={showTimepicker}>
                <Image source={icons.clock} style={[styles.inputicon,]} />
              </TouchableOpacity>
            </View>
            <Border />
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Event Contact Person Number"
                keyboardType={"numeric"}
              />
              <TouchableOpacity>
                <Image source={icons.call} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Category"
              />
              <TouchableOpacity onPress={openCategoryPop}>
                <Image source={icons.drop_Down} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />


          </View>
          <TouchableOpacity style={styles.buttonBg} onPress={() => navigation.navigate('AddLocation')} >
            <Text style={styles.buttonText}>Submit</Text>
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
          <Modal isVisible={isVisible}
            onRequestClose={() => { setModalVisible(false) }}
            style={{ justifyContent: 'flex-end', alignContent: 'center', }} >
            <View style={{ backgroundColor: COLORS.white, margin: '1%' }}>
              <View >
                <View
                  style={[styles.inputView, { width: '90%', margin: '1%' }]}>
                  <TextInput
                    style={[styles.input, { color: 'grey' }]}
                    placeholderTextColor={'grey'}
                    placeholder="Search"
                  />
                  <TouchableOpacity>
                    <Image source={icons.drop_Down} style={styles.dropdown} />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalborder} />
                {categoryList && categoryList.map((item, index) => (
                  < View key={index} >
                    <Text style={styles.modallistitem} key={item}>{item}</Text>
                    <View style={styles.modaliemborder}></View>
                  </View>
                ))}
                {/* <View>
                  <TouchableOpacity onPress={openCategoryPop} style={{ flexDirection: 'row', backgroundColor: COLORS.darkOrange, alignItems: 'center', }}>
                    <Image source={icons.plus} style={[styles.inputicon, { margin: '3%', marginStart: 30, }]} />
                    <Text style={styles.addcadegory}>Add Category</Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
          </Modal>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEvent;