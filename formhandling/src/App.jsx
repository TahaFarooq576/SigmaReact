import React from 'react';
import { useForm } from "react-hook-form";





function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>

        <div>
          <label>Password (exampleRequired):</label>
          <input
            {...register("password", { required: "Password is required", minLength:8 })}
            type="password"
          />
          {errors.exampleRequired && <span>{errors.exampleRequired.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
