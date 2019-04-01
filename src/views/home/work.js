/**
 * Created by 媲美爱 on 2018-05-29.
 */

import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
} from 'react-native';
//第三方插件
import { Actions } from 'react-native-router-flux';
var Dimensions = require('Dimensions');
//自定义组件
import Common from '../../components/common'; //公共类
import Header from '../../components/header'; //头部导航

export default class WorkScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                <Header title={"内容页"} doneText={"完成"} style={[styles.header]} />
                <ScrollView contentContainerStyle = {{flex:1}}>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>姓名</Text>
                        <Text style={[styles.write]}>张梓林</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>性别</Text>
                        <Text style={[styles.write]}>男</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>年龄</Text>
                        <Text style={[styles.write]}>34岁</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>就诊日期</Text>
                        <Text style={[styles.write]}>2019-03-14 12:05</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>病症</Text>
                        <Text style={[styles.write]}>面部神经麻痹</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>治疗穴位</Text>
                        <Text style={[styles.write]}>足三里、百汇、阳陵泉、内关、中脘、尺泽</Text>
                    </View>
                    <Text style={[styles.title1]}>治疗参数设置</Text>
                    <View style={[styles.size]}>
                        <View style={[styles.sizeBox]}>
                            <View style={[styles.one]}>
                                <Text style={[styles.boxTitle]}>温度
                                    <Text style={[styles.boxDan]}>（℃）</Text>
                                </Text>
                                <View style={[styles.boxBack]}>
                                    <TouchableOpacity style={[styles.boxJian]}>
                                        <Image source={require('../../resources/images/tabs/jian.png')} style={[styles.boxImage]}/>
                                    </TouchableOpacity>
                                    <Text style={[styles.boxContent]}>30</Text>
                                    <TouchableOpacity style={[styles.Jia]}>
                                        <Image source={require('../../resources/images/tabs/jia.png')} style={[styles.boxImage]}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>治疗穴位</Text>
                        <Text style={[styles.write]}>足三里、百汇、阳陵泉、内关、中脘、尺泽</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    size: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeBox: {
        width:Dimensions.get('window').width*0.95,
        height:Dimensions.get('window').height*0.3,
        borderRadius: 25,
        flexDirection: 'row',
        elevation: 2,
        padding: 10,
    },
    one: {
        width:Dimensions.get('window').width*0.20,
        borderWidth:1,
        alignItems: 'center',
    },
    boxTitle:{
        fontSize:15,
    },
    boxDan: {
        fontSize:10,
    },
    boxBack: {
        backgroundColor: 'red',
        // #f9f9f9
        borderRadius: 30,
        marginTop: 5,
        height: Dimensions.get('window').height*0.20,
    },
    boxJian: {
        width:Dimensions.get('window').width*0.15,
        height:Dimensions.get('window').width*0.15,
        borderWidth:2,
        borderRadius:60,
        borderColor:'#0d6eff',
    },
    boxImage: {
        width:Dimensions.get('window').height*0.05,
        height:Dimensions.get('window').height*0.05,
    },
    
    
    box:{
        width: Dimensions.get('window').width,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    title: {
        color: '#3e334d',
        fontSize: 14,
        width: Dimensions.get('window').width*0.25,
    },
    title1: {
        padding: 10,
        color: '#3e334d',
        fontSize: 14,
        width: Dimensions.get('window').width,
    },
    write: {
        padding: 0,
        fontSize: 14,
        width: Dimensions.get('window').width*0.7,
    },
});