/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
//第三方插件
import { Actions } from 'react-native-router-flux';

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
                    <Text style={[styles.left]}>处方笺</Text>
                    <Text style={[styles.right]}>处方笺</Text>
                </View>
                {/* 第二行 */}
                {/* 第三行 */}
                {/* 第四行 */}
                {/* 第五行 */}
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
});