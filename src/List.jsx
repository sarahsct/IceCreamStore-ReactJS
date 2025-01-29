function List(props) {
    const sizes = [
        { id: 1, scoopType: "Single Scoop", price: 5 }, 
        { id: 2, scoopType: "Double Scoop", price: 8 },
        { id: 3, scoopType: "Value Scoop", price: 7 }, 
    ];

    sizes.sort((a, b) => a.price - b.price);

    const ICEsize = sizes.map(a => <li key={a.id}>{a.scoopType} - {a.price} AED</li>);

    return (
        <>
            <div>
                <h1>{props.name}</h1>
                <ul className="list">{ICEsize}</ul>
            </div>
        </>
    );
}

export default List;
