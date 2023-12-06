// import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { BiLogoJava, BiLogoPostgresql ,BiLogoFirebase} from 'react-icons/bi';
import { FaNodeJs} from 'react-icons/fa';
// import { DiJavascript } from 'react-icons/di';
import { SiMysql, SiSpring } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiLogoJava className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <FaNodeJs className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <BiLogoPostgresql className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">PostgreSql</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <SiMysql className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <FaDocker className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiSpring className="bx bx-badge-check"/>

            <div>
              <h3 className="skills__name">SpringBoot</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
