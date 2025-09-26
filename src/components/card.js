import { Link } from "react-router-dom";

export default function Card({id, image, name}) {
    return (
        <article>
            <Link to={"/accomodation/" + id}>
                <div className="content">
                    <div className="card_img">
                        <img src={image} alt={name} />
                    </div>
                    <div className="card_title">
                        <h3>{name}</h3>
                    </div>
                </div>
            </Link>
        </article>
    )
}