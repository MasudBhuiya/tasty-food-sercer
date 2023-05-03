import React from 'react';

const Blog = () => {
    return (
        <div>
            <button className="btn btn-primary mt-3 mb-4">Get Pdf</button>
            <div>
                <p>Q: Tell us the differences between uncontrolled and controlled components.</p>
                <h2>Ans: In react, controlled components refer to components which have their state and vegavior controlled by parent component. this components passed the props from the parent component to update their state and vehavior. and uncontrolled components refer to components which manage their own state internally.</h2>
            </div>
            <div>
                <p>Q: How to validate React props using PropTypes</p>
                <h1>Ans: PropTypes is used for props validation in react component. when some of the props are passed with invalid type of component. it will gives us the warning on js. It is used to validate any types of data.</h1>
            </div>
            <div>
                <p>Q: Tell us the difference between nodejs and express js.</p>
                <h1>Ans: NodeJs is the pacage which provides the javascript run-time environment, where express is a framework which sits on the top of nodejs and helps us to handle our requests and responses.</h1>
            </div>
            <div>
                <p>Q: What is a custom hook, and why will you create a custom hook?</p>
                <h1>Ans: custom react js hooks are reuseable function which react js software developer can use to add special and unique functionility to the react application. If there is a requirement to add a feature, we can install a third-party library and solve the problem.</h1>
            </div>
        </div>
    );
};

export default Blog;