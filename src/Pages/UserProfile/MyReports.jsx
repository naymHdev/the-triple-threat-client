const crimeReports = [
  {
    _id: "65f4c1e2b4f4a3d1e4c2b3a1",
    title: "Burglary in Residential Area",
    description: "A burglary was reported in the residential area of Mirpur.",
    division: "Dhaka",
    district: "Mirpur",
    crimeTime: "2025-02-10T14:30:00Z",
    createAt: "2025-02-12T11:18:04Z",
    updateAt: "2025-02-12T11:18:04Z",
    userId: "65f4c1e2b4f4a3d1e4c2b3a2",
  },
  {
    _id: "65f4c1e2b4f4a3d1e4c2b3a3",
    title: "Theft in Market",
    description: "A theft incident was reported in the local market.",
    division: "Dhaka",
    district: "Gulshan",
    crimeTime: "2025-02-11T10:00:00Z",
    createAt: "2025-02-12T11:18:04Z",
    updateAt: "2025-02-12T11:18:04Z",
    userId: "65f4c1e2b4f4a3d1e4c2b3a4",
  },
];

const MyReports = () => {
  return (
    <>
      <div className="space-y-4 mt-8">
        {crimeReports.map((report) => (
          <div key={report._id} className=" border-b border-neutral-200 pb-6">
            <h2 className=" text-lg font-semibold">{report.title}</h2>
            <p className="text-gray-600 text-sm font-medium">
              {report.description}
            </p>
            <div className="mt-2 text-sm text-gray-500 space-y-1">
              <p>
                <strong>Division:</strong> {report.division}
              </p>
              <p>
                <strong>District:</strong> {report.district}
              </p>
              <p>
                <strong>Crime Time:</strong>
                {new Date(report.crimeTime).toLocaleString()}
              </p>
              <p>
                <strong>Created Time:</strong>
                {new Date(report.createAt).toLocaleString()}
              </p>
              <p>
                <strong>Updated Time:</strong>
                {new Date(report.updateAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyReports;
