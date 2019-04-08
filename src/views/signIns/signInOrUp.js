/**
 * Created by 媲美爱 on 2018-05-26.
 */

import React, { Component } from 'react';
import {
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import console = require('console');
var Dimensions = require('Dimensions');
export default class SignInOrUpScreen extends Component {
    constructor(props){
        super(props);
        this.username='';
        this.password='';
        this.repass='';
    }
    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
        this.refs.repass.blur();
    };

    register = () => {
        if(this.password === ''){
            global.toast('请输入密码');
        } else if (this.repass === ''){
            global.toast('请确认密码');
        } else if(this.password === this.repass) {
            fetch('http://47.106.102.235:8088/dimples/user-system?'+'account='+this.username+'&password='+this.password,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            }).then((response) => response.json()).then(
                (responsJson) => {
                    if(responsJson.message === '操作成功'){
                        global.toast('注册成功');
                        Actions.signIn();
                    } else {
                        global.toast('注册失败，请重试');
                        // console.warn(responsJson.message);
                    }
                }
            )
        } else {
            global.toast('密码不一致');
        }
    }

    render() {
        return (
            <View style={[global.styles.screen]} onPress={this.blurTextInput}>
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
                    <TextInput placeholder ="请输入手机号码" placeholderTextColor="#a1a4bc" ref='username'
                        style={[styles.userStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true}  onChangeText={(text) => {this.username=text}}/>
                </View>
                {/* 密码 */}
                <View style={[styles.userBox]}>
                    <Image style={[styles.icon]} source={require('../../resources/images/src/mima.png')} />
                    <TextInput secureTextEntry={true} placeholder ="请输入密码" placeholderTextColor="#a1a4bc" ref='password' 
                        style={[styles.userStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} onChangeText={(text) => {this.password=text}}/>
                </View>
                <View style={[styles.userBox]}>
                    <Image style={[styles.icon]} source={require('../../resources/images/src/mima.png')} />
                    <TextInput secureTextEntry={true} placeholder ="请确认密码" placeholderTextColor="#a1a4bc"  ref='repass'
                        style={[styles.userStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} onChangeText={(text) => {this.repass=text}}/>
                </View>
                {/* 按钮 */}
                <TouchableOpacity style={[styles.btnStyle]} onPress={this.register}>
                    <Text style={[styles.btnText]}>注册</Text>
                </TouchableOpacity>
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
        width:Dimensions.get('window').width*0.85,
    },
    btnStyle: {
        width: Dimensions.get('window').width*0.8,
        borderRadius: 20,
        marginTop: 30,
        backgroundColor: '#0d6eff',
        marginBottom: '15%',
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