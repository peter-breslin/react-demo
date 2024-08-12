
const App = ({company}) => {
    if(!company)
        return null;

return(
    <>
        <h4>{company.name}</h4>
        <h4>{company.catchPhrase}</h4>
        <h4>{company.bs}</h4>
    </>
)
};

export default App;