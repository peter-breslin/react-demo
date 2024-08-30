Render Props

The term "render props" refers to a technique for sharing code between React components using a prop whose value is a function

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.


"Wrapper" Component (Contains state methods)
        |              |
        v              v
    Component1       Component2


    * These components need the state/functionality of the wrapper component