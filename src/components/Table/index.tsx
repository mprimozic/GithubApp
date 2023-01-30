import { TTable } from "../../helpers/types/TTable";

const Table = ({user, repo, handleClick}: TTable) => {
    return(
        <div className="container">            
            <img 
                src={user.avatar_url} 
                alt=""
                width={50}
                height={50}
            />
            <h1>{user.name}</h1>
            <p><strong>BIO: </strong>{user.bio}</p>
            <p><strong>LOCATION: </strong>{user.location}</p>
            <p><strong>REPOSITORIES: </strong></p>
            <ul className="list-group">
                {repo.map((value) => (
                   <li key={value.id} className="list-group-item">{value.name}</li>
                ))}
            </ul>

            <button className="col-12" onClick={handleClick}>Reset</button>
        </div>
    );
}

export default Table;