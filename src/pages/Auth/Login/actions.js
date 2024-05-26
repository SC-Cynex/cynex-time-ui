export default {
  //função para logar
  signIn: (values) => {
    var data = {
      "email": values.email,
      "password": values.password,
    };

    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  },
};
