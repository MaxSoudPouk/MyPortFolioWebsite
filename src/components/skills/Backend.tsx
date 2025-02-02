// import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { RiNpmjsLine } from "react-icons/ri";
// import { DiJavascript } from 'react-icons/di';
import { SiMysql, SiSpring } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { BiLogoPostgresql } from "react-icons/bi";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <FaGolang className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Golang</h3>
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

          <div className="skills__data">
            <RiNpmjsLine className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Node Js</h3>
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
            <BiLogoPostgresql className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">PostgreSql</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <FaDocker className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
