import React from 'react'
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _id:'',
            Name:'',
            Age:'',
            City:'',
            isEdit:false// f=> cr    t=> up
        }
    }
    infoChange=(event)=>{
        let {name,value} = event.target
        this.setState({[name]:value})
    }
    consoles=(event)=>{
        if(!this.state.isEdit){       //post
            let data={
                isEdit:this.state.isEdit,   //false
                Name:this.state.Name,
                Age:this.state.Age,
                City:this.state.City
            }
        
            this.props.mydata(data)    
        }else{
            let data={
                isEdit:this.state.isEdit,   //true
                Name:this.state.Name,
                _id:this.state._id,
                Age:this.state.Age,
                City:this.state.City
            }
        
            this.props.mydata(data)    
        }
        
    }
 componentWillReceiveProps(props){
    if(props.dft._id!=null){
        this.setState({
        isEdit:true,
        _id:props.dft._id,
        Name:props.dft.Name,
        Age:props.dft.Age,
        City:props.dft.City,
    })
}

 }
    render(){
        return(<>
            <form onSubmit={this.consoles}>
            <div className="mb-3 mt-3">
              <label htmlFor="Name" className="form-label">Name:</label>
              <input type="text" className="form-control" id="Name" placeholder="Enter Name" name="Name"
                  onChange={this.infoChange}
                  value={this.state.Name}
              />
            </div>

            <div  hidden={!this.state.isEdit} className="mb-3">
              <label htmlFor="_id" className="form-label">ID</label>
              <input type="text" hidden={!this.state.isEdit} className="form-control" id="_id" placeholder="Enter id" name="_id"
                   onChange={this.infoChange}
                  value={this.state._id}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="Age" className="form-label">Age</label>
              <input type="text" className="form-control" id="Age" placeholder="Enter Age" name="Age"
                   onChange={this.infoChange}
                  value={this.state.Age}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="City" className="form-label">City</label>
              <input type="text" className="form-control" id="City" placeholder="Enter City" name="City"
                   onChange={this.infoChange}
                  value={this.state.City}
              />
            </div>
            <button type="submit" className="btn btn-primary">{this.state.isEdit?"update":"create"}</button>
            
          </form>
          </>

        )
    }
}

export default Form

// import React from 'react';

// class Form extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             _id:'',
//             Name:'',
//             Age:'',
//             City:'',
//             isEdit:false,
//         }
//     }

//     infoChange=(event)=>{
//         const {name,value} = event.target
//         this.setState({[name]:value})
//     }
//     consoles=(event)=>{
//        if(!this.state.isEdit){//false
//            //post
//            // event.preventDefault();
//            let data = {
//                isEdit:this.state.isEdit,
//                Name:this.state.Name,
//                Age:this.state.Age, 
//               City:this.state.City,
//            }
//            this.props.myData(data)
//     }else{                 //to true
//         //update
//         // event.preventDefault();
//         let data = {
//             isEdit:this.state.isEdit,
//             _id:this.state._id,
//             Name:this.state.Name,
//             Age:this.state.Age, 
//            City:this.state.City,
//         }
//         this.props.myData(data)
//     }
           
//     }
   
// componentWillReceiveProps(props){
// console.log(props.edit)
// if(props.edit._id!=null){
//     this.setState({
//         _id:props.edit._id,
//         Name:props.edit.Name,
//         Age:props.edit.Age,
//         City:props.edit.City,
//         isEdit:true
//     })
// }
// }

//     render(){
//         return(
//             <form onSubmit={this.consoles}>
//   <div classNameName="mb-3 mt-3">
//     <label htmlFor="Name" classNameName="form-label">Name:</label>
//     <input type="text" classNameName="form-control" id="Name" placeholder="Enter Name" name="Name"
//         onChange={this.infoChange}
//         value={this.state.Name}
//     />
//     </div>
//       <div classNameName="mb-3 mt-3">
//     <label htmlFor="id" classNameName="form-label">ID:</label>
//     <input type="text" classNameName="form-control" id="id" placeholder="Enter id" name="_id"
//         onChange={this.infoChange}
//         value={this.state._id}
//     />
//   </div>
//   <div classNameName="mb-3">
//     <label htmlFor="Age" classNameName="form-label">Age:</label>
//     <input type="text" classNameName="form-control" id="Age" placeholder="Enter Age" name="Age"
//             onChange={this.infoChange}
//         value={this.state.Age}
//     />
//   </div>
//   <div classNameName="mb-3">
//     <label htmlFor="City" classNameName="form-label">City:</label>
//     <input type="text" classNameName="form-control" id="City" placeholder="Enter City" name="City"
//             onChange={this.infoChange}
//         value={this.state.City}
//     />
//   </div>
 
//   <button type="submit" classNameName="btn btn-primary">{(this.state.isEdit?"update":"create")}</button>
// </form>
//         )
//     }
// }

// export default Form