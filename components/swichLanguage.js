import React, { useState, useContext } from 'react';
import { View, Image, Alert, TextInput, TouchableOpacity, Button } from 'react-native';
import { GlobalContext } from '../context/context';
const SwitchLanguage = () => {
    const [src, setSrc] = useState(require('../src/img/pl.png'));
    const [language, setLanguage] = useState('pl'); // Set the initial image source directly
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onDataChange(event.target.value); // Wywołanie funkcji przekazanej z rodzica
    };

    const handleSubmit = () => {
        if (!name || !email || !password) {
            Alert.alert('Wypełnij wszystkie pola');
            return;
        }

        Alert.alert(`Dane: \nImię: ${name}\nE-mail: ${email}\nHasło: ${password}`);

        // Clear the form after submission
        setName('');
        setEmail('');
        setPassword('');
    };

    // You can switch the language image here as needed
    const switchLanguage = async () => {
        setGlobalVariable(globalVariable === 1 ? 0 : 1)



        const newSrc = src === require('../src/img/pl.png')
            ? require('../src/img/en.png') // Switch to English image
            : require('../src/img/pl.png'); // Switch back to Polish image

        setSrc(newSrc);
    };


    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={switchLanguage}>
                <Image style={{ width: 50, height: 50, margin: 10, resizeMode: 'contain', alignSelf: 'flex-start' }} onPress={switchLanguage} source={src} />

            </TouchableOpacity>
        </View>
    );
};

export default SwitchLanguage;