/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';
//第三方插件
import { Actions } from 'react-native-router-flux';
var Dimensions = require('Dimensions');
export default class HomeTabScreen extends Component {
    constructor(props){
        super(props);
    }

    _showLoading() {
        global.showLoading();
        setTimeout(()=>{
            global.closeLoading();
        },500)
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                {/* 标题 */}
                <View style={[styles.backView]}>
                    <Text style={[styles.headText]}>处方笺</Text>
                </View>
                {/* 第一行 */}
                <View style={[styles.box]}>
                    <View style={[styles.left]}>
                        <Text style={[styles.title]}>处方编号:</Text>
                        <Text style={[styles.write]}>0123456789</Text>
                    </View>
                    <View style={[styles.right]}>
                        <Text style={[styles.title]}>姓名：</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true}/>
                    </View>
                </View>
                {/* 第二行 */}
                <View style={[styles.box]}>
                    <View style={[styles.left]}>
                        <Text style={[styles.title]}>性别:</Text>
                        <Text style={[styles.write]}>男女</Text>
                    </View>
                    <View style={[styles.right]}>
                        <Text style={[styles.title]}>年龄：</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true}/>
                    </View>
                </View>
                {/* 第三行 */}
                <View style={[styles.box]}>
                    <View style={[styles.left]}>
                        <Text style={[styles.title]}>联系方式:</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true}/>
                    </View>
                    <View style={[styles.right]}>
                        <Text style={[styles.title]}>日期：</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true}/>
                    </View>
                </View>
                {/* 第四行 */}
                <View style={[styles.box]}>
                    <View style={[styles.left1]}>
                        <Text style={[styles.title]}>临床诊断：</Text>
                        <TextInput style={[styles.write1]}  clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={true} />
                    </View>
                </View>
                {/* 分界 */}
                <View style={[styles.fenge]}>
                    <Text style={[styles.sign]}>R</Text>
                </View>
                {/* 搜索 */}
                <View style={[styles.searchBox]}>
                    <Image style={[styles.icon]} source={require('../resources/images/src/sousuo.png')}/>
                    <TextInput placeholder ="请输入穴位首拼或者全名进行搜索" placeholderTextColor="#a1a4bc"
                        style={[styles.searchStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} 
                    />
                </View>
                {/* 穴位 */}
                {/* 注意 */}
                <View style={[styles.box]}>
                    <View style={[styles.left1]}>
                        <Text style={[styles.title]}>注意：</Text>
                        <TextInput style={[styles.write2]}  clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={true} />
                    </View>
                </View>
                {/* 医师 */}
                <View style={[styles.box]}>
                    <View style={[styles.left]}>
                        <Text style={[styles.title]}>医师：</Text>
                        <TextInput style={[styles.write3]}  clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={true} />
                    </View>
                    <View style={[styles.btn]}>
                        <Text style={{color:'#ffffff',fontSize: 13,}}>确定提交</Text>
                    </View>
                </View>
                {/* <View style={[{marginTop: 10}]}>
                    <Button onPress={Actions.signInOrUp} title="免注册登录" />
                </View>
                <View style={[{marginTop: 10}]}>
                    <Button onPress={() => this._showLoading()} title="Loading" />
                </View>
                <View style={[{marginTop: 10}]}>
                    <Button onPress={() => global.toast('这是消息提示')} title="Toast" />
                </View>
                <View style={[{marginTop: 10}]}>
                    <Button onPress={Actions.topShow} title="内容页" />
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    backView: {
        justifyContent: 'center',
        backgroundColor: '#0d6eff',
        width: '100%',
        height: '8%',
    },
    headText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    },
    box: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        paddingTop: 10,
        paddingLeft:7,
        justifyContent: 'space-between',
    },
    left: {
        flexDirection: 'row',
        width: Dimensions.get('window').width/2,
        alignItems: 'center',
    },
    left1: {
        flexDirection: 'row',
        width: Dimensions.get('window').width*0.95,
        alignItems: 'flex-start',
    },
    right: {
        flexDirection: 'row',
        width: Dimensions.get('window').width/2,
        paddingLeft: 15,
        alignItems: 'center',
    },
    title: {
        color: '#3e334d',
        fontSize: 14,
    },
    write: {
        borderBottomWidth: 1,
        width: '65%',
        padding: 0,
        fontSize: 14,
        height:25,
    },
    write1: {
        borderBottomWidth: 1,
        lineHeight: 20,
        width: '80%',
        padding: 0,
        height:25,
        fontSize: 14,
    },
    write2: {
        borderBottomWidth: 1,
        lineHeight: 20,
        width: '88%',
        padding: 0,
        height:25,
        fontSize: 14,
    },
    write3: {
        borderBottomWidth: 1,
        lineHeight: 20,
        width: '85%',
        padding: 0,
        height:25,
        fontSize: 14,
    },
    searchBox: {
        backgroundColor: '#f7f7f7',
        width: Dimensions.get('window').width*0.8,
        borderRadius:40,
        marginTop: 10,
        flexDirection:'row',
        alignItems:'center',
    },
    searchStyle: {
        padding: 1,
        flex:1,
        height:25,
        fontSize: 12,
    },
    icon: {
        width: 15,
        height: 15,
        marginLeft: 20,
        marginRight: 10,
    },
    fenge: {
        paddingTop: '2%',
        paddingLeft: 10,
        width: Dimensions.get('window').width,
        borderBottomWidth: 2,
        borderBottomColor: '#f7f7f7',
    },
    sign: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    btn: {
        backgroundColor: '#0d6eff',
        borderRadius:50,
        width:Dimensions.get('window').width*0.3,
        justifyContent: 'center',
        alignItems:'center',
        marginRight: '2%',
    }
});