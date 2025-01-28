import { Button, Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import { fruits } from "../components/fruityf";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <FlatList
          data={[
            {key: <Link href="/apple">{fruits[0]}</Link>},
            {key: <Link href="/orange">{fruits[1]}</Link>},
            {key: <Link href="/mango">{fruits[2]}</Link>}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <View style={styles.buttonContainer}>
        <Pressable style={styles.button}><Text style={styles.buttonLabel}>Press Here</Text></Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
