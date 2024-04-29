function somar() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
  
    if (isNaN(valor1) || isNaN(valor2)) {
      alert("Por favor, digite apenas números!");
      return;
    }
  
    const resultado = valor1 + valor2;
  
    document.getElementById("resultado").textContent = `Resultado da soma: ${resultado}`;
  
    console.log(`A soma de ${valor1} e ${valor2} é: ${resultado}`);
  }
  