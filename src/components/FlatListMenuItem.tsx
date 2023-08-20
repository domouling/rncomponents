/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate( menuItem.component as never) }
        >
            <View style={ styles.container }>
                <Icon
                    name={ menuItem.icon }
                    color="#5856D6"
                    size={ 23 }
                />
                <Text style={ styles.itemtext }>
                    { menuItem.name }
                </Text>

                <View style={{ flex: 1 }}/>

                <Icon
                    name="chevron-forward-outline"
                    color="#5856D6"
                    size={ 23 }
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemtext: {
        marginLeft: 10,
        fontSize: 19,
    },
});
