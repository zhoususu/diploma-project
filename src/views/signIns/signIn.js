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

export default class SignInOrUpScreen extends Component {
    constructor(props){
        super(props);
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
                        clearTextOnFocus={true} />
                </View>
                {/* 密码 */}
                <View style={[styles.userBox]}>
                    <Image style={[styles.icon]} source={require('../../resources/images/src/mima.png')} />
                    <TextInput secureTextEntry={true} placeholder ="请输入密码" placeholderTextColor="#a1a4bc" 
                        style={[styles.userStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} />
                </View>
                {/* 按钮 */}
                <View style={[styles.btnStyle]}>
                    <Text style={[styles.btnText]} onPress={Actions.tabs}>登录</Text>
                </View>
                {/* 连接 */}
                <View style={[styles.textStyle]}>
                    <Text style={[styles.text1]} onPress={Actions.signInOrUp}>注册新用户</Text>
                    <Text style={[styles.text2]} onPress={Actions.forget}>忘记密码？</Text>
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
        width: '80%',
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
        width: '85%',
    },
    btnStyle: {
        width: '80%',
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
        width: '40%',
        textAlign: 'left',
    },
    text2: {
        width: '40%',
        textAlign: 'right',
    }
});