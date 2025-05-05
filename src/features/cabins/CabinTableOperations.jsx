import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterFiled="discount"
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "no-discount",
            label: "No Discount",
          },
          {
            value: "with-discount",
            label: "With Discount",
          },
        ]}
      ></Filter>
      <SortBy
        options={[
          { value: "name-asc", label: "sort by name (A-Z)" },
          { value: "name-desc", label: "sort By Name (Z-A)" },
          { value: "regularPrice-asc", label: "sort price (low first)" },
          { value: "regularPrice-desc", label: "sort price (high first)" },
          { value: "maxCapacity-asc", label: "sort by Capacity (low first)" },
          { value: "maxCapacity-desc", label: "sort by Capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
