import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Enjoy = () => {
  return (
    <View style={stylesInterests.container}>
      <View style={stylesInterests.section}>
        <View style={stylesInterests.section}>
          <Image
            style={stylesInterests.image}
            src='https://img.icons8.com/wired/64/000000/two-hearts.png'
          />
          <Text style={stylesInterests.h1}>Interests</Text>
        </View>
        <View style={stylesInterests.section2}>
          <Image
            style={stylesInterests.imageSM}
            src='https://img.icons8.com/color/100/000000/woman-on-a-horse.png'
          />
          <Text style={stylesInterests.p}>Riding</Text>
        </View>

        <View style={stylesInterests.section2}>
          <Image
            style={stylesInterests.imageSM}
            src='https://img.icons8.com/color/100/000000/climbing.png'
          />
          <Text style={stylesInterests.p}>Climbing</Text>
        </View>

        <View style={stylesInterests.section2}>
          <Image
            style={stylesInterests.imageSM}
            src='https://img.icons8.com/color/100/000000/camping-tent.png'
          />
          <Text style={stylesInterests.p}>Camping</Text>
        </View>

        <View style={stylesInterests.section2}>
          <Image
            style={stylesInterests.imageSM}
            src='https://img.icons8.com/color/100/000000/reading.png'
          />
          <Text style={stylesInterests.p}>Reading</Text>
        </View>
      </View>
    </View>
  );
};

export default Enjoy;

const stylesInterests = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 5,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  section: {
    flexDirection: 'row',
  },
  section2: {
    flexDirection: 'column',
  },
  image: {
    backgroundColor: '#F0DB4F',
    height: 18,
    width: 18,
  },
  imageSM: {
    marginBottom: 5,
    marginLeft: 15,
    height: 20,
    width: 20,
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  p: {
    marginLeft: 10,
    fontSize: 9,
    lineHeight: 1.3,
    color: '#62757f',
  },
});
