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
                        {key: '联系方式',value:'18382468693'},
                        {key: '身份证号',value:'510421199805268321'},
                        {key: '毕业院校',value:'成都中医药大学'},
                        {key: '职称',value:'主治医师'},
                        {key: '从业年限',value:'8年'},
                        {key: '坐诊医院',value:'四川省中医院'},                        
                        {key: '所属科室',value:'针灸科'},
                        {key: '擅长病种',value:'儿科'},
                        {key: '个人简介',value:'从业至今，对儿科常见病、多发病及各类儿科疑难杂症有独特见解。擅长通过针灸、推拿、理疗等方式之劳坐骨神经痛、腰椎间盘突出等症状。'},
                    ]}
                    renderItem={({item}) => 
                        <View style={styles.box}>
                            <Text style={[styles.title]}>{item.key}</Text>
                            <TextInput style={[styles.write]} underlineColorAndroid='transparent' clearButtonMode='while-editing'
                            clearTextOnFocus={true} multiline={true} value={item.value}/>
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