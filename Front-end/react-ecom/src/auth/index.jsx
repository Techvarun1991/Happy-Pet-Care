//baseon localStorage
//login

export const login = (data,next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next(); 
  
};
 const clearStorage=()=>{
  let session=sessionStorage.getItem("data");
  if(session==null){
    localStorage.removeItem("data")
  }
  sessionStorage.setItem("data",1)
 }
window.addEventListener('load',clearStorage)
//logout
export const logout = (next) => {
  localStorage.removeItem("data");
  next()
};

//checkLogin
export const checkLogin = () => {
  const data = localStorage.getItem("data");
  if (data) {
    const ob = JSON.parse(data);
    if (ob.token && ob.user) {
      return true;
    }
  }
  

  return false;
};

//getToken
export const getToken = () => {
  if (checkLogin()) {
    const token = JSON.parse(localStorage.getItem("data")).token;
    return token;
  } else {
    return null;
  }
};

//getCurrentUser
export const getCurrentUser = () => {
  
  if (checkLogin()) {
    
    const user = JSON.parse(localStorage.getItem("data")).user;
    return user;
  } else {
    return null;
  }
};


// admin Login 
export const adminLogin=()=>{
  let user=getCurrentUser();
   let flag=user.roles.find(r=>r.id===5245)
  return flag?true:false;
}