import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import './PytorchModel.css';
import Footer from '../components/Footer';

const MaxFileSize = 10048;  // file size, Pytorch model of anysize can be specified here
export default class News extends Component{
    constructor(props){
        super(props);
        this.state={
            // state data comes here
        }
    }
    //Dropzone function handler
    handleOnDrop=(files, rejectedFiles)=>{
        console.log(files);
        console.log(rejectedFiles); //more than one file that are added into the dnd will go into the rejectedFiles section
    }
    render(){
        return(
            <div>
                <div className="first">
                    <p className="subfirst">Drop Model</p>
                </div>
                <div className="dropdiv">
                    <Dropzone onDrop={this.handleOnDrop} max={MaxFileSize}>
                        Drop your files here
                    </Dropzone>
                </div>
                <Footer />
            </div>
        )
    }
}