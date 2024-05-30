export default {
    setTeamRegister: async (name, setMessage, setStatus, setEnable, setIsLoading) => {
        setIsLoading(true);
        try {
            var userId = parseInt(localStorage.getItem("id"));
            var register = {
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
            console.error("Erro ao registrar ponto:", error);
            setMessage("Erro ao registrar ponto");
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
}
