import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [blog,setBlog]=useState({heading:"",content:""});

  async function fetchBlogs() {
    let response = await fetch("/api/blog/read");
    response = await response.json();
    setBlogs(response);
  }

  useEffect(() => {
    fetchBlogs();
  });

  function handleChange(event){
     const name=event.target.name;
     const value=event.target.value;
     setBlog({...blog,[name]:value});
   
  }

 async function handleSubmit(){
    let response=await fetch("/api/blog/create",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(blog)
    });

    if(response.status=="201"){
      alert("Blog Added Successfully.");
    }
    else{
      alert("There is an error in adding the new Blog. Please Try Again!")
    }

    
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* modal code start */}
        <button
          type="button"
          class="btn btn-primary"
         
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
         Add Blog
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Blog
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Heading:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      name="heading"
                      onChange={handleChange}
                      value={blog.heading}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      Content:
                    </label>
                    <textarea class="form-control" onChange={handleChange} value={blog.content} id="message-text" name="content" required></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary"   data-bs-dismiss="modal"  onClick={handleSubmit}>
                 Add Blog
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal code end */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <hr />
      </div>
      {blogs
        ? // <h1>Blogs List</h1>
          blogs.map((element, index) => {
            return (
              <div>
                <h2>{element.heading}</h2>
                <p>{element.content}</p>
                <p>Create At: {element.createdAt}</p>
                <hr />
              </div>
            );
          })
        : null}
    </>
  );
}

export default App;
