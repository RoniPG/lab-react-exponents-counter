function Exponent({ count, exponent }) {
    let multiplication = "";
    switch (exponent) {
        case 2:
            multiplication = `${count} * ${count}`;
            break;
        case 3:
            multiplication = `${count} * ${count} * ${count}`;
            break;
        case 4:
            multiplication = `${count} * ${count} * ${count} * ${count}`;
            break;
        case 5:
            multiplication = `${count} * ${count} * ${count} * ${count} * ${count}`;
            break;
        case 6:
            multiplication = `${count} * ${count} * ${count} * ${count} * ${count} * ${count}`;
            break;

        default:
            multiplication=""
            break;
    }
    return (
        <div className="exponent-counter-container">
            <p className="exponent-label">{count}<sup>{exponent}</sup> </p>
            <p className="exponent-result"> {multiplication} = <span className="total">{Math.pow(count, exponent)}</span></p>
        </div>
    );
}

export default Exponent;