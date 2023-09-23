function login() {

    console.log("login!");

    const email = document.querySelector("#email").value;
    const pwd = document.querySelector("#password").value;

    //console.log(email);
    console.log(password);
    
    const hashedPWD = sha1(pwd);

    const body = {
        email,
        password: hashedPWD
    };

    console.log(body);

    fetch("http://localhost:8081/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
      .then(res => {
        //console.log(res);
        if (res && res.access_token) {
            // ruim - salvar token no localstorage / cookie
            // ideal - http only cookie
            // alternativa - ok - salvar no javascript... global - defeito - reload página - perde o token
            localStorage.setItem("token", res.access_token);
            //console.log(res.access_token);
            //console.log(localStorage.getItem("token"));
            window.location.href = "/Aula-01-exercicio/front/dashboard.html";
        }
      });

}

window.onload = function() {

    console.log("Logado com sucesso");

    document.querySelector("#email").focus();

}

