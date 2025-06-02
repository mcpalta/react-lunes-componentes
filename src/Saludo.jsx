function Saludo(props){
    return(
        <div>
            <h1>Hola,{props.nombre} {props.apellido}!</h1>
            <p>¡Bienvenido a nuestro sitio web!</p>
        </div>
    );
}

export default Saludo;