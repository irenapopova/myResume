import React from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import IrenaCV from './IrenaCV';
import './App.css';

function App() {
  return (
    <React.Fragment>
      {/* <h1> welcome on my resume made with react.js</h1> */}
      <PDFViewer>
        <IrenaCV />
      </PDFViewer>
    </React.Fragment>
  );
}

export default App;
