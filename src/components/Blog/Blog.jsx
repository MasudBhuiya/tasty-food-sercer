import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Blog = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const handlePDF = ()=>{
    setPageNumber(25)
    setNumPages(39)
  }

    return (
        <div className='max-w-screen-2xl mx-auto mb-24 p-6  mt-4 text-black text-2xl'>
            <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <button onClick={handlePDF}>PDF</button>
      <p>page {pageNumber} of {numPages} </p>
            <div className='mb-2 mt-2'>
                <p>1. Q: Tell us the differences between uncontrolled and controlled components.</p>
                <h2>Ans: In react, controlled components refer to components which have their state and vegavior controlled by parent component. this components passed the props from the parent component to update their state and vehavior. and uncontrolled components refer to components which manage their own state internally.</h2>
            </div>
            <div className='mb-2'>
                <p>2. Q: How to validate React props using PropTypes</p>
                <h1>Ans: PropTypes is used for props validation in react component. when some of the props are passed with invalid type of component. it will gives us the warning on js. It is used to validate any types of data.</h1>
            </div>
            <div className='mb-2'>
                <p>3. Q: Tell us the difference between nodejs and express js.</p>
                <h1>Ans: NodeJs is the pacage which provides the javascript run-time environment, where express is a framework which sits on the top of nodejs and helps us to handle our requests and responses.</h1>
            </div>
            <div className='mb-2'>
                <p>4. Q: What is a custom hook, and why will you create a custom hook?</p>
                <h1>Ans: custom react js hooks are reuseable function which react js software developer can use to add special and unique functionility to the react application. If there is a requirement to add a feature, we can install a third-party library and solve the problem.</h1>
            </div>
        </div>
    );
};

export default Blog;