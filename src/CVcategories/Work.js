import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Work = () => {
  return (
    <View style={stylesWork.container}>
      <View style={stylesWork.section}>
        <Image
          style={stylesWork.image}
          src='https://img.icons8.com/wired/96/000000/meeting.png'
        />
        <Text style={stylesWork.h1}>Work Experience</Text>
      </View>

      {/* Internationaler Bund */}
      <View style={stylesWork.section2}>
        <Text style={stylesWork.pLight}>06.2017 - 01.2019, Neuenhagen bei Berlin, Germany</Text>
        <Text style={stylesWork.h3}>Informatik and English Teacher</Text>
        <Text style={stylesWork.h2}>
          IB - Internationaler Bund
        </Text>

        <Text style={stylesWork.p}>Company with more than 10 000 employees</Text>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Project: </Text>
            Creating a Coding Club, teaching programming basics UX/UI design and  Developing simple games.
          </Text>
        </View>
        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}> Analytics, Reporting, UX: </Text>
            Weekly improvement of the game with the developement team, based on
            players' feedback and analytic tools (Unity,Unreal Engline, Google)
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Seo, Cms: </Text>
            Create weekly content for the school blog page 
          </Text>
        </View>
        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            
          </Text>
        </View>
      </View>

      {/* STARTUP IT teaching experience */}
      <View style={stylesWork.section2}>
        <Text style={stylesWork.pLight}>
          09.2017 - 07.2018, Germany
        </Text>
        <Text style={stylesWork.h3}>Start-up Teaching experiences</Text>
        <Text style={stylesWork.h2}>
        CodeCombat - Learn programming while playing
        </Text>
        <Text style={stylesWork.h2}> 
          </Text>
</View>

      {/* TEFAL */}
      <View style={stylesWork.section2}>
        <Text style={stylesWork.pLight}>03.2015 - 05.2016, United Kingdom</Text>
        <Text style={stylesWork.h3}>International English Teacher</Text>
        <Text style={stylesWork.h2}>Saxon-Court School of English</Text>

        <Text style={stylesWork.p}>Company of more than 5 000 employees</Text>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Teaching: </Text>
            Teaching  General and Business English in Adult classes (Cambridge Exams,
            FCE, CAE, ...)
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Communication: </Text>
            Developing lessons to boost students communicative skills
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>User focus: </Text>
            Developing communicating skills
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Work;

const stylesWork = StyleSheet.create({
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
  imageSM: {
    backgroundColor: '#E4E4E4',
    height: 10,
    marginRight: 10,
  },
  skills: {
    fontSize: 9,
    lineHeight: 1.3,
    backgroundColor: '#F0DB4F',
    marginRight: 10,
  },
});
