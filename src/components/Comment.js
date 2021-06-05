import React from 'react'

class Comment extends React.Component {

    constructor() {
        super()
        this.state = {
            comment: ""
        }
    }

    render(){
        console.log("comment container")
        return (
           <div>
               <form>
                   <input>
                   </input>
               </form>
           </div>
        )
    }
}

export default Comment