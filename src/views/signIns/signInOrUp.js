/**
 * Created by 媲美爱 on 2018-05-26.
 */

import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class SignInOrUpScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[global.styles.screen]}>
                {/* logo */}
                <View>
                    <Text style={[styles.logoName]}>
                        穴位敏化诊疗系统
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    logoName: {
        color: '#0d6eff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});