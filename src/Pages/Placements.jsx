import "./Placements.css";

export default function Placement() {
  const stats = [
    { year: 2015, file: "USICT Placement Matrix 2015", date: "17-09-2020" },
    { year: 2016, file: "USICT Placement Matrix 2016", date: "17-09-2020" },
    { year: 2017, file: "USICT Placement Matrix 2017", date: "17-09-2020" },
    { year: 2018, file: "USICT Placement Matrix 2018", date: "17-09-2020" },
    { year: 2019, file: "USICT Placement Matrix 2019", date: "17-09-2020" },
    { year: 2020, file: "USICT Placement Matrix 2020", date: "17-09-2020" },
    { year: 2021, file: "USICT Placement Matrix 2021", date: "25-11-2021" },
    { year: 2022, file: "USICT Placement Matrix 2022", date: "25-11-2021" },
    { year: 2023, file: "USICT Placement Matrix 2023", date: "04-07-2024" },
    { year: 2024, file: "USICT Placement Matrix 2024", date: "04-07-2024" },
  ];

  return (
    <div className="placement-page">
      <h1 className="placement-title">USICT Placement Cell</h1>

      <div className="officials">
        <h2>Placement Cell Officials</h2>
        <div className="officials-info">
          <p><strong>Dr. Ashish Payal</strong> — Training & Placement Officer</p>
          <p><strong>Sh. Rajeev Singh</strong> — Member, Training & Placement Cell</p>
          <p><strong>Phone:</strong> 011-25302739</p>
          <p><strong>Email:</strong> <a href="mailto:usict.placementcell@ipu.ac.in">usict.placementcell@ipu.ac.in</a></p>
        </div>
      </div>

      <div className="placement-stats">
        <h2>Placement Statistics (Year Wise)</h2>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Year</th>
              <th>File</th>
              <th>Format</th>
              <th>Updated On</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((row, idx) => (
              <tr key={row.year}>
                <td>{idx + 1}</td>
                <td>{row.year}</td>
                <td>
                  <a href="#" className="file-link">{row.file}</a>
                </td>
                <td>PDF</td>
                <td>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
