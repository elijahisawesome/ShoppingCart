export default function SideBar(props){
    if(!!props.page)
    {return(
        <div id='sideBar'>
            {JSON.stringify(props.page)}
        </div>
    )}
    else{
        return(<div></div>)
    }
}