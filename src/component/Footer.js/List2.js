import {Link} from 'react-router-dom'
export default function List2({className,style}){
    return(
        <>
        <li><Link><i className={className} style={style}></i></Link></li>
        
        </>
    )

}