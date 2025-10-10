import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
   setError, 
    
    formState: { errors, isSubmitting },  // Note: “isSubmitting”, not “issubmitting”
  } = useForm()

  const delay=(d)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve();
    }, d*1000);
  })
  }

  const onSubmit = async (data) => {
   // await delay(4)

       let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    //   if(data.username !== "shubham"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
    // console.log(data)
  }



  return (
    <div className="container">
      {isSubmitting && <div>Loding...</div>}
     <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Username:</label>
      <input   {...register("username" , { required: true, maxLength: {value:8 , message:"max length is 8"},minLength:{value:4 , message:"Min length is 4"} })} type="text"  /></div>

      {errors.username && <div style={{ color: 'red' }}>{errors.username.message}</div>}
      <div>

      <label htmlFor="">Password:</label>
      <input    {...register("password" , {required: true , maxLength:{value: 10 , message:"Max length is 10"}, minLength:{value:4,message:"min length is 4"}})} type="password" name='password' /></div>
      {errors.password&& <div style={{ color: 'red' }}>{errors.password.message}</div>}
      <input disabled={isSubmitting} type="submit" value="submit" />
         {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
     </form>
    </div>
  )
}

export default App
