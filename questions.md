1. What is the difference between Component and PureComponent? give an example where it might break my app.
    A Componen is the smallest pices of reusable code in react, they can be anything, from a simple div to a component with different childs inside.
    A pure component follows the logic of functional programming, this means that it will always return the same output as long as it's the same input,
    it's return value is determined by the input but it will always return the same, also they don't interact with anything in the exterior.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
    For starter, for that we will be working with classbased components that is already consider legacy code, I will normally pick use functional components
    with hooks, ShouldComponentUpdate was always a problem even before hooks because it can slow down you app by doing unnesesary rendering, this plus context 
    can be dangerous because depending on the logic something might change in the context and that will provoke unnesesary re-rendering or an infinite loop

3. Describe 3 ways to pass information from a component to its PARENT.
    1) callbacks
    2) contexts
    3) libaries like Redux

4. Give 2 ways to prevent components from re-rendering.
    1) react memo
    2) usememo / useCallback

5. What is a fragment and why do we need it? Give an example where it might break my app.
    in React we always need to return one single element, that's why we often use div's to wrap our components, but this is not optimal. Fragments
    help us to return "a single element" but in reallity is not there, this help us improve the rendering time, is better for screen readers and reduce 
    memory usage.

6. Give 3 examples of the HOC pattern.
    1) they can be used for wrapping components and give some style like Card from MaterialUI
    2) they can be used to return a component or another depending on the props or input they get
    3) to add a functionality that does not affect the wrapped thing

7. what's the difference in handling exceptions in promises, callbacks and async...await.
    in callbacks we need to check if we are throwing an error, in promises we will catch it on the .catch part and there we will have a function that handle the 
    error, in async await we wrap our code with a try catch like in other languages like java or C# 

8. How many arguments does setState take and why is it async.
    2 the first is an updater function (prevstate,props)=>{return newState}, the second is a callback.
    it is async because updating the state can be demanding and can block the browser  

9. List the steps needed to migrate a Class to Function Component.
    check if we are using state
    if we are then we need to import useState (or useReducer for more complex states) in our functional component
    check what methods we are using in the classsbased (like componentDidMount) 
    implement the logic to replace those methods, you can normally use useEffect to mimic the methods
    take all what is inside of the render method and in our functional component we will return in

10. List a few ways styles can be used with components.
    import ./pathToCSS.css and add the className that we want to the component className="some-class"
    import styles from './CSSfile.module.css' and where we need the styles we use className={styles.classWewantToUse}
    style = {{ color: "red", border: "solid 1px black" }}


11. How to render an HTML string coming from the server.
    dangerouslySetInnerHTML like <div dangerouslySetInnerHTML={response} />
