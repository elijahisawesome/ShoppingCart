export default function ProductsPage(props){
    return(
        <div>
            Products Page!
            <div>
                A juicy peach!
                <button onClick={()=>props.addOrRemoveProduct({id:0,name:'Peach'},1)}>Add to Cart</button>
                A dumb boy!
                <button onClick={()=>props.addOrRemoveProduct({id:1,name:'Boys'},1)}>Add to Cart</button>
                A Huge Car!
                <button onClick={()=>props.addOrRemoveProduct({id:2,name:'Car'},1)}>Add to Cart</button>
                A Fat Cat!
                <button onClick={()=>props.addOrRemoveProduct({id:3,name:'Cat'},1)}>Add to Cart</button>
                A Big ol Bag!
                <button onClick={()=>props.addOrRemoveProduct({id:4,name:'Bag'},1)}>Add to Cart</button>
            </div>
        </div>
    )
}