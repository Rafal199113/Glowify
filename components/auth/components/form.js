import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import translation from "../../../config/translations/translation"
import { GlobalContext } from '../../../context/context'

const MyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { globalVariable } = useContext(GlobalContext);
    const handleSubmit = () => {
        if (!name || !email || !password) {
            Alert.alert('Wypełnij wszystkie pola');
            return;
        }

        Alert.alert(`Dane: \nImię: ${name}\nE-mail: ${email}\nHasło: ${password}`);

        // Wyczyść formularz po wysłaniu
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{translation.at(globalVariable)?.email}</Text>
            <TextInput
                style={styles.input}
                value={email} // Zmieniona na email
                onChangeText={setEmail}
                placeholder={translation.at(globalVariable)?.email_holder}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>{translation.at(globalVariable)?.password}</Text>
            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true} // Ukrywa tekst
                onChangeText={setPassword}
                placeholder={translation.at(globalVariable)?.password_holder}
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{translation.at(globalVariable)?.log}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleSubmit}>
                <Text style={styles.forgotPasswordText}>{translation.at(globalVariable)?.password_forget}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 280,
        borderColor: '#646161',
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBAADC',
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#E8E1E9',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#70456B',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    forgotPasswordButton: {
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    forgotPasswordText: {
        color: 'black',
        textDecorationLine: 'underline',
    },
});

export default MyForm;
