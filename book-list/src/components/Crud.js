import React, { use, useState } from "react";
import Navbar from "./Navbar";

function Crud(){

    let[books, setBooks] = useState([
       { id:1,bookName :'zx',author:'as', publishDate:'4/2/2024'}
    ]);
    let[bookName, setBookName] = useState("");
    let[author, setAuthor] = useState("");
    let[publishDate, setPublishDate] = useState("");
    let[editingItemId, setEditingItemId] = useState(null);
    let[editedItem, setEditedItem] = useState("");
    let[searchTerm, setSearchTerm] = useState("");

    let handleSubmit = (e) =>{
        e.preventDefault();
        let x = books.length+1;
        let newBook = {
            id: x,
            bookName : bookName,
            author : author,
            publishDate: publishDate
        }
        setBooks([...books, newBook]);
        setBookName("");
        setAuthor("");
        setPublishDate("");
    };

    let handleDelete = (id)=>{
        let delItem = books.filter((item)=> item.id!== id);
        setBooks(delItem); 
    };

    let handleEdit =(item)=>{
        setEditingItemId(item.id);
        setEditedItem(item.bookName);
    }
    let handleSaveItem = () => {
    if (editedItem.trim() !== "") {
      const updatedItems = books.map((item) => {
        if (item.id === editingItemId) {
          return { ...item, bookName: editedItem };
        }
        return item;
      });
      setBooks(updatedItems);
      setEditingItemId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedItem("");
  };

  let handleSearch = (e) => {
    e.preventDefault();
    let filter = books.filter((item)=> item.bookName.toLowerCase().includes(searchTerm.toLowerCase()));
    if(filter==null){
        <p>No book found</p>
        console.log("no book found")
    } else
        setBooks(filter);
  }
 
  let handleResetSearch = () => {
    setSearchTerm("");
}

    return(
        <div>
             <div> <Navbar/> </div><br/>
             <div className = "container ">
      <div className = "row" >
          <div className= "col-md-8">
        <h3>CRUD</h3>
           <form onSubmit={handleSubmit}>
            <label>Book Name</label>
            <input type="text"  value= {bookName} onChange={(e)=>setBookName(e.target.value)}></input>
            <label>Author</label>
            <input type = "text" value= {author} onChange={(e)=>setAuthor(e.target.value)}></input>
            <label>Publish date</label>
            <input type="text" value= {publishDate} onChange={(e)=>setPublishDate(e.target.value)}></input>
            <button className="btn btn-small btn-success" type="submit">Add Book</button>
           </form>
        </div>
        </div>
        </div><br/>
           <div className="container">
        <table className =" table table-bordered table-dark">
            <tbody>
            <tr>
                <th>Id</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Publish Date</th>
                <th>Action</th>

            </tr>
            
            {books.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>
                {editingItemId === item.id ? (
                    <input type="text" value={editedItem} onChange={(e)=>setEditedItem(e.target.value)}/>
                ) : (
                    item.bookName
                   
                )}
            </td>
            <td>{item.author}</td>
            <td>{item.publishDate}</td>
            <td>
                {editingItemId === item.id ? (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={handleSaveItem}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                ) : (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>
                    </>
                )}
            </td>
        </tr>
            ))}
            </tbody>
        </table>
        </div>
        <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={handleSearch}>
                            <label>Search Name: </label>
                            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />&nbsp;
                            <button className="btn btn-small btn-success" type="submit">Search</button>&nbsp;
                        </form>
                    </div>
                </div>
            </div>
       </div>

    );
}

export default Crud;