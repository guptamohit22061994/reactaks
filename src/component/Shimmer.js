const Shimmer = () => {


    return (
        <div className="d-flex justify-content-between f-wrap px-2">
            {Array(9).fill("").map((e, index) => (<div key={index} className="shimmer mt-2"></div>))}
        </div>
    );

}

export default Shimmer;