/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribe } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribe: false,
    });

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={ ( Platform.OS === 'ios' ) ? 'padding' : 'height' }
        >
            <ScrollView>

                <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                    <View style={ styles.globalMargin }>
                        <HeaderTitle title="TextInputs" />

                        <TextInput
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su Nombre"
                            autoCorrect={ false }
                            autoCapitalize="words"
                            onChangeText={ (value) => onChange( value,'name' ) }
                        />

                        <TextInput
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su Email"
                            autoCorrect={ false }
                            autoCapitalize="none"
                            onChangeText={ (value) => onChange( value,'email' ) }
                            keyboardType="email-address"
                            keyboardAppearance="dark"
                        />

                        <View style={ stylesScreen.switchRow }>
                            <Text style={ stylesScreen.switchText }>Suscribirse</Text>
                            <CustomSwitch isOn={ isSubscribe } onChange={ (value) => onChange( value, 'isSubscribe' ) } />
                        </View>

                        <HeaderTitle title={ JSON.stringify( form, null, 3 ) } />

                        <HeaderTitle title={ JSON.stringify( form, null, 3 ) } />


                        <TextInput
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su Teléfono"
                            onChangeText={ (value) => onChange( value,'phone' ) }
                            keyboardType="phone-pad"
                        />

                        <View style={{ height: 100 }} />

                    </View>

                </TouchableWithoutFeedback>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
});
