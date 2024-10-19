const Home = () => {
  return ( 
    <>
      <h1 className="font-bold my-4">Landing Page Pública</h1>

      esta sección no tiene sidebar al ser pública. Probar las siguientes secciones privadas:

      <ul>
        <li>
          <a className="underline" href="profiles/creator">Profile Creador (privado)</a>

        </li>
        <li>
          <a className="underline" href="profiles/public">Perfil público (privado)</a>
        </li>
      </ul>
    </>
   );
}

export default Home;