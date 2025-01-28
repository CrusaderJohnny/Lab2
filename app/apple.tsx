import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Image, useImage } from "expo-image";
import { Link } from 'expo-router';


const appleImage = useImage('./assets/apple.jpg');

export default function Page() {
    return (
        <View style={styles.container}>
            <Text>Page 2</Text>
            <Image source={appleImage} placeholder={'Loading Image'} contentFit="cover"/>
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
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#0553',
      },
})