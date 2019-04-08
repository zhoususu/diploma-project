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
// import console = require('console');
// import console = require('console');

export default class WorkScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            temperature_text:30,
            intensity_text:5,
            time_text: 30,
        };
        this.tem = 30;
        this.intensity =5;
        this.time = 30;
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                <Header title={"治疗设置"} style={[styles.header]} />
                <ScrollView contentContainerStyle = {{flex:1}}>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>姓名</Text>
                        <Text style={[styles.write]}>{this.props.username}</Text>
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
                        <Text style={[styles.title]}>联系方式</Text>
                        <Text style={[styles.write]}>12345678901</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>就诊日期</Text>
                        <Text style={[styles.write]}>2019/03/14 12:05</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>诊断结果</Text>
                        <Text style={[styles.write]}>{this.props.usersign}</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>治疗穴位</Text>
                        <Text style={[styles.write]}>肩井、命门、肾俞、风市、委中、承山</Text>
                    </View>
                    <Text style={[styles.title1]}>治疗参数设置</Text>
                    <View style={[styles.size]}>
                        <View style={[styles.sizeBox]}>
                            <View style={[styles.one]}>
                                <Text style={[styles.boxTitle]}>温度
                                    <Text style={[styles.boxDan]}>（℃）</Text>
                                </Text>
                                <View style={[styles.boxBack]}>
                                    <TouchableOpacity style={[styles.boxJian]}
                                        onPress={() => {
                                            if(this.tem > 0 && this.tem <= 50){
                                                this.tem-=1;
                                                this.state.temperature_text = this.tem;
                                                this.setState({temperature_text:this.tem});
                                            }
                                        }}>
                                        <Image source={require('../../resources/images/tabs/jian.png')} style={[styles.boxImage]}/>
                                    </TouchableOpacity>
                                    <Text style={[styles.boxContent]}>{this.state.temperature_text}</Text>
                                    <TouchableOpacity style={[styles.Jia]} 
                                        onPress={() => {
                                            if(this.tem >= 0 && this.tem < 50){
                                                this.tem+=1;
                                                this.state.temperature_text = this.tem;
                                                this.setState({temperature_text:this.tem});
                                            }
                                        }}>
                                        <Image source={require('../../resources/images/tabs/jia.png')} style={[styles.boxImage]}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.one]}>
                                <Text style={[styles.boxTitle]}>强度
                                    <Text style={[styles.boxDan]}>（级）</Text>
                                </Text>
                                <View style={[styles.boxBack]}>
                                    <TouchableOpacity style={[styles.boxJian]}
                                        onPress={() => {
                                            if(this.intensity > 0 && this.intensity <= 10){
                                                this.intensity-=1;
                                                this.state.intensity_text = this.intensity;
                                                this.setState({intensity_text:this.intensity});
                                            }
                                        }}
                                    >
                                        <Image source={require('../../resources/images/tabs/jian.png')} style={[styles.boxImage]}/>
                                    </TouchableOpacity>
                                    <Text style={[styles.boxContent]}>{this.state.intensity_text}</Text>
                                    <TouchableOpacity style={[styles.Jia]}
                                        onPress={() => {
                                            if(this.intensity >= 0 && this.intensity < 10){
                                                this.intensity+=1;
                                                this.state.intensity_text = this.intensity;
                                                this.setState({intensity_text:this.intensity});
                                            }
                                        }}
                                    >
                                        <Image source={require('../../resources/images/tabs/jia.png')} style={[styles.boxImage]}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.one]}>
                                <Text style={[styles.boxTitle]}>时间
                                    <Text style={[styles.boxDan]}>（min）</Text>
                                </Text>
                                <View style={[styles.boxBack]}>
                                    <TouchableOpacity style={[styles.boxJian]}
                                        onPress={() => {
                                            if(this.time > 0 && this.time <= 30){
                                                this.time-=1;
                                                this.state.time_text = this.time;
                                                this.setState({time_text:this.time});
                                            }
                                        }}
                                    >
                                        <Image source={require('../../resources/images/tabs/jian.png')} style={[styles.boxImage]}/>
                                    </TouchableOpacity>
                                    <Text style={[styles.boxContent]}>{this.state.time_text}</Text>
                                    <TouchableOpacity style={[styles.Jia]}
                                        onPress={() => {
                                            if(this.time >= 0 && this.time < 30){
                                                this.time+=1;
                                                this.state.time_text = this.time;
                                                this.setState({time_text:this.time});
                                            }
                                        }}
                                    >
                                        <Image source={require('../../resources/images/tabs/jia.png')} style={[styles.boxImage]}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.size]}>
                        <TouchableOpacity style={[styles.btn]} onPress={() => {Actions.collect({username:this.props.username,usersign:this.props.usersign,
                            intensity1:this.intensity,time1:this.time,temperature1:this.tem})}}>
                            <Text style={[styles.btnText]}>开始治疗</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView> 
            </View>
        )
    }

    jia(max) {
        if(this.state.temperature_text <= max){
            this.state.temperature_text += 1;
        }
    }

    jian() {

    }
}
const styles = StyleSheet.create({
    size: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeBox: {
        width:Dimensions.get('window').width*0.9,
        height:Dimensions.get('window').height*0.3,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 2,
        padding: 10,
    },
    one: {
        width:Dimensions.get('window').width*0.20,
        alignItems: 'center',
    },
    boxTitle:{
        fontSize:15,
    },
    boxDan: {
        fontSize:10,
    },
    boxBack: {
        backgroundColor: '#e9e9e9',
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 5,
        height: Dimensions.get('window').height*0.20,
    },
    boxJian: {
        width:Dimensions.get('window').width*0.12,
        height:Dimensions.get('window').width*0.12,
        borderWidth:2,
        borderRadius:60,
        borderColor:'#0d6eff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Jia: {
        width:Dimensions.get('window').width*0.12,
        height:Dimensions.get('window').width*0.12,
        borderRadius:60,
        backgroundColor:'#0d6eff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxImage: {
        width:Dimensions.get('window').width*0.05,
        height:Dimensions.get('window').width*0.05,
    },
    boxContent:{
        fontSize:16,
        color:'#0d6eff',
        marginTop:10,
        marginBottom:10,
    },
    btn: {
        width: Dimensions.get('window').width*0.8,
        borderRadius: 20,
        marginTop: 30,
        backgroundColor: '#0d6eff',
        marginBottom:Dimensions.get('window').width*0.05,
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 30,
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