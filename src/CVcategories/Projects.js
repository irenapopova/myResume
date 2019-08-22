import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Work = () => {
  return (
    <View style={stylesProjects.container}>
      <View style={stylesProjects.section}>
        <Image
          style={stylesProjects.image}
          src='https://img.icons8.com/wired/96/000000/test-tube.png'
        />
        <Text style={stylesProjects.h1}>Project experience</Text>
      </View>

        

      {/* Online Radio Generator ************************/}
      <View style={stylesProjects.section2}>
        <Text style={stylesProjects.pLight}>06 - 07.2019, Berlin</Text>
        <Text style={stylesProjects.h3}>Web App  Game</Text>
        <Text style={stylesProjects.h2}>Quiz App</Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/##'>
           Discover the project: frontend
        </Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/###'>
          + backend
        </Text>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              TeamWork - Git, Scrum, Demo:{' '}
            </Text>
            Project team of 1 developer
          </Text>
        </View>
        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Frontend - JS, CSS, Material-ui:{' '}
            </Text>
            Create Lists and Certificate components
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Backend - Node.js, Express, Rest Api, Heroku:{' '}
            </Text>
            Mock the students and courses data. Deploy it online to fetch it
            inside components
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>React-pdf: </Text>
            Create the certificate component as a PDF file on the browser
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>UI - Adobe XD: </Text>
            Create the wireframe of the Web App
          </Text>
        </View>
      </View>

      {/* Weather App *******************************************************/}
      <View style={stylesProjects.section2}>
        <Text style={stylesProjects.pLight}>06.2018, Berlin</Text>
        <Text style={stylesProjects.h3}>Web App weather Watch</Text>
        <Text style={stylesProjects.h2}>
          Weather App
        </Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/irenapopova/weatherapp'>
          Click to discover the project
        </Text>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Work - Git: </Text>
            Project work of 1 developer 
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Frontend - Angular, Typescript, Material-ui:{' '}
            </Text>
            Create a component to attached details to photos
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Backend - Firebase: </Text>
            Store the photo to FireStorage, save the photo details to FireStor
            to then fetch it in the vote component
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}> Capacitor: </Text>
            Get access to camera and geolocation of the user
          </Text>
        </View>
      </View>

      {/* Quiz**************************************/}
      <View style={stylesProjects.section2}>
        <Text style={stylesProjects.pLight}>08.2019, Berlin</Text>
        <Text style={stylesProjects.h3}>Classic Canvas Game</Text>
        <Text style={stylesProjects.h2}>Udacity Projects</Text>
        <Text
          style={stylesProjects.link}
          href='https://irenapopova.github.io/arcade-game/'>
          Click to play the game
        </Text>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Work - Git, Scrum: </Text>
            Project c
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Frontend - React, CSS, Material-ui:{' '}
            </Text>
            Create the router. Fetch an api to get the questions and answers.
            Develop several components and functionalities for a good user
            experience (shuffle answers, increase points, give color
            feedback,...)
          </Text>
        </View>
      </View>
    </View>
  );
};



export default Work;

const stylesProjects = StyleSheet.create({
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
    marginBottom: 5,
  },
  section3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 14,
    textDecoration: 'underline',
    textDecorationColor: '#F0DB4F',
    lineHeight: 1.3,
  },
  p: {
    fontSize: 9,
    lineHeight: 1.3,
  },
  pLight: {
    fontSize: 9,
    lineHeight: 1.3,
    color: '#62757f',
  },
  link: {
    fontSize: 9,
    lineHeight: 1.3,
    color: '#4453A4',
    textDecoration: 'none',
  },
  skills: {
    fontSize: 9,
    lineHeight: 1.3,
    backgroundColor: '#F0DB4F',
    marginRight: 10,
  },
});
