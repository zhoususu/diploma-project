/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
var Dimensions = require('Dimensions');
export default class MineTabScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                <View style={[styles.backView]}>
                    <Image source={require('../resources/images/src/miss.jpg')} style={[styles.imageStyle]} />
                    <Text style={[styles.headText]}>Sharon Sue</Text>
                    <TouchableOpacity style={[styles.outBox]} onPress={Actions.signIn}>
                        <Image source={require('../resources/images/src/out.png')} style={[styles.out]} />
                    </TouchableOpacity>
                </View>
                {/* 第一行 */}
                <ScrollView>
                    <TouchableOpacity style={styles.box} onPress={Actions.person}>
                        <Text style={[styles.title]}>个人资料</Text>
                        <Image source={require('../resources/images/tabs/xiangzuo1.png')} style={[styles.zuo]}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={Actions.mima}>
                        <Text style={[styles.title]}>账号安全</Text>
                        <Image source={require('../resources/images/tabs/xiangzuo1.png')} style={[styles.zuo]}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <Text style={[styles.title]}>版本更新</Text>
                        <Image source={require('../resources/images/tabs/xiangzuo1.png')} style={[styles.zuo]}/>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    zuo:{
        width:Dimensions.get('window').width*0.04,
        height:Dimensions.get('window').width*0.04,
    },
    backView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#0d6eff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.2,
    },
    imageStyle: {
        borderRadius: 50,
        marginLeft: Dimensions.get('window').width*0.03,
        marginRight: Dimensions.get('window').width*0.03,
        width: Dimensions.get('window').width*0.15,
        height: Dimensions.get('window').width*0.15,
    },
    headText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    },
    box: {
        width: Dimensions.get('window').width,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
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
    out: {
        width:Dimensions.get('window').width*0.05,
        height:Dimensions.get('window').width*0.05,
        resizeMode: 'cover',
    },
    outBox: {
        position: 'absolute',
        top: Dimensions.get('window').width*0.03,
        right: Dimensions.get('window').width*0.03,
    }
});