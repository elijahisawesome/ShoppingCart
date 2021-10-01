import {Link} from 'react-router-dom'

export default function SideBar(props){
    if(!!props.page)
    {return(
        <div id='sideBar'>
            {Object.entries(props.page[1]).map((category, index)=>{
                return(
                <Link key={index} to={`/Products/${props.page[0]}/${category[0]}`}>
                    <div className='sideBarCategory'>
                        {category[0]}
                        {Object.entries(category[1]).map((product, index)=>{
                            return(
                                <div className='sideBarProduct' key={index}>
                                    {product[1].name}
                                </div>
                            )
                        })}
                    </div>
                </Link>
                )
            })}
        </div>
    )}
    else{
        return(<div></div>)
    }
}