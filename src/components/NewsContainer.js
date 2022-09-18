import React, {Component} from 'react';

export default class NewsContainer extends Component{
    render(){
        let{title, imageUrl,font}=this.props;
        return(
            <>
                <div className='d-flex' style={{maxHeight:"150px", overflow:"hidden"}}>
                    <img className='my-auto' src={imageUrl} style={{height:"100%", width:"40%",margin:"0 5px 0 0" }} alt=''/>
                    <p className={font}>{title}</p>
                </div>
            </>
        );
    }
}