import { CanActivateFn } from '@angular/router';

export const adminaccessGuard: CanActivateFn = (route, state) => {

  console.log("in guard");
  let myurl;
  let usrTyp;
  usrTyp=localStorage.getItem("userType");
  if(state.url!=null&&state.url!=''&&state.url!=undefined)
{
  myurl=state.url;
  console.log("url"+myurl );
}

if(usrTyp!=null&&usrTyp!=''&&usrTyp!=undefined){

        if(myurl?.includes("admin")&&usrTyp=='admin'){
          return true;    
        }
        else {return false};

}
else {return true};

};
