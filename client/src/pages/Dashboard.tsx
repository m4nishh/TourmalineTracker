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
  submitted_date: string;
}

const Dashboard: React.FC = () => {
  const [nominations, setNominations] = useState<Nomination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/nominations")
      .then((res) => res.json())
      .then((data) => {
        setNominations(data.nominations);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching nominations:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Nominations Dashboard</h1>
      {loading ? (
        <p>Loading nominations...</p>
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
              {nominations.map((item) => (
                <tr key={item.id} className="text-gray-800">
                  <td className="px-4 py-2 border">{item.id}</td>
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
    </div>
  );
};

export default Dashboard;
