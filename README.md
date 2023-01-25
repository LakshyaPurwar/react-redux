# react-redux
All about managing app-wide state using redux-toolkit
````
```
Look! You can see my backticks.
```
````

![redux](https://user-images.githubusercontent.com/78524327/214512272-d7e1c35f-a4c5-4d7f-aa5e-5c8eb4e65617.png)

![ReduxAdvantages](https://user-images.githubusercontent.com/78524327/214512077-7d431f29-f0f2-4ffe-acf6-5e015c03b609.png)

 ![reduxWorking](https://user-images.githubusercontent.com/78524327/214511918-6db1b15b-7979-4dd7-b08b-3f5b5ba31561.png)
 
 ![reducerFunction](https://user-images.githubusercontent.com/78524327/214513186-f2dfb175-286a-4cc4-b441-b9bf88e08877.png)
 
 To set up app wide state , we do the following : 
 
 1.We create the store folder  and the index.js file there , that holds the central store.
 
 2.Corresponding to different categories of states , differenct slices are setup as demonstrated by other files in store.
 The slices should export there reducers and the action creators for the central store and components to use.
 
 3.They are configured with the central store.
 The central store must export the store constant to be used by the provider wrapping around all state using components.
 
 4.Components that want to access the store do so using the useSelector syntax.
 
 5.Compoents that want to alter the state do so using the dispatch object and corresponding action creator.
 
 //Easy peasy stuff ..

