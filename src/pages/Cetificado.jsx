import logo from '../media/logofcmc.png'
import f1 from '../media/f1.png'
import f2 from '../media/f2.jpg'


const Certificado = () => {
    return (
        <html>
            <p></p>
            <img src={logo} height="100" width="200" style={{ alig: "right" }} />
            <p></p>
            <p></p>
            <h4>La <b>FUNDACIÓN CATALINA MUÑOZ</b>, entidad sin ánimo de lucro identificada con NIT No. 830504284-1</h4>

            <h3><b>CERTIFICA</b></h3>


            <p>Que <b>JUAN FELIPE SALAZAR AYALA</b>, identificado con C.C. 1014309141, estuvo vinculado como PRACTICANTE PROFESIONAL realizando PRACTICAS SOCIALES desde el 8 de febrero de 2021 al 6 de junio de 2021, participando de las actividades lideradas por la planta de producción la Fundación. Las principales actividades en que prestó su servicio como practicante fueron:</p>
            
            
            <ul>
                <li style={{color:"#000000", alignItems:"center"}}>1.	Análisis de procesos y procedimientos de la planta.</li>
                <li style={{color:"#000000"}}>2.	Revisión de procesos administrativos y de inventario.</li>
                <li style={{color:"#000000"}}>3.	Realización de un plan de mejora para la planta con los hallazgos.</li>
            </ul>
            

            <p>La Fundación Catalina Muñoz es una entidad sin ánimo de lucro que tiene como objeto principal la ayuda económica y humanitaria a las clases sociales menos favorecidas de la población colombiana, para lo que ejecuta acciones de diversa naturaleza como otorgar auxilios y donaciones para la financiación de programas de vivienda, educación, salud, deportes, recreativos y de bienestar social.</p>

            <p>La presente certificación se expide a solicitud de la interesada en Bogotá D.C. a los 29 días del mes de julio de 2021.</p>
              
            <img src={f1} height="100" width="200" style={{ alig: "right" }}/> <img src={f2} height="100" width="200" style={{ alig: "right" }}/> 
            <p>ANTONY ESCORCIA LARA</p>
             <p>Coordinador Área de Formación y Voluntariado</p>
            <p>Fundación Catalina Muñoz</p>
            <p>a.escorcia@fundacioncatalinamunoz.org</p>



        </html>
    )

}

export default Certificado;