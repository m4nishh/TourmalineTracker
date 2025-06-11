import React, { useEffect, useState } from "react";

interface Nomination {
  id: number;
  name: string;
  organization: string;
  designation: string;
  email: string;
  contact_no: string;
  categories: string;
  upload_photo: string;
  write_up: string;
  submitted_date: string; // assumed format: YYYY-MM-DD or ISO string
}

const Dashboard: React.FC = () => {
  const [nominations, setNominations] = useState<Nomination[]>([]);
  const [filteredNominations, setFilteredNominations] = useState<Nomination[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("http://localhost:4000/api/nominations")
      .then((res) => res.json())
      .then((data) => {
        setNominations(data.nominations);
        setFilteredNominations(data.nominations);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching nominations:", err);
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...Array.from(new Set(nominations.map((n) => n.categories)))];

  const applyFilters = () => {
    let filtered = [...nominations];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((n) => n.categories === selectedCategory);
    }

    if (startDate) {
      filtered = filtered.filter((n) => new Date(n.submitted_date) >= new Date(startDate));
    }

    if (endDate) {
      filtered = filtered.filter((n) => new Date(n.submitted_date) <= new Date(endDate));
    }

    setFilteredNominations(filtered);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, startDate, endDate, nominations]);

  const totalPages = Math.ceil(filteredNominations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredNominations.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6" style={{ backgroundColor: "#414B44" }}>
      <h1 className="text-2xl font-semibold mb-4 text-white">Nominations Dashboard</h1>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-4 text-sm items-end">
        <div>
          <label className="block mb-1 font-medium text-white">Filter by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded px-2 py-1"
            style={{ backgroundColor: "#414B44", color: "white" }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-white">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded px-2 py-1"
            style={{ backgroundColor: "#414B44", color: "white" }}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-white">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded px-2 py-1"
            style={{ backgroundColor: "#414B44", color: "white" }}
          />
        </div>
      </div>

      {loading ? (
        <p className="text-white">Loading nominations...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border">S.No</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Organization</th>
                <th className="px-4 py-2 border">Designation</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Contact</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Photo</th>
                <th className="px-4 py-2 border">Write Up</th>
                <th className="px-4 py-2 border">Submitted Date</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, idx) => (
                <tr key={item.id} className="text-gray-800">
                  <td className="px-4 py-2 border">{startIndex + idx + 1}</td>
                  <td className="px-4 py-2 border">{item.name}</td>
                  <td className="px-4 py-2 border">{item.organization}</td>
                  <td className="px-4 py-2 border">{item.designation}</td>
                  <td className="px-4 py-2 border">{item.email}</td>
                  <td className="px-4 py-2 border">{item.contact_no}</td>
                  <td className="px-4 py-2 border">{item.categories}</td>
                  <td className="px-4 py-2 border">
                    <img src={item.upload_photo} alt={item.name} className="h-10 w-10 object-cover rounded" />
                  </td>
                  <td className="px-4 py-2 border">{item.write_up}</td>
                  <td className="px-4 py-2 border">{item.submitted_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="mt-4 flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
