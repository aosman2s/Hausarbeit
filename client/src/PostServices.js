import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService{

    static async getHTMLText(){
        return new Promise(  (resolve, reject)=>{
            try{
                const res =  axios.get(`${url}html`)
                const data = res.data;
                resolve(data)
            }catch(err){
                reject(err)
            }
        });
    }
}

export default PostService;