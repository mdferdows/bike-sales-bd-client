import React from 'react';

const Blog = () => {
    return (
        <div className=' container'>
            {/* qn-1 */}
            <div className='bg-black p-5 border-lg shadow rounded mt-2 border border-success'>
                <h5 className='text-primary fw-blod'>What are the different ways to manage a state in a React application?</h5>
                <p className='text-white'> React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app</p>
            </div>
            {/* qn-2 */}
            <div className=' bg-black p-5 border-lg shadow rounded mt-2 border border-success'>
                <h5 className='text-primary fw-blod'>How does prototypical inheritance work?</h5>
                <p className='text-white'> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>
            </div>
            {/* qn-3 */}
            <div className='bg-black p-5 border-lg shadow rounded mt-2 border border-success' >
                <h5 className='text-primary fw-blod'> What is a unit test? Why should we write unit tests?</h5>
                <p className='text-white'>
                    Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                </p>
            </div >
            {/* qn-4 */}
            <div className='bg-black p-5 border-lg shadow rounded my-2 border border-success' >
                <h5 className='text-primary fw-blod'>React vs. Angular vs. Vue?</h5>
                <p className='text-white'> 	Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                </p>
                <p className='text-white'>
                    Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                </p>
                <p className='text-white'>
                    React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                </p>
            </ div>
        </div >
    );
};

export default Blog;