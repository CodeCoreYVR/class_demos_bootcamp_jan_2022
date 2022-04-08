//We can create a context using default value as follows:

export default React.createContext({name: "Dog", sound: "Bark"})

//We can access it by requiring it inside the Component and a property to the class component:
// static: contextType = MammalContext

//Outside of a class:
ClassName.contextType = ContextName;



