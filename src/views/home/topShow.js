/**
 * Created by 媲美爱 on 2018-05-29.
 */

import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
//第三方插件
import { Actions } from 'react-native-router-flux';
//自定义组件
import Common from '../../components/common'; //公共类
import Header from '../../components/header'; //头部导航
var Dimensions = require('Dimensions');
export default class TopShowScreen extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View style={[global.styles.screen]}>
                <Header title={'病历详情'} doneText={"完成"} style={[styles.header]} />
                <ScrollView>
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
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>治疗记录</Text>
                        <Text style={[styles.write]}>统计图</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    write: {
        padding: 0,
        fontSize: 14,
        width: Dimensions.get('window').width*0.7,
    },
});
