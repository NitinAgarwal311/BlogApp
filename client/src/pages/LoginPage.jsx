function LoginPage() {
  return (
    <div className="text-center flex flex-col mt-10 justify-center items-center">
        <div className="text-4xl font-bold">Login</div>
        <form className="flex flex-col gap-2 w-[50%] mt-4">
            <input type="text" className="input-login" name="username" placeholder="Username"/>
            <input type="password" className="input-login" name="password" placeholder="Password" />
            <button type="submit" className="button-login"> Login</button>
        </form>
    </div>
  )
}

export default LoginPage