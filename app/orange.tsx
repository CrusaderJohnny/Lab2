import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from 'expo-router';


const orangeImage = require('../assets/orange.jpg');

export default function Page() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={orangeImage} placeholder={'Loading Image'}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: '100%',
        height: '50%',
      },
})