/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    View,
    Text,
    Alert,
    Image,
    TextInput,
} from 'react-native';
//第三方插件
import { Actions } from 'react-native-router-flux';
// import console = require('console');
import ModalDropdown from 'react-native-modal-dropdown';
var Dimensions = require('Dimensions');
export default class HomeTabScreen extends Component {
    constructor(props){
        super(props);
        this.name='';
        this.sex='';
        this.age='';
        this.phoneNum='';
        this.date='';
        this.diagnose='';
    }

    

    _showLoading() {
        global.showLoading();
        setTimeout(()=>{
            global.closeLoading();
        },500)
    }

    daytime(){
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth()+1).toString();
        var day =date.getDate().toString();
        return year+'/'+month+ '/'+day;
    }

    submit(){
        fetch('http://47.106.102.235:8088/dimples/recipe'+'',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify({
                name: this.name,
                sex: this.sex,
                age: this.age,
                phone: this.phoneNum,
                date: this.date,
                diagnose: this.diagnose,
            }),
        }).then((response) => response.json()).then(
            (responsJson) => {
                if(responsJson.message === '操作成功'){
                    Actions.tabs();
                } else {
                    global.toast('提交失败');
                }
            }
        )
    }
    

    render() {
        this.date=this.daytime();
        return (
            <View style={[global.styles.screen]}>
                {/* 标题 */}
                <View style={[styles.backView]}>
                    <Text style={[styles.headText]}>处方笺</Text>
                </View>
                <ScrollView>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>姓名</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.name=text}}/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>性别</Text>
                        {/* <ModalDropdown options={['男', '女']} style={[styles.write]} /> */}
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.sex=text}}/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>年龄</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.age=text}}/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>联系方式</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.phoneNum=text}}/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>就诊日期</Text>
                        <Text style={[styles.write]}>{this.date}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>诊断结果</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={true} onChangeText={(text) => {this.diagnose=text}}/>
                    </View>
                    <View style={styles.box1}>
                        <View style={[styles.searchBox]}>
                            <Image style={[styles.icon]} source={require('../resources/images/src/sousuo.png')}/>
                            <TextInput placeholder ="请输入穴位首拼或者全名进行搜索" placeholderTextColor="#a1a4bc"
                                style={[styles.searchStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                                clearTextOnFocus={true} onChangeText={(text) => {this.check(text)}}
                            />
                            {/* <ModalDropdown options={['option 1', 'option 2']}/> */}
                        </View>
                    </View>
                    <View style={styles.box1}>
                        <View style={styles.xue}>
                            <Text>百汇</Text>
                        </View>
                        <View style={styles.xue}>
                            <Text>百汇</Text>
                        </View>
                        <View style={styles.xue}>
                            <Text>百汇</Text>
                        </View>
                    </View>
                    <View style={styles.box1}>
                        <View style={styles.xue}>
                            <Text>百汇</Text>
                        </View>
                        <View style={styles.xue}>
                            <Text>百汇</Text>
                        </View>
                        <View style={styles.xue}>
                            <Text>百汇</Text>
                        </View>
                    </View>
                    <View style={[styles.size]}>
                        <TouchableOpacity style={[styles.btn]} onPress={()=>{this.submit()}}>
                            <Text style={[styles.btnText]}>确认提交</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {/* 搜索 */}
                
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
    check(text){
        fetch('http://47.106.102.235:8088/dimples/acupoint/name-spell?'+'data='+text,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then(
            (responsJson) => {
                console.warn(responsJson.data);
            }
        );
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
    searchBox: {
        backgroundColor: '#f7f7f7',
        width: Dimensions.get('window').width*0.8,
        borderRadius:40,
        marginTop: 5,
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
    box: {
        width: Dimensions.get('window').width,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    box1: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#f1f1f1',
        marginBottom:15,
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
    xue: {
        borderWidth: 2,
        padding:2,
        width:Dimensions.get('window').width*0.2,
        borderRadius:20,
        alignItems: 'center',
        borderColor: '#0d6eff',
        marginLeft: Dimensions.get('window').width*0.05,
        marginRight: Dimensions.get('window').width*0.05,
    },
    size: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: Dimensions.get('window').width*0.8,
        borderRadius: 20,
        marginTop: 30,
        backgroundColor: '#0d6eff',
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 30,
    },
});