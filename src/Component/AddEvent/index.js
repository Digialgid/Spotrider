import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TouchableOpacityBase, TextInput, TouchableOpacity, ColorPropType } from "react-native";
import Border from './inputBorder';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, icons, images } from '../../Constants/index';
import Button from './Button';
import Modal from "react-native-modal";

const AddEvent = ({ navigation }) => {

  const [profile, setprofile] = useState('');
  const [kilometer, setKilometer] = useState('');
  const [Budget, setBudget] = useState('');
  const [comment, setcomment] = useState('');
  const [CreateRide, setCreateRide] = useState('');
  const [search, setsearch] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [time, settime] = useState('');
  const [show, setShow] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const [categoryList, setcategoryList] = useState(["Popular Location", "High range", "Water falls", "For You"]);

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
    console.log("event", event);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showTimepicker = () => {
    setMode('time');
    setShow(true);
  };

  const setModalVisible = (visible) => {
    setisVisible(visible);
  }

  // if (!isVisible)
  //   return null
  return (

    <SafeAreaView style={styles.SafeAreaViewstyle}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={images.Addlocationbg}>
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
              <TouchableOpacity>
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
              <View style={{ width: '45%', }}>
                <View
                  style={styles.StartDateTime}>
                  <TextInput
                    style={styles.input1}
                    placeholderTextColor={COLORS.white}
                    placeholder="Start Date"
                  />
                  <TouchableOpacity style={{ width: '100%' }} onPress={showDatepicker}>
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
                    placeholder="Number of "
                  />
                  <TouchableOpacity onPress={showTimepicker} style={{ width: '100%' }}>
                    <Image source={icons.clock} style={styles.inputicon1} />
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
              />
              <TouchableOpacity>
                <Image source={icons.clock} style={styles.inputicon} />
              </TouchableOpacity>
            </View>
            <Border />
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Event Contact Person Number"
                keyboardType={"Numeric"}
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
          <TouchableOpacity style={styles.buttonBg} onPress={navigation.navigate('AddLocation')} >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          {show && (
            <DateTimePicker

              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Modal isVisible={isVisible}
            onRequestClose={() => {setModalVisible(false) }}
            style={{ width: '50%', justifyContent: 'flex-end', alignContent: 'center', alignSelf: 'flex-end' }} >
            <View style={{ backgroundColor: '#fff', height: 'auto', }}>
              <View >
                {categoryList && categoryList.map((item) => (
                  <>
                    <Text style={{ fontSize: 18, fontWeight: '400', margin: '3%', }} key={item}>{item}</Text>
                    <View style={{ borderBottomColor: 'grey', borderWidth: .5 }}></View>
                  </>
                ))}
                <View>
                  <TouchableOpacity onPress={openCategoryPop} style={{ flexDirection: 'row', backgroundColor: COLORS.darkOrange, alignItems: 'center', }}>
                    <Image source={icons.plus} style={[styles.inputicon, { margin: '3%' }]} />
                    <Text style={{ marginLeft: '2%', color: COLORS.white, fontSize: 15 }}>Add Category</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEvent;