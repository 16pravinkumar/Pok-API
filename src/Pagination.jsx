/* eslint-disable react/prop-types */
const Pagination = ({page, setPage}) => {

  const handleNext = () => {
   setPage(page+10)
  }
  const handlePrev = () => {
  
   setPage(page-10)
  }

  return (
    <div className="containers stramble">
    <div className="ctn">
        <button disabled={page <= 0} className="target btnss" onClick={handlePrev}>Previous</button>
    </div>
    <div className="ctn">
        <button className="target btnss" onClick={handleNext}>Next</button>
    </div>
</div>
  )
}
export default Pagination