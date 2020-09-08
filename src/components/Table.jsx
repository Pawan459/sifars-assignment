import React from "react";
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";

const columns = ["ID", "name", "price", "coupon", "stock"];

const options = {
  filter: true,
  filterType: "dropdown",
};

const data = [];
function createData(ID, name, price, coupon, stock) {
  return { ID, name, price, coupon, stock };
}

function chooseYesOrNo() {
  const choices = ["yes", "no"];
  return choices[parseInt((Math.random() * 2).toString(), 10)];
}

(function createMockData() {
  for (let index = 0; index < 50; index++) {
    data.push(
      createData(
        index,
        `Item name ${index}`,
        2100 + index,
        chooseYesOrNo(),
        chooseYesOrNo()
      )
    );
  }
})();

export default function Table() {
  return (
    <React.Fragment>
      <MUIDataTable
        title={"Sifars Assignment"}
        data={data}
        columns={columns}
        options={options}
        responsive={"standard"}
      />
      <div className="btn-group">
        <Button variant="outlined">Delete</Button>
        <Button variant="outlined">Reset</Button>
      </div>
    </React.Fragment>
  );
}
