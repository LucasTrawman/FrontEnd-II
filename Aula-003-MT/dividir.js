let dividir = (num1, num2) => {
  let valor1 = parseFloat(num1);
  let valor2 = parseFloat(num2);
  if (valor1 == 0 || valor2 == 0) {
    return "Não se pode dividir por zero";
  } else {
    return valor1 / valor2;
  }
};

export default dividir;
