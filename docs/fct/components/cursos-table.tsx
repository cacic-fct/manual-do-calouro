const courses = [
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

const css = `
table {
    text-align: center;
}
.course-name {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.25em;
}
`;

let organizedCourses: { name: string; description: string }[][] = [];

// Organize the courses into rows of 3
for (let i = 0; i < courses.length; i += 3) {
  organizedCourses.push(courses.slice(i, i + 3));
}

export default function CoursesTable(): JSX.Element {
  return (
    <>
      <style>{css}</style>

      <table>
        <tbody>
          {
            // Render 3 courses per row
            organizedCourses.map((row, i) => (
              <tr key={i}>
                {row.map((course, j) => (
                  <td key={j}>
                    <p className="course-name">{course.name}</p>
                    <p>{course.description}</p>
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
