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
import tabs from '../../App'; 
import NetUitl from '../../components/NetUitl';
// import console = require('console');
var Dimensions = require('Dimensions');

export default class SignInOrUpScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'zss',
            password: '123456',
        }
    }

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
                        clearTextOnFocus={true} onChangeText={(text) => {this.username = text}} />
                </View>
                {/* 密码 */}
                <View style={[styles.userBox]}>
                    <Image style={[styles.icon]} source={require('../../resources/images/src/mima.png')} />
                    <TextInput secureTextEntry={true} placeholder ="请输入密码" placeholderTextColor="#a1a4bc" 
                        style={[styles.userStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} onChangeText={(text) => {this.password = text}} />
                </View>
                {/* 按钮 */}
                <TouchableOpacity style={[styles.btnStyle]}
                    onPress={
                        this.state.username === 'zss' &&
                        this.state.password === '123456'
                            ? Actions.tabs
                            : global.toast('账号或密码错误')
                    }
                >
                    <Text style={[styles.btnText]} >登录</Text>
                </TouchableOpacity>
                {/* 连接 */}
                <View style={[styles.textStyle]}>
                    <Text style={[styles.text1]} onPress={Actions.signInOrUp}>注册新用户</Text>
                    <Text style={[styles.text2]} onPress={Actions.forget}>忘记密码？</Text>
                </View>
            </View>
        )
    }

    onPressCallback = () => {
       if(this.state.username === 'zss' && this.state.password === '123456'){
           Actions.tabs
       }
    }
    
    onLoginSuccess() {
        const { navigator } = this.props;
        if (navigator) {
         navigator.push({
            key: "tabs",
            component:{tabs}
         });
        }
    }
}


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
        marginBottom: '15%',
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 30,
    },
    textStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text1: {
        width: Dimensions.get('window').width*0.4,
        textAlign: 'left',
    },
    text2: {
        width: Dimensions.get('window').width*0.4,
        textAlign: 'right',
    }
});