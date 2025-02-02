import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoReact } from 'react-icons/bi';
import { SiTailwindcss } from "react-icons/si";

import { BiLogoFlutter } from 'react-icons/bi';
import { SiDart } from 'react-icons/si';


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
            <SiTailwindcss className="bx bx-badge-check"/>

            <div>
              <h3 className="skills__name">Tailwindcss</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <BiLogoFlutter className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Flutter</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiDart className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Dart</h3>
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
