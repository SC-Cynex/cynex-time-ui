export default {
  registerUser: async (values) => {
    try {
      const res = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Erro ao registrar um usuário!");
      }

      return await res.json();
    } catch (error) {
      console.error("Erro no registro de usuário:", error);
      throw error;
    }
  },

  fetchAddress: async (cep) => {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();

      if (data.erro) {
        throw new Error("CEP inválido!");
      }

      return {
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      };
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
      throw error;
    }
  },
};
