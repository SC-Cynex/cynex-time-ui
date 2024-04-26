export default {
    currentHours: () => {
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        return new Date().toLocaleTimeString('pt-BR', options);
    },
    currentDate: () => {
        const currentDate = new Date();
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return currentDate.toLocaleDateString('pt-BR', options);
  },
};
