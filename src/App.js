/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @媲美爱
 */

import React, { Component } from 'react';
import {
    AppState,
    StyleSheet,
    BackHandler,
    View,
} from 'react-native';
//第三方插件
import { Router, Scene } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Toast from 'react-native-easy-toast';
//自定义组件
import CustomTabBar from './components/customTabBar'; //自定义选项卡
import Loading from './components/loading';
//选项卡Tab页
import HomeTabScreen from './views/home'; //首页
import HeadsetTabScreen from './views/headset'; //试听
import BoughtTabScreen from './views/bought'; //已购
import MineTabScreen from './views/mine'; //我的
//页面
import SignInOrUpScreen from './views/signIns/signInOrUp'; //免注册登录
import SignInScreen from './views/signIns/signIn'; //登录
import TopShowScreen from './views/home/topShow'; //登录
import WorkScreen from './views/home/work'; //登录
import collectScreen from './views/home/collect'; //登录
import ForgetScreen from './views/signIns/forget';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Disable back button by just returning true instead of Action.pop()
        BackHandler.addEventListener('hardwareBackPress', () => {return true});
    }

    render() {
        let tabNames = ['首页', '患者列表', '病历管理', '个人中心'];
        return (
            <ScrollableTabView
                initialPage={0} //初始tab索引
                renderTabBar={() =>
                    <CustomTabBar
                        tabNames={tabNames} //tab名称
                        placeMiddle={false} //中间是否占位，即中间是否需要用特殊按钮样式等
                    />
                }
                tabBarPosition='bottom'
            >
                <HomeTabScreen key='homeTab' tabLabel='home' />

                <HeadsetTabScreen key='headsetTab' tabLabel='headset' />

                <BoughtTabScreen key='boughtTab' tabLabel='bought' />

                <MineTabScreen key='mineTab' tabLabel='mine' />
            </ScrollableTabView>
        );
    }
}

let self; //将App组件中的this赋给全局的self
global.showLoading = false; //所有子页面均可直接调用global.showLoading()来展示Loading
global.closeLoading = false; //所有子页面均可直接调用global.closeLoading()来关闭Loading
global.toast = false; //所有子页面均可直接调用global.toast("")来吐司提示消息

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        appState: AppState.currentState,
        previousAppstates: []
    }

    componentDidMount() {
        AppState.addEventListener('change',this._handleAppAtateChange);

        self = this;
        global.showLoading = function() {
            self.Loading.show();
        };
        global.closeLoading = function() {
            self.Loading.close();
        };
        global.toast = function(message) {
            self.refs.toast.show(message);
        };
    }

    componentWillUnmount() {
        AppState.addEventListener('change',this._handleAppAtateChange);
    }

    _handleAppAtateChange = (appState) => {
        var previousAppstates =this
        .state
        .previousAppstates
        .slice();
        previousAppstates.push(this.state.appState);
        this.setState({appState,previousAppstates});        
    };

    render() {
        return (
            <View style={[{flex: 1}]}>
                <Router sceneStyle={[styles.router]}>
                    <Scene
                        key="root"
                        navigationBarStyle={[styles.root]}
                        titleStyle={[styles.title]}
                        headerMode="screen"
                    >
                        {/*首页(tab)*/}
                        <Scene
                            key="tabs"
                            component={Tabs}
                            title="首页"
                            initial={true}
                            hideNavBar={true} //此处以及其他页都隐藏了导航，我打算自定义组件作为头部导航栏。
                        />
                        {/*播放*/}
                        {/*<Scene key="play" component={PlayScreen} title="正在播放" hideNavBar={true} />*/}
                        {/*登录*/}
                        <Scene key="signInOrUp" component={SignInOrUpScreen} title="免注册登录" hideNavBar={true} />
                        <Scene key="signIn" component={SignInScreen} title="登录" hideNavBar={true} />
                        <Scene key="forget" component={ForgetScreen} title="忘记密码" hideNavBar={true} />
                        {/*内容页*/}
                        <Scene key="topShow" component={TopShowScreen} title="内容页" hideNavBar={true} />
                        <Scene key="Work" component={WorkScreen} title="内容页1" hideNavBar={true} />
                        <Scene key="collect" component={collectScreen} title="内容页2" hideNavBar={true} />
                    </Scene>
                </Router>
                <Toast ref="toast" opacity={0.8}/>
                <Loading ref={r=>{this.Loading = r}} hide = {true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    router: {
        backgroundColor: '#e6e6e6',
    },
    root: {
        backgroundColor: '#e6e6e6',
    },
    title: {
        color: '#ffffff',
    },
});

global.styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    container: {
        backgroundColor: '#ffffff',
    },
    text: {
        color: '#2c2c2c',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
