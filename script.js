async function fetchMaterias() {
  const resp = await fetch('data/materias.json');
  if (!resp.ok) throw new Error('No se pudo cargar materias.json');
  return resp.json();
}

function crearMateria(el, m) {
  const d = document.createElement('div');
  d.className = `materia ${m.estado}`;
  d.innerHTML = `<strong>${m.nombre}</strong><br>Semestre: ${m.semestre}<br>Créditos: ${m.creditos}`;
  d.onclick = () => alert(`${m.nombre}\nEstado: ${m.estado}\nCréditos: ${m.creditos}`);
  el.appendChild(d);
}

window.addEventListener('DOMContentLoaded', async () => {
  const datos = await fetchMaterias();
  const cont = document.getElementById('malla');
  cont.innerHTML = '';
  datos.forEach(m => crearMateria(cont, m));
});
