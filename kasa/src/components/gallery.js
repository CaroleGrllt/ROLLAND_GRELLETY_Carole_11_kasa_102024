import { useState }                         from 'react';
import { FontAwesomeIcon }                  from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight }    from '@fortawesome/free-solid-svg-icons';


export default function Gallery({pictures}) {
    const [onDisplay, setOnDisplay] = useState(0);      // la 1ere image affichée est celle ayant l'index 0 du tableau (donc la première image)
    const picturesLength            = pictures.length   // on récupère la longueur totale des éléments du tableau, donc le nombre de photos

    const nextImg = () => {
        setOnDisplay(onDisplay === picturesLength - 1 ? 0 : onDisplay + 1); 
        //si l'index de onDisplay, c'est à dire l'image affichée (par défaut à 0) est strictement égal au total des éléments - 1,
        //alors l'état revient à 0, c'est à dire qu'on repart sur la 1ere slide. 
        //sinon, on augmente l'index d'1 pour passer à l'image suivante (ce qui devient la nouvelle valeur courante)
      };

      const prevImg = () => {
        setOnDisplay(onDisplay === 0 ? picturesLength - 1 : onDisplay - 1); 
        //si l'index de onDisplay, c'est à dire l'image affichée (par défaut à 0) est strictement égal à 0,
        //alors on affiche l'image précédente du tableau 
        //sinon, on affiche l'image dont l'index est inférieur d'1 (ce qui dévient la nouvelle valeur courante)
      };

    return (
        <>
            <div className='arrows-container'>
                {picturesLength > 1 && ( 
                // si le tableau a plus d'un seul élément, alors on affiche les flèches droite/gauche
                <div className="left-arrow" onClick={prevImg}>
                    <FontAwesomeIcon icon={faChevronLeft} className="fa-solid fa-chevron-left chevron" />
                </div>
                )}
                {picturesLength > 1 && (
                <div className="right-arrow" onClick={nextImg}>
                    <FontAwesomeIcon icon={faChevronRight} className="fa-solid fa-chevron-right chevron" />
                    </div>
                )}
            </div>
            
            {pictures.map((img, i) => { 
            //on passe tout le tableau, on récupère une image et son index après l'autre
                return ( 
                    <div key={"picture-"+i} 
                    // comme il s'agit d'un tableau, on indique une key pour identifier les éléments du tabeau
                    // si l'index de l'image est strictement égal à la valeur actuelle de onDisplay, 
                    // alors la classe est slider active, sinon slider
                    className={i === onDisplay ? "picture active" : "picture"}> 
                        {i === onDisplay && (
                            <img src={img} alt={img.title} className="picture-img" />
                        )} 
                        
                        {i === onDisplay && picturesLength > 1 && ( 
                        // si l'index de l'image est strictement égale à la valeur actuelle de onDisplay ET si 
                        // le nombre d'éléments dans le tableau est supérieur à 1, alors on affiche le compteur
                        <span className="paging">
                            {onDisplay + 1}/{picturesLength}
                        </span>
                        )}
                    </div>
                );
            })}
        </>
    )
}