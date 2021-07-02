import "./chessboard.css";
const Chessboard = () => {
  const Row = () => {
    return (
      <div className="square-row">
        <div className="square-box"></div>
        <div className="square-box"></div>
        <div className="square-box"></div>
        <div className="square-box"></div>
        <div className="square-box"></div>
        <div className="square-box"></div>
        <div className="square-box"></div>
        <div className="square-box"></div>
      </div>
    );
  };
  return (
    <div className="board">
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default Chessboard;
