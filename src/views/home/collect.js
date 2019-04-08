/**
 * Created by 媲美爱 on 2018-05-29.
 */

import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
} from 'react-native';
//第三方插件
import { Actions } from 'react-native-router-flux';
var Dimensions = require('Dimensions');
//自定义组件
import Common from '../../components/common'; //公共类
import Header from '../../components/header'; //头部导航
import Echarts from 'native-echarts';
const {width} = Dimensions.get('window');
export default class collectScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            zusanli:[28, 30, 31, 30, 32, 33, 38, 29, 35, 36],
            baihui: [30,31,33,37,36,35,33,31,29,25],
            yanglingquan: [25,26,27,28,29,30,31,32,33,34],
            neiguan: [39,38,37,36,35,34,33,32,31,30],
            zhongwan: [39,38,37,36,33,31,29,35,37,39],
            chize: [6, 9, 9, 2, 8, 7, 17, 18],
        };
    }

    render() {
        const option = {
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip : {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                data:['足三里','百汇','阳陵泉','内关','中脘','尺泽']
            },
            //各种表格
            // toolbox: {
            //     //改变icon的布局朝向
            //     // orient: 'vertical',
            //     show : true,
            //     showTitle:true,
            //     feature : {
            //         //show是否显示表格，readOnly是否只读
            //         dataView : {show: true, readOnly: false},
            //         magicType : {
            //           //折线图  柱形图    总数统计 分开平铺
            //         //   type: ['line', 'bar','stack','tiled'],
            //           type: ['line'],
            //         },   
            //     }
            // },
            xAxis : [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap:false,
                    type : 'category',
                    name : 'min',
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '温度(℃)',
                    top:'1%'
                }
            ],
            //图形的颜色组
            color:['rgb(249,159,94)','rgb(67,205,126)','#ff7f00','#6a0aab','#4282d3','#00a779'],
            //需要显示的图形名称，类型，以及数据设置
            series : [
                {
                    name:'足三里',
                    //默认显
                    type:'line',
                    data:this.state.zusanli
                },
                {
                    name:'百汇',
                    type:'line',
                    data:this.state.baihui
                },
                {
                    name:'阳陵泉',
                    type:'line',
                    data:this.state.yanglingquan
                },
                {
                    name:'内关',
                    type:'line',
                    data:this.state.neiguan
                },
                {
                    name:'中脘',
                    type:'line',
                    data:this.state.zhongwan
                },
                {
                    name:'尺泽',
                    type:'line',
                    data:this.state.chize
                }
            ]
        };
        return (
            <View style={[global.styles.screen]}>
                <Header title={"数据收集"} style={[styles.header]} />
                <ScrollView contentContainerStyle = {{flex:1}}>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>姓名</Text>
                        <Text style={[styles.write]}>{this.props.username}</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>性别</Text>
                        <Text style={[styles.write]}>男</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>诊断结果</Text>
                        <Text style={[styles.write]}>{this.props.usersign}</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>治疗穴位</Text>
                        <Text style={[styles.write]}>肩井、命门、肾俞、风市、委中、承山</Text>
                    </View>
                    <Text style={[styles.title1]}>治疗参数设置</Text>
                    <View style={[styles.size]}>
                        <View style={[styles.one]}>
                            <Text style={[styles.boxTitle]}>温度 {this.props.temperature1}
                                <Text style={[styles.boxDan]}>（℃）</Text>
                            </Text>
                        </View>
                        <View style={[styles.one]}>
                            <Text style={[styles.boxTitle]}>强度 {this.props.intensity1}
                                <Text style={[styles.boxDan]}>（级）</Text>
                            </Text>
                        </View>
                        <View style={[styles.one]}>
                            <Text style={[styles.boxTitle]}>时间 {this.props.time1}
                                <Text style={[styles.boxDan]}>（min）</Text>
                            </Text>
                        </View>
                    </View>
                    <Echarts option={option} height={300} width={width}/>
                </ScrollView>
                <View style={[styles.size]}>
                    <TouchableOpacity style={[styles.btn]}>
                        <Text style={[styles.btnText]}>治疗进度</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    size: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    one: {
        width:Dimensions.get('window').width*0.20,
        alignItems: 'center',
    },
    boxTitle:{
        fontSize:15,
    },
    boxDan: {
        fontSize:10,
    },
    boxBack: {
        backgroundColor: '#e9e9e9',
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 5,
        height: Dimensions.get('window').height*0.20,
    },
    boxJian: {
        width:Dimensions.get('window').width*0.12,
        height:Dimensions.get('window').width*0.12,
        borderWidth:2,
        borderRadius:60,
        borderColor:'#0d6eff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Jia: {
        width:Dimensions.get('window').width*0.12,
        height:Dimensions.get('window').width*0.12,
        borderRadius:60,
        backgroundColor:'#0d6eff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxImage: {
        width:Dimensions.get('window').width*0.05,
        height:Dimensions.get('window').width*0.05,
    },
    boxContent:{
        fontSize:16,
        color:'#0d6eff',
        marginTop:10,
        marginBottom:10,
    },
    btn: {
        width: Dimensions.get('window').width*0.8,
        borderRadius: 20,
        marginTop: 30,
        backgroundColor: '#0d6eff',
        marginBottom:Dimensions.get('window').width*0.05,
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 30,
    },
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
    title1: {
        padding: 10,
        color: '#3e334d',
        fontSize: 14,
        width: Dimensions.get('window').width,
    },
    write: {
        padding: 0,
        fontSize: 14,
        width: Dimensions.get('window').width*0.7,
    },
});