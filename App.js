import { StatusBar } from 'expo-status-bar';
import user from './assets/data/user.json'
import { StyleSheet,  SafeAreaView ,} from 'react-native';
import PostScreen from './screens/post';



export default function App() {
  let post = user.posts[0]
  
  return (
    <SafeAreaView style={styles.container}>
      <PostScreen post={post}/>
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
