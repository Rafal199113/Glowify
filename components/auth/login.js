/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { useContext } from 'react';

import {
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    View,
} from 'react-native';
import globalStyles from '../../Styles/activity.';
import Form from "./components/form"
import SwichLanguage from "../swichLanguage"
import translation from "../../config/translations/translation"
import { GlobalContext } from '../../context/context'
function Login() {
    const { globalVariable } = useContext(GlobalContext);
    return (
        <SafeAreaView style={globalStyles.safeArea}>

            <ScrollView>
                <SwichLanguage />
                <View style={globalStyles.container}>
                    <View
                        style={[
                            globalStyles.container,

                        ]}>
                        <View style={{ flex: 1, width: '100%' }} >
                            <Text style={{ fontSize: 32, color: '#C77EBD', fontFamily: 'Coiny' }}>{translation.at(globalVariable)?.login}</Text>
                        </View>
                        <View style={{ flex: 5, width: '100%' }} >
                            <Form />
                        </View>
                        <View style={{ flex: 2, backgroundColor: '#E8E1E9' }} >
                            <Image style={{ width: 250, resizeMode: 'contain', }} source={require('../../src/img/logo.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;
