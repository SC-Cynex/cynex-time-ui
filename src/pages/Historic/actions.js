export default {
    getUserById: async () => {
        try {
            const id = localStorage.getItem("id");

            const res = await fetch(`http://localhost:3000/user/${id}`);
            if (!res.ok) {
                throw new Error("Erro ao buscar os dados do usuário!");
            }
            const data = await res.json();

            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

