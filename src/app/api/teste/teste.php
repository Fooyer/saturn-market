<?php

// Define a rota
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/api/teste') {

  // Define a resposta da rota
  $resposta = 'Esta é a resposta da minha rota.';

  // Imprime a resposta
  echo $resposta;
}

?>