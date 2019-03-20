/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
var Dimensions = require('Dimensions');
export default class MineTabScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                <Image source={require('../resources/images/src/titlebg.png')} style={[styles.backView]}/>
                <View style={[styles.title]}>
                    <Image source={require('../resources/images/src/miss.jpg')} style={[styles.imageStyle]} />
                </View>
                <View style={[styles.box]}>
                    {/* 连接 */}
                    <View style={[styles.linkStyle]}>
                        <Text style={[styles.text]}>
                            编辑资料
                        </Text>
                    </View>
                    
                    {/* 标题 */}
                    <View>
                        <Text style={[styles.contentTitle]}>Sharon Sue</Text>
                    </View>
                    
                    {/* 内容 */}
                    <View style={{padding:15}}>
                        <Text style={[styles.content]}>职称：主治医生</Text>
                        <Text style={[styles.content]}>毕业院校：成都中医药大学</Text>
                        <Text style={[styles.content]}>擅长病种：妇科、儿科</Text>
                        <Text style={[styles.content]}>从业年限：5年</Text>
                        <Text style={[styles.content]}>联系电话：18382468693</Text>
                        <Text style={[styles.content]}>身份证号：XXXXXXXXXXXXXXXXXX</Text>
                        <Text style={[styles.content]}>
                            个人简介：从业至今，对儿科常见病、多发病及各类儿科疑难杂症有独特见解。擅长通过
                            针灸、推拿、理疗等方式治疗坐骨神经痛、腰椎间盘突出等症状。
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    text: {
        color: '#a1a4bc',
        padding: 10,
    },
    linkStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 15,
    },
    backView: {
        width: Dimensions.get('window').width,
        height: '30%',
        resizeMode:'stretch'
    },
    title: {
        width: '25%',
        height: '16%',
        backgroundColor: '#ffffff',
        borderRadius: 400,
        // borderWidth: 2,
        zIndex:100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '13%',
        left: '40%',
        elevation: 4,
    },
    box: {
        width: '90%',
        height: '77%',
        marginTop: '-13%',
        backgroundColor: '#ffffff',
        // borderWidth: 2,
        // borderColor: '#3e334d',
        elevation: 4,
    },
    imageStyle: {
        borderRadius: 400,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    contentTitle: {
        margin: 20,
        color: '#0d6eff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',
    },
    content: {
        color: '#3e334d',
        fontSize: 15,
        lineHeight:30,
    },
});