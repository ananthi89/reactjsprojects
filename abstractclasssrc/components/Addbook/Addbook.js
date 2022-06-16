import './Addbook.css';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {bookIdValidation,bookTitleValidation,bookDescValidation,authorNameValidation,noBooksValidation}  from '../Validation';
import axios from 'axios';
function Addbook(){

  const[getForm,setForm]=useState({
    bookId:'',
    bookTitle:'',
    bookDesc:'',
    authorName:'',
    noBooks:''
  });

  const[getValidation,setValidation]=useState({
    bookId:'',
    bookTitle:'',
    bookDesc:'',
    authorName:'',
    noBooks:''
  });

  const navigate = useNavigate();


  const onChangeHandler=(event)=>{
    setForm({
      ...getForm,[event.target.name]:event.target.value
    })
  }
  
  const onAddHandler=(event)=>{
    event.preventDefault();
    setValidation({
      ...getValidation,bookid:!bookIdValidation(getForm.bookId)?"please provide BookId":'',
      bookTitle:!bookTitleValidation(getForm.bookTitle)?"Please provide BookTitle":'',
      bookDesc:!bookDescValidation(getForm.bookDesc)?"Please provide BookDescription":'',
      authorName:!authorNameValidation(getForm.authorName)?"Please provide AuthorName":'',
      noBooks:!noBooksValidation(getForm.noBooks)?"Please provide NumberofBooks":''
    });
    if(getForm.bookId && getForm.bookTitle && getForm.bookDesc && getForm.authorName && getForm.noBooks){
      axios.post('http://localhost:3000/library',{
            bookId:getForm.bookId,  
            bookTitle:getForm.bookTitle,
            bookDesc:getForm.bookDesc,
            authorName:getForm.authorName,
            noBooks:getForm.noBooks
          }).then(()=>{
            navigate('/AdminSearch');
          }).catch(()=>{
             alert("error");
          })
     
    //   let bookDetails=[];
    //   if(sessionStorage.getItem('bookDetails')){ 
    //     let details = JSON.parse(sessionStorage.getItem('bookDetails'));
    //     console.log( details);
    //     bookDetails.push(...details);
    //     bookDetails.push({...getForm});
    //     sessionStorage.setItem("bookDetails",JSON.stringify(bookDetails));
    //   }
    //   else{
    //     bookDetails.push({...getForm});
    //     sessionStorage.setItem("bookDetails",JSON.stringify(bookDetails))
    //   }
    //   navigate('/AdminSearch');
    }
    else{
      alert("Please add some data");
    }
  }


    return(<div>
        
        <div className="container">
            <div className="row">
            
              <div className="col-12">
                  <form>       
                    <div><label><h1>Add Book</h1></label></div> 
                   
                    <div className="form-group row">   
                    <table className="addbook_table">
                      <tbody>
                      <tr>
                        <td><label >Book ID:</label></td>
                        <td><input type="text" onChange={onChangeHandler} className="form-control" value={getForm.bookId} id="bookId" name="bookId"/></td>
                      </tr>
                      <tr>
                        <td><label >Book Title:</label>  </td>
                        <td><input type="text" onChange={onChangeHandler} className="form-control " value={getForm.bookTitle} id="bookTitle" name="bookTitle" /></td>
                      </tr>
                      <tr>
                        <td><label >Book Desc:</label></td>
                        <td><input type="text" onChange={onChangeHandler} className="form-control" value={getForm.bookDesc} id="bookDesc" name="bookDesc" /></td>
                      </tr>
                      <tr>
                        <td><label >Author Name:</label> </td>
                        <td><input type="text" onChange={onChangeHandler} className="form-control" value={getForm.authorName} id="authorName" name="authorName" /></td>
                      </tr>
                      <tr>
                        <td><label>Number of Book Available:</label>  </td>
                        <td><input type="text" onChange={onChangeHandler} width={20} className="form-control" value={getForm.noBooks}  id="noBooks" name="noBooks"  /></td>
                      </tr>
                      </tbody>
                    </table>                                                            
                       
                    </div>
                                                                 
                      <button type="submit" onClick={onAddHandler} className="btn btn-warning ab-subbtn" >Add Book</button>
                    </form>
              </div>
              
                            
            </div>
   
        </div>
    </div>)
}

export default Addbook;
