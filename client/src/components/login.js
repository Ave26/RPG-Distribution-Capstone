
const username = document.getElementById('username')
const password = document.getElementById('password')
const btnLogin = document.getElementById('btn-login')


const loginUser = async()=>{
    
    const user = username.value
    const pwd = password.value

    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: {
            username: user,
            password: pwd,
        }
    })
    const data = await response.json()
    console.log(data)

    console.log('click')
}

btnLogin.addEventListener('click', (e)=>{
    e.preventDefault()
    loginUser()
})