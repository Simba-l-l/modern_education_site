import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

function Input_comment() {
    const [name, setName] = useState();
    const [comment, setComment] = useState();
    const [coments, setComments] = useState([])

    return (
        <div className="comynity"> 
        <form>
            <label>
                Оставить комментарий
            </label>
            <p><input value={name} onChange={(e)=> setName(e.target.value)}/></p>
            <p><textarea value={comment} onChange={(e)=> setComment(e.target.value)}></textarea></p>
            <p><button onClick={(e)=>{
                e.preventDefault()
                setComment(' ')    
                setName(' ')
                coments.push({'name': name, 'text': comment})
            }}>отправить</button></p>
        </form>
        <div className="coments">
            {coments.map((coment)=>(
                <div className="card" key={coment['name'] + coment['text']}>
                <div className="card-body">
                  <h5 className="card-title"> {'👥' + coment['name']}</h5>
                  <p className="card-text">{'💬' + coment['text']}</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>

          
            ))}
        </div>
        </div>
    )
}

export default Input_comment;