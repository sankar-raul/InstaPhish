const loginForm = document.getElementById('loginForm'), userId = document.getElementById('userId'), password = document.getElementById("password")

loginForm.onsubmit = (e) => {
    e.preventDefault()
    if (userId.value != '' && password.value.length >= 6) {
        login()
    } else {
        console.log("no")
    }
}
const login = async () => {
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: userId.value.trim(), password: password.value})
        })
        const data = await response.json()
        takeAction(data)
    } catch (error) {
        console.error(error)
    }
}
const takeAction = (data) => {
    if (data?.success) {
        location.href = `/?id=${data.id}`
    } else {
        console.log(data)
    }
}