

const contributors = [
  { name: "Alice Johnson", reports: 120, avatar: "https://cdn.vectorstock.com/i/1000v/52/68/purple-user-icon-in-the-circle-thin-line-vector-23745268.jpg" },
  { name: "Bob Smith", reports: 98, avatar: "https://cdn.vectorstock.com/i/1000v/52/68/purple-user-icon-in-the-circle-thin-line-vector-23745268.jpg" },
  { name: "Charlie Lee", reports: 75, avatar: "https://cdn.vectorstock.com/i/1000v/52/68/purple-user-icon-in-the-circle-thin-line-vector-23745268.jpg" },
];

export default function TopContributors() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Community Heroes</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {contributors.map((contributor, index) => (
          <div key={index} className="card shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body flex items-center">
              <div className="avatar mr-4">
                <div className="w-16 rounded-full text-center">
                  <img src={contributor.avatar} alt={contributor.name} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-center">{contributor.name}</h3>
                <p className="text-gray-600">Helpful Reports: {contributor.reports}</p>
              </div>
              <div className="badge badge-secondary">#{index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}