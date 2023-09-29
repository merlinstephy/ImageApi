import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Photo() {
    const [photoGalleryArrayItem, updatePhotoGalleryArrayItem] = useState([]);
    useEffect(() =>{
  
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (response)
        {
          updatePhotoGalleryArrayItem(response.data);
          
        })
        .catch(function(error)
        {
          console.log(error);
        })
        .then (function ()
        {
  
        });
   },[])
    return (
      <div className='Photo'>
        <div className='row'>
        {
            photoGalleryArrayItem.map((updatePhotoGalleryArrayItem , index ) => {
                console.log(photoGalleryArrayItem.url , index);
                return(
                    <div key ={index} className='col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2'>
                    <img src={updatePhotoGalleryArrayItem.url} alt={''}
                    height ="300"
                    width= "400"
                    />
                   
                    </div>
                )
            }
            )
        }
 </div>
</div>
    );
        
    
    
    
    }
    
    export default Photo;