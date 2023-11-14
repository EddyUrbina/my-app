function Header(props){
    return(
        <div className="card">
            <div className="card-header">
                <p className="display-1">{props.Nombre}</p>
            </div>
            <br></br>
        </div>
    );
}

export default Header;