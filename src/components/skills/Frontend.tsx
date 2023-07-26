import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { BiLogoCss3, BiLogoReact, BiLogoJava } from 'react-icons/bi';
import { DiJavascript } from 'react-icons/di';
import { SiBootstrap } from 'react-icons/si';


function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <AiFillHtml5 className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <BiLogoCss3 className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <DiJavascript className="bx bx-badge-check"></DiJavascript>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <SiBootstrap className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <AiFillGithub className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <BiLogoReact className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
