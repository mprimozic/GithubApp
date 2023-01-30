const Form = ({handleSumbit}: any) => {
    return(
        <form className="container" onSubmit={handleSumbit}>
            <div>
                <label htmlFor="username" className="form-label">GitHub username:</label>
                <input className="form-control" type="text" name="username" id="username" placeholder="e.g. facebook" />
            </div>

            <div>
                <button className="col-12">GO!</button>
            </div>
            

        </form>
    );
}

export default Form;