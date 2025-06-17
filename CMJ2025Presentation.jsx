import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from "@/components/ui/card";

export default function CMJ2025Presentation() {
  return (
    <div className="min-h-screen bg-green-50 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">CMJ 2025 - Pinillos</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        {/* Slide 1: Portada */}
        <div className="flex flex-col items-center">
          <img
            src="/municipio-pinillos-escudo1.png"
            alt="Escudo Pinillos 1"
            className="h-24 mb-2"
          />
          <img
            src="/municipio-pinillos-escudo2.png"
            alt="Escudo Pinillos 2"
            className="h-24 mb-4"
          />
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            ¡Participa en el CMJ 2025!
          </h2>
          <p className="text-center max-w-xl text-green-600">
            Concejo Municipal de Juventud <br />
            Tu voz, tu voto, tu futuro
          </p>
        </div>

        {/* Slide 2: Calendario Electoral */}
        <div className="bg-white p-4 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-green-700 mb-3 text-center">
            Calendario Electoral - CMJ 2025
          </h3>
          <ul className="text-left space-y-2 text-green-800 text-sm">
            <li>📅 22 de abril - Inicio registro de listas y votantes</li>
            <li>📅 19 de junio - Finaliza inscripción de votantes / Inicia inscripción de candidatos</li>
            <li>📅 19 de julio - Inicia propaganda / Finaliza recolección de apoyos e inscripción</li>
            <li>📅 21 al 25 de julio - Modificación de inscripción / Propaganda electoral</li>
            <li>📅 27 de julio - Publicación de candidatos</li>
            <li>📅 19 de agosto - Sorteo y designación de jurados</li>
            <li>📅 19 de septiembre - Designación por alcaldías</li>
            <li>📅 3 de octubre - Publicación de listas de jurados</li>
            <li>📅 19 de octubre - DÍA DE LAS ELECCIONES</li>
            <li>📅 20 de octubre - Inicio de escrutinios</li>
          </ul>
        </div>

        {/* Slide 3: Imágenes de participación */}
        <div className="flex flex-col items-center">
          <img
            src="/presentacion-juventud1.jpg"
            alt="Participación estudiantil 1"
            className="rounded-xl shadow-lg mb-3 max-h-[400px]"
          />
          <img
            src="/presentacion-juventud2.jpg"
            alt="Participación estudiantil 2"
            className="rounded-xl shadow-lg max-h-[400px]"
          />
          <p className="text-green-700 mt-4 text-center max-w-xl">
            Los jóvenes de Pinillos ya están participando. ¡Haz parte del cambio tú también!
          </p>
        </div>
      </Carousel>
    </div>
  );
}