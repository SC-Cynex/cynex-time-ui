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
    setPointRegister: (hours, date) => {
        var score = parseInt(localStorage.getItem('score'));
        if (isNaN(score)) {
            score = 0;
        }
        score += 1;
        localStorage.setItem('score', score);
        var register = {
            "horas": hours,
            "data": date
        }
        localStorage.setItem('point' + score, JSON.stringify(register));
    },
    getPointRegister: () => {
        var qtd = Object.keys(localStorage);
        var array = [];
        for (var i = 1; i <= qtd.length - 1; i++) {
            array[i] = JSON.parse(localStorage.getItem('point' + i));
            var arrayNotNull = array.filter(function (i) {
                return i;
            });
        }
        return arrayNotNull;
    }
};
