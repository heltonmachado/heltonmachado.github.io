document.addEventListener('DOMContentLoaded', function () {
    const text = 'Programador Web, em constante evolução, estou sempre buscando novos desafios Profissionais.';
    const textOutput = document.getElementById('text-output');
  
    function typeWriter(text, index, callback) {
      if (index < text.length) {
        textOutput.innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
          typeWriter(text, index, callback);
        }, 50); // Ajuste a velocidade da digitação aqui
      } else {
        setTimeout(callback, 1000); // Aguarde 1 segundo após a digitação
      }
    }
  
    function startTyping() {
      typeWriter(text, 0, function () {
        // Aqui você pode adicionar ações após a digitação completa
        console.log('Digitação concluída!');
      });
    }
  
    startTyping();
  });
  