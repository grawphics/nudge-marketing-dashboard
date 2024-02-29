export default function Login() {
  
    const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const role = e.target.elements.role.value;
    console.log(`Email : ${email} Password:${password} Role: ${role}`);

    const url = 'https://api.nudgenow.com/clients/login';
    const options = {
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "email" : email ,
            "password": password,
            "role" : role })
    };
    
    try{
        const response = await fetch(url , options);
        if(!response.ok) {
            console.log("Error" , response.message)
        }
        const data = await response.json()
        console.log(data)
    } catch(err){
        console.log(err)
    }




  };

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-gray-300 flex flex-col gap-2 text-gray-800 px-6  py-12 my-auto items-center justify-center"
        >
          <p>Login</p>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <select name="role">
            <option value="owner">Owner</option>
            <option value="co-owner">Co-owner</option>
          </select>
          <button type="submit" className="w-24 rounded-sm bg-blue-600 text-white px-auto">Login</button>
        </form>
      </div>
      
    </>
  );
}
