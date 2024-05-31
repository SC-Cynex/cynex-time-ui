export default {
  registerUser: async (values, setIsLoading) => {
    setIsLoading(true);
    try {
      // Registrar o endereço
      const dataAddress = {
        street: values.street,
        city: values.city,
        state: values.state,
        zipCode: values.cep,
        neighborhood: values.neighborhood,
        number: values.number,
      };

      const addressResponse = await fetch("http://localhost:3000/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAddress),
      });

      if (!addressResponse.ok) {
        throw new Error("Erro ao registrar o endereço!");
      }

      const addressData = await addressResponse.json();
      const addressId = addressData.id;

      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
        roleId: values.role,
        hourId: values.hour,
        teamId: values.team,
        addressId: addressId,
      };

      const userResponse = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!userResponse.ok) {
        throw new Error("Erro ao registrar o usuário!");
      }

      setIsLoading(false);
      return await userResponse.json();
    } catch (error) {
      console.error("Erro no registro de usuário:", error);
      setIsLoading(false);
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

  getHourRegister: async () => {
    try {
      const response = await fetch(`http://localhost:3000/hour`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar os horários");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar os horários:", error);
      throw error;
    }
  },

  getRoleRegister: async () => {
    try {
      const response = await fetch(`http://localhost:3000/role`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar os cargos");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar os cargos:", error);
      throw error;
    }
  },

  getDepartments : async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/department`, {
        method: "GET",
      }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar os departamentos");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar os departamentos:", error);
      throw error;
    }
  }
};
