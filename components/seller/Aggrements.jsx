import Text from "./Text";

const Aggrements = (props) => {
  return (
    <div
      style={{ maxHeight: "900px" }}
      dir="rtl"
      className="agg bg-light p-5 rounded-3 w-75"
    >
      <div className="mb-4 d-flex justify-content-between">
        <h3>شروط وأحكام البائع</h3>
        <button className="btn btn-danger" onClick={() => props.close()}>
          إغلاق
        </button>
      </div>
      <div className="px-1" style={{ maxHeight: "400px", overflowY: "scroll" }}>
        <Text />
      </div>
    </div>
  );
};

export default Aggrements;
