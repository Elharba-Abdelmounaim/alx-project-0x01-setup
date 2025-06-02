import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">{name} ({username})</h2>
        <p className="text-sm text-gray-500">{email} | {phone}</p>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        <p><strong>Company:</strong> {company.name}</p>
        <p><em>{company.catchPhrase}</em></p>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{website}</a></p>
      </div>
      <div className="text-sm text-gray-700">
        <p><strong>Address:</strong> {address.street}, {address.suite}, {address.city} ({address.zipcode})</p>
      </div>
    </div>
  );
};

export default UserCard;
