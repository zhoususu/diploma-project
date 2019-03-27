/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    FlatList,
    TextInput,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
var Dimensions = require('Dimensions');
export default class BoughtTabScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                <View style={[styles.backView]}>
                    <Text style={[styles.headText]}>病历管理</Text>
                </View>
                {/* 搜索框 */}
                <View style={[styles.searchBox]}>
                    <Image style={[styles.icon]} source={require('../resources/images/src/sousuo.png')}/>
                    <TextInput placeholder ="请输入患者姓名进行搜索" placeholderTextColor="#a1a4bc"
                        style={[styles.searchStyle]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} 
                    />
                </View>
                {/* 列表 */}
                <FlatList
                    data={[
                        {key: '仲曜瑞',image: require('../resources/images/src/man.png'),time: '2019-03-14 08:00',sign: '类风湿性关节炎'},
                        {key: '刘巧兰',image: require('../resources/images/src/man.png'),time: '2019-03-14 08:10',sign: '月经不调'},
                        {key: '王绍辉',image: require('../resources/images/src/man.png'),time: '2019-03-14 08:20',sign: '发烧、流感'},
                        {key: '刘天蓉',image: require('../resources/images/src/man.png'),time: '2019-03-14 09:07',sign: '慢性结肠炎'},
                        {key: '徐翰林',image: require('../resources/images/src/man.png'),time: '2019-03-14 09:58',sign: '急性肠胃炎'},
                        {key: '慕易',image: require('../resources/images/src/man.png'),time: '2019-03-14 10:10',sign: '腰椎间盘突出'},
                        {key: '张梓林',image: require('../resources/images/src/man.png'),time: '2019-03-14 12:05',sign: '面部神经麻痹'},
                        {key: '王若琴',image: require('../resources/images/src/man.png'),time: '2019-03-13 09:00',sign: '中风偏瘫'},
                        {key: '赵磊磊',image: require('../resources/images/src/man.png'),time: '2019-03-13 09:21',sign: '类风湿性关节炎'},
                        {key: '欧阳聆妍',image: require('../resources/images/src/man.png'),time: '2019-03-13 10:00',sign: '脑震荡后遗症'},
                        {key: '刘轩',image: require('../resources/images/src/man.png'),time: '2019-03-13 10:19',sign: '三叉神经痛'},
                        // {key: 'Joel'},
                        // {key: 'John'},
                        // {key: 'Jillian'},
                        // {key: 'Jimmy'},
                        // {key: 'Julie'},
                    ]}
                    renderItem={({item}) => 
                        <View style={styles.box}>
                            <Image source={item.image} style={[styles.image]}/>
                            <View>
                                <View style={styles.box1}>
                                    <Text style={styles.name}>{item.key}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <Text style={styles.symbol}>{item.sign}</Text>
                            </View>
                        </View>
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
        // borderBottomWidth: 1,
        // borderBottomColor: '#f1f1f1',
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
    searchBox: {
        backgroundColor: '#f7f7f7',
        width: '95%',
        borderRadius:40,
        marginTop: 10,
        flexDirection:'row',
        alignItems:'center',
    },
    searchStyle: {
        padding: 1,
        width: '85%',
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 20,
        marginRight: 10,
    },
  })