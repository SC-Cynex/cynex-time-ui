export default {
  // Retornar hora atual
  currentHours: () => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return new Date().toLocaleTimeString("pt-BR", options);
  },
  // Retornar data atual
  currentDate: () => {
    const currentDate = new Date();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return currentDate.toLocaleDateString("pt-BR", options);
  },
  setPointRegister: async (
    hours,
    setMessage,
    setStatus,
    setEnable,
    setIsLoading
  ) => {
    setIsLoading(true);
    try {
      var userId = parseInt(localStorage.getItem("id"));
      var register = {
        hour: hours,
        user: { connect: { id: userId } },
      };

      const response = await fetch("http://localhost:3000/point", {
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
      console.error("Erro ao registrar ponto:", error);
      throw error;
    }
  },

  getPointRegister: async () => {
    try {
      const userId = localStorage.getItem("id");
      const response = await fetch(
        `http://localhost:3000/point/last-eight/${userId}`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar os últimos oito registros");
      }

      const data = await response.json();
      return data.map((item) => ({
        horas: item.hour,
        data: formatarData(item.createdAt),
      }));
    } catch (error) {
      console.error("Erro ao buscar os últimos oito registros:", error);
      throw error;
    }
  },
};

const formatarData = (dataString) => {
  const data = new Date(dataString);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return data.toLocaleDateString("pt-BR", options);
};
