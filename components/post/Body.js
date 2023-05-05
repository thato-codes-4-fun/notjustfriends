import { StyleSheet,  View, Image, Text} from 'react-native';

export default function BodyPost({description, image}) {
    return (
        <View style={styles.bodyContainer}>
            <Text style={styles.description}>{description}</Text>
            {
            image
            && 
            <Image
            style={styles.image}
            source={{
                uri: image,
            }}
            />
            }
      </View>
    )
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
  