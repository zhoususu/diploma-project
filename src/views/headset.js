/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    FlatList,
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
var Dimensions = require('Dimensions');
export default class HeadsetTabScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                <View style={[styles.backView]}>
                    <Text style={[styles.headText]}>患者列表</Text>
                </View>
                {/* 列表 */}
                <FlatList
                    data={[
                        {key: '仲曜瑞',image: require('../resources/images/src/man.png'),btn: '待治疗',sign: '类风湿性关节炎'},
                        {key: '刘巧兰',image: require('../resources/images/src/man.png'),btn: '待治疗',sign: '月经不调'},
                        {key: '王绍辉',image: require('../resources/images/src/man.png'),btn: '待治疗',sign: '发烧、流感'},
                        {key: '刘天蓉',image: require('../resources/images/src/man.png'),btn: '待治疗',sign: '慢性结肠炎'},
                        {key: '徐翰林',image: require('../resources/images/src/man.png'),btn: '待治疗',sign: '急性肠胃炎'},
                        {key: '慕易',image: require('../resources/images/src/man.png'),btn: '治疗中',sign: '腰椎间盘突出'},
                        {key: '张梓林',image: require('../resources/images/src/man.png'),btn: '治疗中',sign: '面部神经麻痹'},
                        {key: '王若琴',image: require('../resources/images/src/man.png'),btn: '治疗中',sign: '中风偏瘫'},
                        {key: '赵磊磊',image: require('../resources/images/src/man.png'),btn: '治疗中',sign: '类风湿性关节炎'},
                        {key: '欧阳聆妍',image: require('../resources/images/src/man.png'),btn: '治疗中',sign: '脑震荡后遗症'},
                        {key: '刘轩',image: require('../resources/images/src/man.png'),btn: '治疗中',sign: '三叉神经痛'},
                    ]}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={item.btn==='待治疗'?Actions.Work:Actions.collect}>
                            <View style={styles.box}>
                                <Image source={item.image} style={[styles.image]}/>
                                <View>
                                    <View style={styles.box1}>
                                        <Text style={styles.name}>{item.key}</Text>
                                        <Text style={item.btn==='治疗中'?[styles.time]:[styles.time1]}>{item.btn}</Text>
                                    </View>
                                    <Text style={styles.symbol}>{item.sign}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    box: {
        width: Dimensions.get('window').width,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    box1: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        borderRadius: 50,
        width: 40,
        height: 40,
    },
    name: {
        width: '40%',
        color: '#3e334d',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    time1: {
        width: '52%',
        fontSize:10,
        textAlign: 'right',
        color: 'red',
    },
    time: {
        width: '52%',
        color: '#a1a4bc',
        fontSize:10,
        textAlign: 'right',
    },
    symbol: {
        color: '#a1a4bc',
        fontSize: 13,
        paddingLeft: '5%',
        paddingTop: 3,
    },
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
  })