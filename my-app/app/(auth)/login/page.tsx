export default function Register() {
  return (
    <div className="flex flex-col  text-7xl font-extrabold flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Login page
    </div>
  );
}




//if we want to goup routes in nextjs we can use () brackets to group routes. e.g., 
// here we have grouped login and register routes in auth folder. 
//the url will be like localhost:3000/login and localhost:3000/register
//there will be no /auth behind them beacause we have used () brackets to group them.
// if we hadn't used () brackets then the url will be like localhost:3000/auth/login and localhost:3000/auth/register