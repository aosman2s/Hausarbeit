import axios from axios;

const url = 'http://localhost:5000/api/posts/';

class PostService{

    static getHTMLText(){
        return new Promise( async (resolve, reject)=>{
            try{
                const res = await axios.get(`${url}html`)
                const data = res.data;
                resolve( data)
            }catch(err){
                reject(err)
            }
        });
    }
}

export default PostService;