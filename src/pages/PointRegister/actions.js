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
  // Registrar ponto no localStorage
  setPointRegister: (hours, date, setMessage, setType, setEnable) => {
    var register = {
      hour: hours,
      user: parseInt(localStorage.getItem("id")),
    };
    fetch("http://localhost:3000/point", {
      method: "POST",
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEnable(true);
        setMessage(data.message);
        setType("success");
      });
  },
  // Pegar horas registradas no localStorage
  getPointRegister: () => {
    var qtd = Object.keys(localStorage);
    var array = [];
    for (var i = 1; i <= qtd.length - 1; i++) {
      array[i] = JSON.parse(localStorage.getItem("point" + i));
      var arrayNotNull = array.filter(function (i) {
        return i;
      });
    }
    return arrayNotNull;
  },
};
