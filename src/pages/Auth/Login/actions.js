export default {
  // função para logar
  signIn: (values, setMessage, setEnable, setStatus, setIsLoading) => {
    setIsLoading(true);
    var data = {
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
        console.log(data);
        setMessage(data.message);
        setEnable(true);
        setStatus(data.status);
        setIsLoading(false);
        if (data.statusCode === 202) {
          localStorage.setItem("token", data.token);
          window.location = "/point-register";
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        setIsLoading(false);
      });
  },
};
