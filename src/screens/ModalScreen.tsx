/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ModalScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);


    const [ isVisible, setIsVisible ] = useState(false);

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title="Modal Screen" />

            <Button
                title="Abril Modal"
                onPress={ () => setIsVisible(true) }
                color={ colors.primary }
            />

            <Modal
                animationType="fade"
                visible={ isVisible }
                transparent={ true }
            >
                {/* Background Modal */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* Contenido Modal */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del Modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={ () => setIsVisible(false) }
                            color={ colors.primary }
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};
