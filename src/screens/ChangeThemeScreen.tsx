/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title="Theme" />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={ setLightTheme }
                    activeOpacity={ 0.8 }
                    style={{
                        backgroundColor: colors.primary,
                        borderRadius: 20,
                        justifyContent: 'center',
                        width: 150,
                        height: 50,
                    }}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                        Light
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ setDarkTheme }
                    activeOpacity={ 0.8 }
                    style={{
                        backgroundColor: colors.primary,
                        borderRadius: 20,
                        justifyContent: 'center',
                        width: 150,
                        height: 50,
                    }}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

