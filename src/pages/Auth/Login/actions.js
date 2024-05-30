export default {
  // função para logar
  signIn: (values, setMessage, setEnable, setStatus, setIsLoading) => {
    setIsLoading(true);
    let data = {
      email: values.email,
      password: values.password,
    };
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setEnable(true);
        setStatus(data.status);
        setIsLoading(false);
        if (data.statusCode === 202) {
          const expires = new Date();
          expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
          document.cookie = `token=${
            data.token
          };expires=${expires.toUTCString()};path=/`;

          localStorage.setItem("id", data.user);

          window.location = "/point-register";
        }
      })
      .catch(() => {
        setMessage('Erro na conexão com o servidor! Favor contatar o administrador do sistema.');
        setEnable(true);
        setStatus('error');
        setIsLoading(false);
      });
  },
};
