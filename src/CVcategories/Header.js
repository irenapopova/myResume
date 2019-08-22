import React from 'react';
import {Text, Image, View, StyleSheet} from '@react-pdf/renderer';

const Header = () => {
  return (
    <View style={stylesHeader.container}>
      <Image style={stylesHeader.image} src='/images/irena_cut2.jpg' />
      <View style={stylesHeader.section}>
        <Text style={stylesHeader.h1}>Hi, I'm Irena Popova</Text>
        <Text style={stylesHeader.h1}>
          a FullStack MERN Developer, living in Berlin
        </Text>
        <View style={stylesHeader.section1}>
          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/ios-glyphs/104/000000/linkedin.png'
          />

          <Text
            style={stylesHeader.link}
            href='https://www.linkedin.com/in/irena-popova/'
            target='_blank'>
            irena-popova
          </Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/windows/96/000000/github.png'
          />

          <Text
            style={stylesHeader.link}
            href='https://github.com/irenapopova'
            target='_blank'>
            irenapopova
          </Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/office/100/000000/germany.png'
          />
          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/office/96/000000/great-britain.png'
          />
          <Text style={stylesHeader.link}>Fluent</Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/office/100/000000/bulgaria.png'
          />
          <Text style={stylesHeader.link}>Native</Text>
        </View>

        <View style={stylesHeader.section1}>
          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/ios/100/000000/phonelink-ring-filled.png'
          />
          <Text style={stylesHeader.link}>+49(0)176 85652238</Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/material-outlined/100/000000/send.png'
          />
          <Text style={stylesHeader.link}>irenejpopova6@gmail.com</Text>
        </View>
      </View>

      <Image
        style={stylesHeader.imageJS}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'
      />
    </View>
  );
};

export default Header;

const stylesHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F0DB4F',
    paddingLeft: 60,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 10,
    width: '100%',
    justifyContent: 'start-left',
    position: 'relative',
  },
  section: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  section1: {
    flexDirection: 'row',
  },
  h1: {
    lineHeight: 1.5,
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageSM: {
    height: 15,
    width: 15,
    marginRight: 3,
    marginTop: 7,
  },
  imageJS: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    width: 60,
  },
  link: {
    fontSize: 10,
    color: '#4453A4',
    marginRight: 12,
    marginTop: 10,
    textDecoration: 'none',
  },
});
