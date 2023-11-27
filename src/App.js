import { Route, Routes } from "react-router-dom";
import GetAxios from "./Component/GetAxios";
import NavBar from "./Component/NavBar";
import PostAxios from "./Component/PostAxios";
import Create from "./CrudApk/Create";
// import Read from "./CrudApk/Read";
import Edit from "./CrudApk/Edit";
import { Suspense, lazy } from "react";

const Read= lazy(()=> import('./CrudApk/Read'))

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={
          <>
            <div style={{ textAlign: 'center' }}>
              <h1 className="text">Welcome to the Axios page</h1>
            </div>
          </>
        } />
        <Route path="/get" element={
          <>
            <div className="container">
              <div style={{ textAlign: "center" }}>
                <GetAxios />
              </div>
            </div>
          </>

        } />

        <Route exact path="/post" element={<PostAxios />} />
        <Route exact path="/read" element={
          <>
          <div style={{textAlign:"center"}}>
            <h1 className="text">Welcome to the CRUD Apk</h1>
          </div>
          <Suspense fallback={ <h2 style={{textAlign:'center', fontSize:"50px"}}>Loading...</h2> }>
              <Read/>
          </Suspense>
          </>
        
        } />
        <Route exact path="/create" element={
        <>
        <div style={{textAlign:"center"}}>
          <h1 className="text">Welcome to the CRUD Apk</h1>
        </div>
        <Create />
        </>
        
        } />
        <Route exact path="/edit" element={
          <>
          <div style={{textAlign:"center"}}>
            <h1 className="text">Welcome to the CRUD Apk</h1>
          </div>
          <Edit />
          </>
        
        } />


      </Routes>
      



    </>
  )
}

export default App;
