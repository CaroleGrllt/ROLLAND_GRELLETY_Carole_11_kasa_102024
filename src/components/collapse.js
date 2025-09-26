import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return  (
        <>
            <div className='collapse_container'>
                <div className="collapse_content">
                    <span>{title}</span>
                    <div className="opened-collapse-arrow" onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={faAngleUp} className={"fa-solid fa-angle-up" + (isOpen ? " clicked" : " unclicked")}></FontAwesomeIcon>
                    </div>
                </div>
                <div className={"dropdown"+ (isOpen ? " dropdown-open" : "") }>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}