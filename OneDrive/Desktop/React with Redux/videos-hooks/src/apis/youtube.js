import axios from 'axios';



const KEY = 'AIzaSyBnREyghaC9routgnZ-mo11CVrtBFuhb4Y';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',

  params: {
    part: 'snippet',
    //type: 'video',
    maxResult: 5,
    key: KEY
  }

});
