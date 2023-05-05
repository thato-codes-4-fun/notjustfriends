import { StatusBar } from 'expo-status-bar';
import posts from './assets/data/posts.json'
import user from './assets/data/user.json'
import { StyleSheet,  SafeAreaView , View, Image, Text} from 'react-native';
import Header from './components/Header';
import BodyPost from './components/Body';
import Footer from './components/Footer';



export default function App() {
  let post = user.posts[0]
  
  return (
    <SafeAreaView style={styles.container}>
        {/* header */}
        <Header />
        {/* body */}
        <BodyPost />
        {/* footer */}
        <Footer/>
    <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    marginTop: 50,
  },
});
