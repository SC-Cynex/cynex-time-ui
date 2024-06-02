export default {
  // CRUD Equipe
  setTeamRegister: async (name, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const userId = parseInt(localStorage.getItem("id"));
      const register = {
        name: name,
        leaderId: userId,
      };

      const response = await fetch("http://localhost:3000/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao registrar equipe:", error);
      setMessage("Erro ao registrar equipe");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },
  getTeamsRegister: async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/team`, {
        method: "GET",
      }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar as equipes");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar as equipes:", error);
      throw error;
    }
  },
  updateTeamtRegister: async (id, name, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const update = {
        name: name,
      };

      const response = await fetch(`http://localhost:3000/team/${id}`, {
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
      console.error("Erro ao atualizar equipe:", error);
      setMessage("Erro ao atualizar equipe");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },
  deleteTeamRegister: async(id, setMessage, setStatus, setEnable) => {
    try {
      const response = await fetch(
        `http://localhost:3000/team/${id}`, {
        method: "DELETE",
      }
      );

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
    } catch (error) {
      console.error("Erro ao registrar equipe:", error);
      setMessage("Erro ao registrar equipe");
      setStatus("error");
      setEnable(false);
      throw error;
    }
  },
  // CRUD Cargo
  setRoleRegister: async (name, accessLevel, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const register = {
        name: name,
        accessLevel: accessLevel,
      };

      const response = await fetch("http://localhost:3000/role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao registrar cargo:", error);
      setMessage("Erro ao registrar cargo");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },
  getRoleRegister: async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/role`, {
        method: "GET",
      }
      );

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
  updateRoleRegister: async (id, name, accessLevel, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const update = {
        name: name,
        accessLevel: accessLevel
      };

      const response = await fetch(`http://localhost:3000/role/${id}`, {
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
      console.error("Erro ao atualizar cargo:", error);
      setMessage("Erro ao atualizar cargo");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },
  deleteRoleRegister: async(id, setMessage, setStatus, setEnable) => {
    try {
      const response = await fetch(
        `http://localhost:3000/role/${id}`, {
        method: "DELETE",
      }
      );

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
    } catch (error) {
      console.error("Erro ao registrar cargo:", error);
      setMessage("Erro ao registrar cargo");
      setStatus("error");
      setEnable(false);
      throw error;
    }
  },
  // CRUD Horário de trabalho
  setHourRegister: async (start, end, lunchTime, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const register = {
        start: start,
        end: end,
        lunchTime: lunchTime
      };

      const response = await fetch("http://localhost:3000/hour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao registrar cargo:", error);
      setMessage("Erro ao registrar cargo");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },
  getHourRegister: async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/hour`, {
        method: "GET",
      }
      );

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
  updateHourRegister: async (id, start, end, lunchTime, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const update = {
        start: start,
        end: end,
        lunchTime: lunchTime
      };

      const response = await fetch(`http://localhost:3000/hour/${id}`, {
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
      console.error("Erro ao atualizar horário:", error);
      setMessage("Erro ao atualizar horário");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },
  deleteHourRegister: async(id, setMessage, setStatus, setEnable) => {
    try {
      const response = await fetch(
        `http://localhost:3000/hour/${id}`, {
        method: "DELETE",
      }
      );

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
    } catch (error) {
      console.error("Erro ao registrar horário:", error);
      setMessage("Erro ao registrar horário");
      setStatus("error");
      setEnable(false);
      throw error;
    }
  },
  // CRUD Departamento
  setDepartmentsRegister: async (name, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const register = {
        name: name
      };

      const response = await fetch("http://localhost:3000/department", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao registrar departamento:", error);
      setMessage("Erro ao registrar departamento");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
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
  },
  updateDepartmentRegister: async (id, name, setMessage, setStatus, setEnable, setIsLoading) => {
    setIsLoading(true);
    try {
      const update = {
        name: name,
      };

      const response = await fetch(`http://localhost:3000/department/${id}`, {
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
      console.error("Erro ao atualizar departamento:", error);
      setMessage("Erro ao atualizar departamento");
      setStatus("error");
      setEnable(false);
      setIsLoading(false);
      throw error;
    }
  },
  deleteDepartment: async(id, setMessage, setStatus, setEnable) => {
    try {
      const response = await fetch(
        `http://localhost:3000/department/${id}`, {
        method: "DELETE",
      }
      );

      const data = await response.json();
      setMessage(data.message);
      setEnable(true);
      setStatus(data.status);
    } catch (error) {
      console.error("Erro ao registrar departamento:", error);
      setMessage("Erro ao registrar departamento");
      setStatus("error");
      setEnable(false);
      throw error;
    }
  },
}
