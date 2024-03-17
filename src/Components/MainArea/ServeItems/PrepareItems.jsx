export default function PrepareItems({ info, serial }) {
  return (
    <>
      <tr className="text-[#282828b3] text-base font-normal">
        <th className="text-[#282828cc] font-semibold">{serial}</th>
        <td>{info.recipeName}</td>
        <td>{info.preparingTime}</td>
        <td>{info.calories}</td>
      </tr>
    </>
  );
}
