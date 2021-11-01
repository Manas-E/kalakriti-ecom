import { list } from 'postcss';
import React from 'react'
import  { Component } from 'react'
import { db } from '../../firebase';
import Header from './Header';
import Product from './Product';



export class GetSearchResults extends Component {

    

    
 async  search(){
    this.state.list=[];
    await db.collection('nft').get().then(
        (snapshots)=>snapshots.forEach(
            (doc)=>{
            
                if( this.state.q != undefined &&  doc.data().title.toLowerCase() === this.state.q.toLowerCase() ) {
                    console.log(doc.data(),doc,"<<<")
                    // this.state.list.push(doc.data())
                    this.setState({list: [...this.state.list,doc.data()]})
                      
                }

                if( this.state.category != undefined &&  doc.data()?.category?.toLowerCase() === this.state.category.toLowerCase() ) {
                    console.log(doc.data(),doc,"<<<",this.state.category)
                    // this.state.list.push(doc.data())
                    this.setState({list: [...this.state.list,doc.data()]})
                      
                }
                

            }
        )
        
    )
    console.log("==================",this.state.list);
    if(!this.state.test)
        this.setState({test: 1});
            



   
}


 constructor(props){
        super(props);
        // const [query,setquery] =useState(router.query.value);
        this.state ={
            q: props.query,
            list:[],
            change:0,
            category: props.category
       }
        console.log("I'm constructor")
        this.search();
       
        console.log("####",this.state.q,"########",this.state.list)

    }

    handle(){
        console.log("I'm function");
        this.state.q= this.props.query;

        this.search();

        console.log("####",this.state.q,"########",this.state.list)
    }




    render() {  
        console.log("I'm render",this.state.test)
        if(this.state.test === 1){

        this.state.test =0;

        this.searchResult = <div className="flex">
        <h1 className="font-extrabold text-3xl p-10"> Found "{this.state.list.length }" Results  </h1>
    </div>

        this.renderThis= <div >
            { this.state.list.length > 0  ?  <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto ">
                 {this.state.list.map(({title,description,price,author,imageURL},id)=>(
                         <Product key={id}
                         id={id}
                         title={title}
                         description={description}
                         price={price}
                         category={author}
                         image={imageURL}
                         />
                 ))}
               
             </div>  : <h1>Nothing Found</h1> }
        
             </div>

            }

        return (
            <div className="flex flex-col">
            
            <Header />
            
            { this.state.category !== undefined ? "" : this.searchResult   }
            
            
            {this.renderThis}
            
            </div>
        )
    }

    componentDidUpdate(prevProps,prevState){
        
        console.log(prevProps,this.props);
        if(this.props.query != prevProps.query){
            this.handle();

        }
    }

    componentWillUnmount(){
        console.log("unmount")
        this.state.test=0;
    }
   
}

export default GetSearchResults