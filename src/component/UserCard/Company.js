
const App = ({company}) => {
    if(!company)
        return null;

return(
    <>
        <div class="grid-container">
            <div><span>Company</span> {company.name}</div>
            </div>
    </>
)
};

export default App;