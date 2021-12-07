import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, ImageBackground, TouchableOpacityBase, TextInput, TouchableOpacity } from "react-native";
import Border from './inputBorder';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, icons, images } from '../../Constants/index';
import Button from './Button';
import Modal from "react-native-modal";

const CreateEvent = ({ navigation }) => {

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
  const [Budgetlist, setBudgetList] = useState([{ type: "petrol", price: "1000", }, { type: "Room", price: "2000", }]);

  const showDatepicker = () => {
    setMode('date');
    setShow(true);
  };
  const openBudgetpop = () => {
    setisVisible(true);
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
            <View >
              <TouchableOpacity style={{ marginStart: 10, marginTop: 10 }}>
                <Image source={icons.leftArrow} style={[styles.inputicon, { tintColor: COLORS.darkOrange }]} />
              </TouchableOpacity>
            </View>
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.white}
                placeholder="Profile Image"
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
                placeholder="Kilometers"
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
              />
              <TouchableOpacity onPress={openBudgetpop}>
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
              <View style={{ width: '45%', }}>
                <View
                  style={styles.StartDateTime} >
                  <TextInput
                    style={styles.input1}
                    placeholderTextColor={COLORS.white}
                    placeholder="Start Time"
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
          {/* < Button  onPress={navigation.navigate('AddEvent')}/> */}
          <TouchableOpacity style={styles.buttonBg} onPress={navigation.navigate('AddEvent')}>
            <Text style={styles.buttonText}>Save and Send Request </Text>
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
            onRequestClose={() => { setModalVisible(false) }}
            style={{ width: '60%', alignSelf: 'center' }} >
            <View style={{ backgroundColor: '#fff', height: 'auto', }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: '2%' }}>
                <Text style={{ fontSize: 20 }}>Activity</Text>
                <Text style={{ fontSize: 20 }}>Amount</Text>
              </View>
              {Budgetlist && Budgetlist.map((item) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: '2%' }}>
                  <Text style={{ fontSize: 20 }} >{item.type}</Text>
                  <Text style={{ fontSize: 20 }}>{item.price}</Text>
                </View>
              ))}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ backgroundColor: COLORS.darkOrange, width: '50%', alignItems: 'center' }}>
                  <Text style={{ color: COLORS.white, fontSize: 20 }}>Total</Text>
                </View>
                <View style={{ backgroundColor: COLORS.darkOrange, width: '50%', alignItems: 'center' }}>
                  <Text style={{ color: COLORS.white, fontSize: 20 }}>27000</Text>
                </View>
              </View>
            </View>



          </Modal>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEvent;