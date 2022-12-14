import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <div className="titles">
      <h2>Taidot</h2>
      </div>

      <div className="container skills__container">
        <article className="skills">
          <div className="skills__header">
            <h3>Ohjelmointikielet</h3>
          </div>

          <ul className="skills__list">
            <li>
              <p>- C#</p>
            </li>
            <li>
              <p>- GDScript (Python)</p>
            </li>
            <li>
              <p>- Java</p>
            </li>
            <li>
              <p>- JavaScript (React)</p>
            </li>
          </ul>
        </article>
        {/* END OF LANGUAGES */}

        <article className="skills">
          <div className="skills__header">
            <h3>Pelimoottorit</h3>
          </div>

          <ul className="skills__list">
            <li>
              <p>- Unity</p>
            </li>
            <li>
              <p>- Godot</p>
            </li>
            <li>
              <p>- Unreal Engine 5</p>
            </li>
          </ul>
        </article>
        {/* END OF GAME ENGINES */}

        <article className="skills">
          <div className="skills__header">
            <h3>Kehitystyökalut</h3>
          </div>

          <ul className="skills__list">
            <li>
              <p>- Visual Studio Code</p>
            </li>
            <li>
              <p>- Visual Studio 2019/2022</p>
            </li>
            <li>
              <p>- GitHub</p>
            </li>
            <li>
              <p>- Git Extensions</p>
            </li>
            <li>
              <p>- Git Desktop</p>
            </li>
            <li>
              <p>- Trello</p>
            </li>
            <li>
              <p>- WinSCP</p>
            </li>
          </ul>
        </article>
        {/* END OF GAME TOOLS */}

        <article className="skills">
          <div className="skills__header">
            <h3>Kuvankäsittely ja 3D-mallinnus</h3>
          </div>

          <ul className="skills__list">
            <li>
              <p>- Photoshop</p>
            </li>
            <li>
              <p>- Gimp</p>
            </li>
            <li>
              <p>- Aseprite</p>
            </li>
            <li>
              <p>- Blender</p>
            </li>
            <li>
              <p>- Rhinoceros 7</p>
            </li>
          </ul>
        </article>
        {/* END OF IMAGE AND 3D MODELING */}
        
      </div>
    </section>
  )
}

export default Skills