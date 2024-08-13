
import axios from 'axios'

export default function changeWebTrans(langCode){
    return (dispatch)=>{
        console.log("langcode " , langCode);
      return axios.post('https://bills.arrowad.sch.sa/aitsp/web_trans',{
        lang: langCode,
      }).then((res) => {

        dispatch({type:"SET_WEB_TRANS",payload:res.data.languages[0].web});
        }).catch((err) => {
            console.log(err);
        })

    }
}




