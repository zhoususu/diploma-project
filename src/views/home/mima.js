/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    ScrollView,
    TextInput,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Header from '../../components/header'; //头部导航
var Dimensions = require('Dimensions');
export default class Mima extends Component {
    constructor(props){
        super(props);
        this.phoneNum="18382468693";
        this.IDNum="";
        this.password="";
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                <Header title={"账户安全"} style={[styles.header]} />
                {/* 列表 */}
                <ScrollView>
                <View style={styles.box}>
                    <Text style={[styles.title]}>联系方式</Text>
                    <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                    clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.phoneNum=text}} defaultValue='18382468693'/>
                </View>
                <View style={styles.box}>
                    <Text style={[styles.title]}>身份证号</Text>
                    <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                    clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.IDNum=text}} defaultValue='510421199805268321'/>
                </View>
                <View style={styles.box}>
                    <Text style={[styles.title]}>密码</Text>
                    <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                    clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.password=text}} defaultValue='123456'/>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: Dimensions.get('window').width,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    title: {
        color: '#3e334d',
        fontSize: 14,
        width: Dimensions.get('window').width*0.25,
    },
    write: {
        padding: 0,
        fontSize: 14,
        width: Dimensions.get('window').width*0.7,
    },
  })