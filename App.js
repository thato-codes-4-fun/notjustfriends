import { StatusBar } from 'expo-status-bar';
import posts from './assets/data/posts.json'
import { StyleSheet,  SafeAreaView } from 'react-native';
import Header from './components/Header';



export default function App() {
  let post = posts[0]
  return (
    <SafeAreaView style={styles.container}>
        {/* header */}
        <Header />
        {/* body */}

        {/* footer */}
   
    <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
  },
});
