const Rows = ({ data, renderCell }) => {
  const { body, header } = data;

  return (
    <>
      {body.map((item, rowIndex) => (
        <tr key={rowIndex} className="bg-white text-gray-900 even:bg-gray-100">
          <td className="px-4 py-2 w-1 text-xs border-b border-gray-300">
            {rowIndex + 1}
          </td>
          {header.map((key, colIndex) => (
            <td
              key={colIndex}
              className="px-4 py-2 w-1 text-xs border-b border-gray-300"
            >
              {renderCell ? renderCell(item, key) : item[key]}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default Rows;
