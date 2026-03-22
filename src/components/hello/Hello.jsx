import "./hello.css"
function Hello () {
    const name = "will";
    function help(){
        return "How are you doing?";
    }
    return  (
        
        <div className="hello">
            <h1>Hello {name} </h1>
            <p>{help()}</p>
        </div>
        
        
    );
}
export default Hello;
