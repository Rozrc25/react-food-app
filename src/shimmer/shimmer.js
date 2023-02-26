import './shimmer.css'
const Shimmer = ()=>{
    return(<div className='shimmer'>
        
    
    {Array(10).fill("").map((obj,index)=>{
        return (<div key={index} className="shimmerCard">
            <div className="shimmer"></div>
        </div>)
    })}
    </div>)
}
export default Shimmer;