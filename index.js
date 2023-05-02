const Button = (props) => {
  const { btnName, className } = props;
  return <button className={className}>{btnName}</button>;
};

const element = (
  <div className="bg-main-container">
    <h1 className="heading"> Special Buttons</h1>
    <div className="btn-container">
      <Button btnName="Like" className="btn-sty-1" />
      <Button btnName="Comment" className="btn-sty-2" />
      <Button btnName="Share" className="btn-sty-3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
