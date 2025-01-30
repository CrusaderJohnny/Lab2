import { Button, Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import { fruits } from "../components/fruityf";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <FlatList style={styles.list}
          data={[
            {key: fruits[0], link: "/apple"},
            {key: fruits[1], link: "/orange"},
            {key: fruits[2], link: "/mango"}
          ]}
          renderItem={({item}) => (<Link href={item.link}><Text style={styles.item}>{item.key}</Text></Link>)}
        />
        <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}><Text style={styles.buttonLabel}>Press Here</Text></Pressable>
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
  list: {
    paddingTop: 200,
    paddingLeft: 150,
    flexDirection: 'column',
  },
  item: {
    fontSize: 28,
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
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
