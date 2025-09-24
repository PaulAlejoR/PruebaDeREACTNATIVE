import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PantallaInicio() {
    return (
        <View style={styles.container}>
            <Text>Pantalla principal</Text>
            <Link href="/cuentas">Ir a Cuentas</Link>

            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});