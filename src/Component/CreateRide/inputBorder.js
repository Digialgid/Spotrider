import React from 'react';
import { StyleSheet, View } from 'react-native';
import  {COLORS,} from '../../Constants'
const InputBorder = () => {
    return (
        <View style={[styles.columnView]}></View>
    );
};

const styles = StyleSheet.create({
    columnView: {
        margin: 1,
        width: '90%',
        borderWidth: .8,
        borderColor: COLORS.white,
        paddingHorizontal: 5,
        alignSelf:'center'
    },
});

export default InputBorder ;
