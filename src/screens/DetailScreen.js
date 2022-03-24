import React from 'react';
import StarList from '../components/StarList';
import Score from '../components/Score';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking,TouchableOpacity } from 'react-native';

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    image,
    description,
    star
  } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.detailContent}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: image
        }}
      />
      <Text style={styles.titleStyle} >{title}</Text>
      <Text style={styles.artistStyle} >{artist}</Text>
      <View style={styles.starScore}>
        <StarList star={star} />
        <Score style={styles.detailScore} star={star} />
      </View>
      <View style={styles.starContainerStyle}>
      </View>
      <Text 
        style={{
          lineHeight: 24,
          marginBottom:28,
          textAlign:'center',
        }}
        >{description}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>BUY NOW FOR $46.99</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailContent: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },  
  imageStyle: {
    height: 300,
    width: 210,
    marginTop: 8
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    // marginTop: 5
  },
  titleStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:28
  },
  artistStyle: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
    marginBottom: 8
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom:50,
  },
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 16,
    color: '#fff',
  },
  starContainerStyle: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent: 'center',
    marginTop:8,
    marginBottom: 16,
  },
  starScore: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default DetailScreen;