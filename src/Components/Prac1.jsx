import React from 'react'

const Prac1 = () => {
    return (
        <>
            <h1>Que1 :High Order Component in react js ?</h1>
            <p>Ans--A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. Higher-Order Components are not part of the React API. They are the pattern that emerges from React’s compositional nature. The component transforms props into UI, and a higher-order component converts a component into another component. The examples of HOCs are Redux’s connect and Relay’s createContainer.</p><br />

            <br /><br />
            <h1>Q.2: Do you know about SEO ? Is it true that react js supports SEO support ?</h1>
            <p> SEO stands for Search Engine Optimization. React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website. However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.yes,react js supports SEO</p>

            <br /><br />
            <h1>Q.3: clean up in useEffect ?</h1>
            <p>The useEffect hook is built in a way that if we return a function within the method, this function will execute when the component gets disassociated. This is very useful because we can use it to remove unnecessary behavior or prevent memory leaking issues.</p>

            <h1>Q.4 :What is the use of useCallback and useMemo?</h1>

            <p>useCallback--UseCallback is used to optimize the rendering behavior of your React function components, while useMemo is used to memoize expensive functions to avoid having to call them on every render. As a standard construction of hooks, those two solutions are not so different. Like with useEffect, a hook that manages the side-effects in functional components, argument callback comes first and then an array of dependencies.
            </p>
            <p>The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but it returns the memoized value returned by the passed function. It recalculated the value only when one of its dependencies change. It is useful to avoid expensive calculations on every render when the returned value is not going to change.</p>
            <br /><br />

            <h1>Q.5 :Why do we need keys in react less ?</h1>

            <p> Keys should be a unique identifier so that each element can be identified properly. Hence, it is recommended to use some uniquely generated id as the key. You can even assign keys to a dynamically rendered list.</p>

            <br /><br />

            <h1>Q.6: Do you know about redux?</h1>
            <img src="https://static.javatpoint.com/tutorial/reactjs/images/react-redux-architecture.png" alt="" />
            <p>Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow. Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier</p>
        </>
    )
}

export default Prac1