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
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        // width: '100%',
        padding: 10,
        fontSize: 18,
        height: 44,
        flex: 1,
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