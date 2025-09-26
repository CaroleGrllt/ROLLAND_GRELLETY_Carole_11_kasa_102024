import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Star({grade}) {
    return (
        <span className={`star star-${grade}`}>
            <FontAwesomeIcon icon={faStar} className="fa-solid fa-star" />        
        </span>
    )

}