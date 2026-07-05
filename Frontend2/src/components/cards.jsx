function Cards({ title, value }) {
    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            <h1 className="value">{value}</h1>
        </div>
    );
}
export default Cards;