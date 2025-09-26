export default function Banner({background, alt, title}) {
    return (
        <div className="cover_container">
            <div className="cover_image">
                <img src={background} alt={alt} />
            </div>
            <div className="cover_title">
                <h2>{title}</h2>
            </div>
        </div>
    )
}
