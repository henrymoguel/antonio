function deployDemo(){
  const s=document.getElementById("status");
  s.textContent="✓ Simulación: Dokploy recibió el despliegue y está preparando la aplicación.";
  s.style.color="#5b21b6";
  setTimeout(()=>{s.textContent="✓ Aplicación lista. Ahora puedes abrir el dominio configurado en Dokploy.";},1800);
}
