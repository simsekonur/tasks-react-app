const Header  = ({ title , name}) => {
    return (
        <div>
            <h1 style= {h1Style}> {title}</h1>
            <h1> {name}</h1>
        </div>
    );
}

const h1Style = {
    color: 'red',
    backgroundColor: 'black'
}
export default Header;