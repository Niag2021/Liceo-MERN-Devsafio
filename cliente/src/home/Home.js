//import '../estilos/estiloHome.css';
import '../estilos/estiloHome2.css';
import inicioClases from '../img/inicioClases.png';


const Home = () => {
    return (
        <div>
            <h1>LICEO SANTA TERESA DE LOS ANDES.</h1>

            <img src={inicioClases} alt="Alumno" />

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
            </p>
        </div>

    )
}

export default Home