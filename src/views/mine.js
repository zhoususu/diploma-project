/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    ScrollView,
    TextInput,
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
        this.phoneNum="18382468693";
        this.IDNum="";
        this.school="";
        this.job="";
        this.year="";
        this.hospital="";
        this.room="";
        this.adept="";
        this.intro="";
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                <View style={[styles.backView]}>
                    <Image source={require('../resources/images/src/miss.jpg')} style={[styles.imageStyle]} />
                    <Text style={[styles.headText]}>Sharon Sue</Text>
                    <TouchableOpacity style={[styles.outBox]} onPress={Actions.signIn}>
                        <Image source={require('../resources/images/tabs/out.png')} style={[styles.out]} />
                    </TouchableOpacity>
                </View>
                {/* 第一行 */}
                <ScrollView>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>联系方式</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.phoneNum=text}} defaultValue='18382468693'/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>身份证号</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.IDNum=text}} defaultValue='510421199805268321'/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>毕业院校</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.school=text}} defaultValue='成都中医药大学'/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>职称</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.job=text}} defaultValue='主治医师'/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>从业年限</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.year=text}} defaultValue='8年'/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>坐诊医院</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.hospital=text}} defaultValue='四川省中医院'/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>所属科室</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.room=text}} defaultValue='针灸科'/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>擅长病种</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={false} onChangeText={(text) => {this.adept=text}} defaultValue='儿科'/>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.title]}>个人简介</Text>
                        <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                        clearTextOnFocus={true} multiline={true} onChangeText={(text) => {this.intro=text}} defaultValue='从业至今，对儿科常见病、多发病及各类儿科疑难杂症有独特见解。擅长通过针灸、推拿、理疗等方式之劳坐骨神经痛、腰椎间盘突出等症状。'/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
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
    },
    outBox: {
        position: 'absolute',
        top: Dimensions.get('window').width*0.03,
        right: Dimensions.get('window').width*0.03,
    }
});