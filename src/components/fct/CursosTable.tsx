import React from 'react';

interface Course {
  name: string;
  description: string;
}

const courses: Course[] = [
  {
    name: "Arquitetura e urbanismo",
    description: "5 anos, Integral, 40 vagas",
  },
  {
    name: "Ciência da computação",
    description: "4 anos, Vespertino e noturno, 35 vagas",
  },
  {
    name: "Educação física",
    description: "4 anos, Integral ou vespertino e noturno, 45 vagas",
  },
  {
    name: "Engenharia ambiental",
    description: "5 anos, Integral, 35 vagas",
  },
  {
    name: "Engenharia cartográfica e de agrimensura",
    description: "5 anos, Integral, 40 vagas",
  },
  {
    name: "Estatística",
    description: "4 anos, Integral, 30 vagas",
  },
  {
    name: "Física",
    description: "4 anos, Noturno, 30 vagas",
  },
  {
    name: "Fisioterapia",
    description: "4 anos, Integral, 45 vagas",
  },
  {
    name: "Geografia",
    description: "4 anos, Matutino ou noturno, 40 vagas",
  },
  {
    name: "Matemática",
    description: "4 anos, Matutino ou noturno, 40 vagas",
  },
  {
    name: "Pedagogia",
    description: "4/5 anos, Vespertino ou noturno, 45 vagas",
  },
  {
    name: "Química",
    description: "5 anos, Noturno, 40 vagas",
  },
];

// Organize the courses into rows of 3
const organizedCourses: Course[][] = [];
for (let i = 0; i < courses.length; i += 3) {
  organizedCourses.push(courses.slice(i, i + 3));
}

export default function CursosTable(): React.JSX.Element {
  return (
    <>
      <style>{`
        .cursos-table {
          text-align: center;
        }
        .course-name {
          font-weight: bold;
          text-transform: uppercase;
          font-size: 1.25em;
        }
      `}</style>
      <table className="cursos-table">
        <tbody>
          {organizedCourses.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((course, courseIndex) => (
                <td key={courseIndex}>
                  <div className="course-name">{course.name}</div>
                  <div>{course.description}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
