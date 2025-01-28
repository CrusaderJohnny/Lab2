import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Image, useImage } from "expo-image";
import { Link } from 'expo-router';


const appleImage = useImage('./assets/apple.jpg');

export default function Page() {
    return (
        <View>
            <Text>Page 2</Text>
            <Image style={styles.container} source={appleImage} placeholder={'Loading Image'} contentFit="cover"/>
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
        backgroundColor: '#0553',
      },
})