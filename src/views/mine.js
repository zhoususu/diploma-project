/**
 * Created by 媲美爱 on 2018-05-25.
 */

import React, { Component } from 'react';
import {
    FlatList,
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
                <FlatList
                    data={[
                        {key: '职称',value:'主治医生'},
                        {key: '毕业院校',value:'成都中医药大学'},
                        {key: '联系方式',value:'18382468693'},                        
                        {key: '身份证号',value:'XXXXXXXXXXXXXXXXXX'},
                        {key: '从业年限',value:'5年'},
                        {key: '擅长病种',value:'妇科、儿科'},
                        {key: '坐诊医院',value:'四川省中医院'},
                        {key: '科室',value:'针灸科'},
                    ]}
                    renderItem={({item}) => 
                        <View style={styles.box}>
                            <Text style={[styles.title]}>{item.key}</Text>
                            <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                            clearTextOnFocus={true} multiline={false} value={item.value}/>
                        </View>
                    }
                />
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
        height:25,
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