
export const loginUser =async (email,password)=>{
    try {
        const data = {
          email,
          password
        };
        const config = {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
    
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        };
        const response = await fetch("https://prescribe-server.herokuapp.com/Login", config);
          return await response.json()
      } catch (e) {
          console.error(e)
      }
}

export const registerUser =async (email,password)=>{
    try {
        const data = {
          email,
          password
        };
        const config = {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
    
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        };
        const response = await fetch("https://prescribe-server.herokuapp.com/Signup", config);
          return await response.json()
      } catch (e) {
          console.error(e)
      }
}