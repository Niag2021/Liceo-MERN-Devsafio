//import '../estilos/estiloHome.css';
import '../estilos/estiloHome2.css';

const Home = () => {
    return (
        <div>
            <h1>Liceo Santa Teresa de los Andes.</h1>

            <p className="informacion">
                <h2 className="tarjetas">
                    Mision.
                    <h6>“Construir una comunidad educativa inspirada en la fe católica y orientada al desarrollo de una educación de calidad con equidad, con énfasis en la sana convivencia”</h6>
                </h2>
                <h2 className="tarjetas">
                    Vision.
                    <h6>“Construir una comunidad educativa inspirada en la fe católica y orientada al desarrollo de una educación de calidad con equidad, con énfasis en la sana convivencia”</h6>
                </h2>
                <h2 className="tarjetas">
                    Valores.
                    <h6>“Construir una comunidad educativa inspirada en la fe católica y orientada al desarrollo de una educación de calidad con equidad, con énfasis en la sana convivencia”</h6>
                </h2>
                <br/>

                <h3 className="modulo">
                    Alumnos.
                </h3>
                <h3 className="modulo">
                    Cursos.
                </h3>
                <h3 className="modulo">
                    Apoderados.
                </h3>
                <h3 className="modulo">
                    Asignatura.
                </h3>
            </p>
        </div>
        
    )    
}

export default Home