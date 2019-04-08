/**
 * Created by 媲美爱 on 2018-05-26.
 */

import React, { Component } from 'react';
import {
    Image,
    TextInput,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
var Dimensions = require('Dimensions');
export default class ForgetScreen extends Component {
    constructor(props){
        super(props);
        this.username='';
        this.idnumber='';
    }

    login = () => { 
        if(this.username===''){
            global.toast('请输入用户名');
        } else if(this.idnumber === ''){
            global.toast('请输入身份证号');
        } else{
            fetch('http://47.106.102.235:8088/dimples/user-system/phone/card',{
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            }).then((response) => response.json()).then(
                (responsJson) => {
                    if(responsJson.message === '操作成功'){
                        Actions.tabs();
                    } else {
                        global.toast('账号或身份证号码错误');
                        // console.warn(responsJson.message);
                    }
                }
            )
        }
    };

    render() {
        return (
            <View style={[global.styles.screen]}>
                {/* logo */}
                <View style={[styles.nameBox]}>
                    <Image source={require('../../resources/images/src/logo.png')} style={[styles.logo]} />
                    <Text style={[styles.logoName]}>
                        穴位敏化诊疗系统
                    </Text>
                </View>
                {/* 用户名 */}
                <View style={[styles.userBox]}>
                    <Image style={[styles.icon]} source={require('../../resources/images/src/yonghu.png')} />
                    <TextInput placeholder ="请输入手机号码" placeholderTextColor="#a1a4bc"
                        style={[styles.userStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} onChangeText={(text) => {this.username=text}} />
                </View>
                {/* 密码 */}
                <View style={[styles.userBox]}>
                    <Image style={[styles.icon]} source={require('../../resources/images/src/50.png')} />
                    <TextInput placeholder ="请输入身份证号" placeholderTextColor="#a1a4bc" 
                        style={[styles.userStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} onChangeText={(text) => {this.idnumber=text}} />
                </View>
                {/* 按钮 */}
                <View style={[styles.btnStyle]}>
                    <Text style={[styles.btnText]} onPress={this.login}>登录</Text>
                </View>
                {/* 连接 */}
                <View style={[styles.textStyle]}>
                    <Text>已有账号？</Text>
                    <Text style={[styles.text1]} onPress={Actions.signIn}>返回登录</Text>
                </View>
            </View>
        )
    }
}

const onButtonPress = () => {
  };

const styles = StyleSheet.create ({
    logoName: {
        color: '#0d6eff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '-25%',
        marginBottom: '35%',
    },
    nameBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        maxWidth: '20%',
        resizeMode: 'contain',
        marginTop: '-15%',
    },
    userBox: {
        width: Dimensions.get('window').width*0.8,
        borderBottomWidth: 1,
        borderBottomColor: '#a1a4bc',
        flexDirection:'row',
        alignItems:'center',
        paddingTop: 15,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    userStyle: {
        padding: 1,
        width: Dimensions.get('window').width*0.85,
    },
    btnStyle: {
        width: Dimensions.get('window').width*0.8,
        borderRadius: 20,
        marginTop: 30,
        backgroundColor: '#0d6eff',
        marginBottom: '25%',
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 30,
    },
    textStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text1: {
        color: '#0d6eff',
    }
});