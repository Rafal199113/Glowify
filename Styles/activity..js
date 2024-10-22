import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1, // Umożliwia SafeAreaView zajęcie całej dostępnej przestrzeni
        backgroundColor: '#C77EBD', // Kolor tła dla całego obszaru
    },
    container: {
        flex: 1, // Umożliwia kontenerowi zajęcie całej przestrzeni SafeAreaView
        margin: 20, // Ustawia marginesy
        backgroundColor: '#E8E1E9', // Kolor tła kontenera
        borderRadius: 10, // Zaokrąglone rogi kontenera
        justifyContent: 'center', // Wyśrodkowanie zawartości w pionie
        alignItems: 'center', // Wyśrodkowanie zawartości w poziomie
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default globalStyles;