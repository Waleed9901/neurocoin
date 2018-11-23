import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import './News.css';

const MaxFileSize = 10048; // file size, Pytorch model of anysize can be specified here
export default class News extends Component{
    constructor(props){
        super(props);
        this.state={
            // state data comes here
        }
    }
    onChange(e){
        let file = e.target.file;
        console.warn("file data", file);
    }
     
    //Dropzone function handler
    handleOnDrop=(files, rejectedFiles)=>{
        console.log(files);
        console.log(rejectedFiles); //more than one file that are added into the dnd will go into the rejectedFiles section
    }
    render(){
        return(
            <div>
                <div onSubmit={this.onFormSubmit} className="mydiv">
                    <h1>Ehh!</h1>
                    {/*pytorch file drag and drop implementation*/}
                    <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                </div>
                <div className="dropdiv">
                    <Dropzone onDrop={this.handleOnDrop} multiple={false} max={MaxFileSize} accept={{/*specify the format you want to dnd*/}}>
                        Drop your files here
                    </Dropzone>
                </div>
            </div>
        )
    }
}