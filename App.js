import { StatusBar } from 'expo-status-bar';
import posts from './assets/data/posts.json'
import user from './assets/data/user.json'
import { StyleSheet,  SafeAreaView , View, Image, Text} from 'react-native';
import Header from './components/Header';
import BodyPost from './components/Body';



export default function App() {
  let post = user.posts[0]
  
  return (
    <SafeAreaView style={styles.container}>
        {/* header */}
        <Header />
        {/* body */}
        <BodyPost />
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
  bodyContainer: {
    marginTop: 20,
  },
  description: {
    lineHeight: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1
  }
});
