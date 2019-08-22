import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Education = () => {
  return (
    <View style={stylesEd.container}>
      <View style={stylesEd.section}>
        <Image
          style={stylesEd.image}
          src='https://img.icons8.com/wired/96/000000/diploma.png'
        />
        <Text style={stylesEd.h1}>Education</Text>
      </View>
      
      <View>
        <View style={stylesEd.section2}>
          <Text style={stylesEd.pLight}>2019 - 2019,Berlin, Germany</Text>
          <Text style={stylesEd.h3}>Web Development with React </Text>
          <Text style={stylesEd.p}>ReDi School for Digital Integration</Text>
        </View>
      </View>

      <View>
        <View style={stylesEd.section2}>
          <Text style={stylesEd.pLight}>2019 </Text>
          <Text style={stylesEd.h3}>Front-End Web Development</Text>
          <Text style={stylesEd.p}>
            Udacity, Scolarship from Salceforce
          </Text>
        </View>
      </View>

      
      <View>
        <View style={stylesEd.section2}>
          <Text style={stylesEd.pLight}>2012 - 2016, Distance Learning</Text>
          <Text style={stylesEd.h3}>Information Technology </Text>
          <Text style={stylesEd.p}>Soft-Uni (Software University) Bulgaria</Text>
        </View>
      </View>

      
    </View>
  );
};

export default Education;

const stylesEd = StyleSheet.create({
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
    marginBottom: 5,
  },
  section2: {
    flexDirection: 'column',
    marginTop: 5,
  },
  image: {
    backgroundColor: '#F0DB4F',
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  h2: {
    fontSize: 11,
  },
  h3: {
    fontSize: 14,
    textDecoration: 'underline',
    textDecorationColor: '#F0DB4F',
    lineHeight: 1.3,
  },
  pLight: {
    fontSize: 9,
    lineHeight: 1.3,
    color: '#62757f',
  },
  p: {
    fontSize: 9,
    lineHeight: 1.3,
  },
});
