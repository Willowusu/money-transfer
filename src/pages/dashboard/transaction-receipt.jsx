import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Sample transaction data
const transactions = [
  {
    id: "TXN-001",
    sender: {
      name: "Test Three USA",
      email: "testthreeusa@mail.com",
      phone: "+1 222 222 2222",
    },
    recipient: {
      name: "John Doe",
      phone: "+233 244 000 111",
    },
    method: "Mobile Money",
    status: "Success",
    date: "2024-06-12 13:50",
    receiptNo: "1740750601603",
    description: "School Fees Payment",
    usd: 100,
    ghs: 1540.45,
    fee: 5,
  },
];

export default function TransactionReceipt() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the transaction by ID
  const transaction = transactions.find((txn) => txn.id === id);

  if (!transaction) {
    return (
      <div className="text-center py-10 text-gray-600">
        <h2 className="text-xl font-semibold">Transaction not found</h2>
        <p>We couldn't find a receipt with ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl p-8">
      <div className="text-center mb-6 ">
        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back
          </button>
          <div></div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Receipt from Vola Money Transfer
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Receipt #{transaction.receiptNo}
          <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
            {transaction.status}
          </span>
        </p>
      </div>

      {/* Sender / Beneficiary / Other Details */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 w-full">
          <div className="w-full">
            <h2 className="text-sm text-gray-500 font-semibold uppercase mb-1">
              Sender
            </h2>
            <p className="text-sm font-medium text-gray-700">
              {transaction.sender.name}
            </p>
            <p className="text-sm text-gray-500">{transaction.sender.email}</p>
            <p className="text-sm text-gray-500">{transaction.sender.phone}</p>
          </div>
          <div className="w-full">
            <h2 className="text-sm text-gray-500 font-semibold uppercase mb-1">
              Beneficiary
            </h2>
            <p className="text-sm font-medium text-gray-700">
              {transaction.recipient.name}
            </p>
            <p className="text-sm text-gray-500">-</p>
            <p className="text-sm text-gray-500">
              {transaction.recipient.phone}
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-sm text-gray-500 font-semibold uppercase mb-1">
              Receipt Number
            </h2>
            <p className="text-sm font-medium text-gray-700">
              {transaction.receiptNo}
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-sm text-gray-500 font-semibold uppercase mb-1">
              Transaction Date
            </h2>
            <p className="text-sm font-medium text-gray-700">
              {transaction.date}
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-sm text-gray-500 font-semibold uppercase mb-1">
              Description
            </h2>
            <p className="text-sm font-medium text-gray-700">
              {transaction.description}
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-sm text-gray-500 font-semibold uppercase mb-1">
              Payment Method
            </h2>
            <p className="text-sm font-medium text-gray-700">
              {transaction.method}
              <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                {transaction.status}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className=" mb-8 border border-gray-200 rounded-lg">
        <table className="w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-50 text-gray-500 font-medium uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Amount (USD)</th>
              <th className="px-6 py-3 text-left">Amount (GHS)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t">
              <td className="px-6 py-3 font-medium">Amount Paid</td>
              <td className="px-6 py-3">{transaction.usd}</td>
              <td className="px-6 py-3">{transaction.ghs}</td>
            </tr>
            <tr>
              <td className="px-6 py-3 font-medium">Transfer Fee</td>
              <td className="px-6 py-3">{transaction.fee}</td>
              <td className="px-6 py-3">-</td>
            </tr>
            <tr>
              <td className="px-6 py-3 font-medium">Amount Converted</td>
              <td className="px-6 py-3">{transaction.usd}</td>
              <td className="px-6 py-3">{transaction.ghs}</td>
            </tr>
            <tr className="bg-gray-50 font-bold">
              <td className="px-6 py-3 text-gray-900">Amount Received</td>
              <td colSpan="2" className="px-6 py-3 text-gray-900">
                {transaction.ghs} GHS
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-600 mb-2">
        We really appreciate your business and if there's anything else we can
        do, please let us know!
      </p>
      <p className="text-xs text-gray-600">
        This service is offered by Vola Money Transfer through the web and
        mobile application.
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200 text-sm">
        <a href="#" className="text-blue-600 hover:underline py-1">
          Contact Us
        </a>
        <a href="#" className="text-blue-600 hover:underline py-1">
          Terms & Conditions
        </a>
        <a href="#" className="text-blue-600 hover:underline py-1">
          support@mail.com
        </a>
      </div>
    </div>
  );
}
