import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, ColorPropType } from "react-native";
import Border from './inputBorder';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, icons, images } from '../../Constants/index';
import Modal from "react-native-modal";
import moment from "moment";
import ImagePicker from 'react-native-image-picker';


const AddEvent = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const [time, settime] = useState('');
  const [show, setShow] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const [categoryList, setcategoryList] = useState(["Popular Location", "High range", "Water falls", "For You"]);
  const [filePath, setFilePath] = useState({});


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

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
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
              />
              <TouchableOpacity >
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