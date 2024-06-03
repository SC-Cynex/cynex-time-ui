export default {
  getUserById: async (id) => {
    console.log(id)
    try {
      const res = await fetch("http://localhost:3000/user/" + id);
      if (!res.ok) {
        throw new Error("Erro ao buscar os dados do usuário!");
      }
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  addTeamUser: async (id, teamId, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);

    try {
      const update = {
        teamId: parseInt(teamId)
      };

      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      });

      const data = await response.json();
      setMessage("Usuário adicionado à equipe com sucesso");
      setEnable(true);
      setStatus(data.status);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao atualizar equipe do usuário:", error);
      setMessage("Erro ao atualizar equipe do usuário");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },

  getHourRegister: async () => {
    const response = await fetch('http://localhost:3000/hours');
    return response.json();
  },

  getRoleRegister: async () => {
    const response = await fetch('http://localhost:3000/roles');
    return response.json();
  },

  getUserById: async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}`);
    return response.json();
  },

  updateTeamUser: async (id, values, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const update = {
        hourId: values.hour,
        roleId: values.role
      };

      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      });

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
      setMessage("Erro ao atualizar dados do usuário");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },

  removeUserTeam: async (id, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const update = {
        teamId: null
      };

      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      });

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao remover usuário da equipe:", error);
      setMessage("Erro ao remover usuário da equipe");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
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
}