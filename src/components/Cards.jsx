
const Cards = (props) => {
    return (
        <div className="account">
            <div className='heading'>
                <i className="icon ri-github-fill"></i>
                <h1>{props.elem.name === null ? "Not provided" : props.elem.name}</h1>
            </div>
            <p className='bio'>{props.elem.bio === null ? "Bio not Available" : props.elem.bio}</p>
            <p className='company'>{props.elem.company === null ? "Company not Provided" : props.elem.company}</p>
            <div className="follow-section">
                <p className='followers'><span>Followers: </span>{props.elem.followers}</p>
                <p className='following'><span>Following: </span>{props.elem.following}</p>
            </div>
            <p className='publicrepo'>Public Repositories: {props.elem.public_repos} </p>
        </div>
    )
}

export default Cards






//         <div className='accounts'>
//             {props.searched && props.loading && <p>Loading...</p>}
// {props.searched && !props.loading && props.allData && (
//             <div className="account">
//                 <div className='heading'>
//                     <i className="icon ri-github-fill"></i>
//                     <h1>{props.allData.name === null ? "Name not provided" : props.allData.name}</h1>
//                 </div>
//                 <p className='bio'>{props.allData.bio === null ? "Bio not Available" : props.allData.bio}</p>
//                 <p className='company'>{props.allData.company === null ? "Company not Provided" : props.allData.company}</p>
//                 <div className="follow-section">
//                     <p className='followers'><span>Followers: </span>{props.allData.followers}</p>
//                     <p className='following'><span>Following: </span>{props.allData.following}</p>
//                 </div>
//                 <p className='publicrepo'>Public Repositories: {props.allData.public_repos} </p>
//             </div>
// )}
//         </div>
